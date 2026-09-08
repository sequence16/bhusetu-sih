window.BhuSetu = window.BhuSetu || {};

BhuSetu.SpatialAnalysis = {
  computeArea: function(geojsonFeature) {
    if (!geojsonFeature || !window.turf) return 0;
    try {
      return turf.area(geojsonFeature);
    } catch (e) {
      console.error("Error computing area", e);
      return 0;
    }
  },

  computeIntersection: function(featureA, featureB) {
    if (!featureA || !featureB || !window.turf) return null;
    try {
      const intersection = turf.intersect(turf.featureCollection([featureA, featureB]));
      return intersection;
    } catch (e) {
      console.error("Error computing intersection", e);
      return null;
    }
  },

  computeEncroachmentMetrics: function(building, buffer) {
    if (!building || !buffer || !window.turf) return { area: 0, depthM: 0, intersectionGeometry: null };
    
    try {
      const intersection = this.computeIntersection(building, buffer);
      if (!intersection) {
        return { area: 0, depthM: 0, intersectionGeometry: null };
      }
      const area = turf.area(intersection);
      
      const depthM = Math.sqrt(area); 
      
      return { area, depthM, intersectionGeometry: intersection };
    } catch (e) {
      return { area: 0, depthM: 0, intersectionGeometry: null };
    }
  },

  runFullComplianceCheck: function(parcel) {
    const violations = [];
    let riskScore = 0;

    if (!parcel || !parcel.buildingFootprint || !window.turf) {
      return { violations, riskScore, complianceStatus: 'COMPLIANT' };
    }

    if (parcel.bufferZones && Array.isArray(parcel.bufferZones)) {
      parcel.bufferZones.forEach((buffer, idx) => {
        const metrics = this.computeEncroachmentMetrics(parcel.buildingFootprint, buffer);
        if (metrics.area > 0.5) {
          violations.push({
            id: `buf-viol-${parcel.id}-${idx}`,
            type: buffer.properties?.type || 'BUFFER_ENCROACHMENT',
            severity: 'CRITICAL',
            description: `Building encroaches into buffer zone by ${metrics.area.toFixed(1)} sq m`,
            encroachmentArea: metrics.area,
            geometry: metrics.intersectionGeometry
          });
          riskScore = Math.max(riskScore, 100);
        }
      });
    }

    if (parcel.building && parcel.building.sanctioned && parcel.building.detected) {
      const heightCheck = this.compareHeightCompliance(parcel.building.sanctioned, parcel.building.detected);
      if (heightCheck.exceeded) {
        violations.push({
          id: `height-viol-${parcel.id}`,
          type: 'HEIGHT_EXCEEDED',
          severity: 'WARNING',
          description: `Height exceeds sanctioned limit by ${heightCheck.deltaM.toFixed(1)}m`,
          details: `Sanctioned: ${heightCheck.sanctionedHeight}m, Detected: ${heightCheck.detectedHeight}m`
        });
        riskScore = Math.max(riskScore, 75);
      }

      const farCheck = this.compareFARCompliance(parcel.building.sanctioned, parcel.building.detected);
      if (farCheck.exceeded) {
        violations.push({
          id: `far-viol-${parcel.id}`,
          type: 'FAR_EXCEEDED',
          severity: 'WARNING',
          description: `FAR limit exceeded`,
          details: `Sanctioned FAR: ${farCheck.sanctionedFAR}, Detected FAR: ${farCheck.detectedFAR.toFixed(2)}`
        });
        riskScore = Math.max(riskScore, 75);
      }
    }
    
    const complianceStatus = riskScore >= 100 ? 'NON_COMPLIANT' : (riskScore > 0 ? 'WARNING' : 'COMPLIANT');
    return { violations, riskScore, complianceStatus };
  },

  compareHeightCompliance: function(sanctioned, detected) {
    if (!sanctioned || !detected || typeof sanctioned.height !== 'number' || typeof detected.height !== 'number') {
      return { exceeded: false, sanctionedHeight: 0, detectedHeight: 0, deltaM: 0 };
    }
    const delta = detected.height - sanctioned.height;
    return {
      exceeded: delta > 1.0,
      sanctionedHeight: sanctioned.height,
      detectedHeight: detected.height,
      deltaM: delta > 0 ? delta : 0
    };
  },

  compareFARCompliance: function(sanctioned, detected) {
    if (!sanctioned || !detected || typeof sanctioned.far !== 'number' || typeof detected.far !== 'number') {
      return { exceeded: false, sanctionedFAR: 0, detectedFAR: 0, ratio: 1 };
    }
    const ratio = detected.far / sanctioned.far;
    return {
      exceeded: detected.far > sanctioned.far * 1.05,
      sanctionedFAR: sanctioned.far,
      detectedFAR: detected.far,
      ratio: ratio
    };
  },

  generateViolationGeoJSON: function(parcel) {
    const features = [];
    if (!parcel || !window.turf) return turf.featureCollection(features);

    const checks = this.runFullComplianceCheck(parcel);
    
    checks.violations.forEach(v => {
      if (v.geometry) {
        let geom = v.geometry.geometry || v.geometry;
        features.push({
          type: 'Feature',
          geometry: geom,
          properties: {
            severity: v.severity,
            type: v.type
          }
        });
      }
    });

    if (parcel.buildingFootprint && parcel.sanctionedFootprint) {
      try {
        const diff = turf.difference(turf.featureCollection([parcel.buildingFootprint, parcel.sanctionedFootprint]));
        if (diff) {
          features.push({
            type: 'Feature',
            geometry: diff.geometry,
            properties: {
              severity: 'WARNING',
              type: 'UNAUTHORIZED_EXTENSION'
            }
          });
        }
      } catch (e) {
      }
    }

    return turf.featureCollection(features);
  }
};
