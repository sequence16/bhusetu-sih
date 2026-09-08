window.BhuSetu = window.BhuSetu || {};

BhuSetu.MapEngine = {
  map: null,
  secondaryMap: null,
  isLoaded: false,
  pendingOperations: [],
  comparisonMap: null,

  init: function(containerId) {
    this.map = new maplibregl.Map({
      container: containerId,
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
      center: [78.9629, 20.5937],
      zoom: 5,
      minZoom: 3,
      maxZoom: 18
    });

    this.map.addControl(new maplibregl.NavigationControl(), 'top-left');
    this.map.addControl(new maplibregl.ScaleControl({ unit: 'metric' }), 'bottom-left');
    this.map.addControl(new maplibregl.GeolocateControl({
      positionOptions: { enableHighAccuracy: true },
      trackUserLocation: true
    }), 'top-right');

    this.map.on('load', () => {
      this.isLoaded = true;
      this.setupDroneLayer();
      this.map.loadImage('assets/hatch-pattern.svg').then(image => {
        if (!this.map.hasImage('hatch-pattern')) {
          this.map.addImage('hatch-pattern', image.data);
        }
      }).catch(e => {
        console.warn("Could not load hatch pattern.", e);
      });
      
      this.processPendingOperations();
    });

    this.setupInteractions();
  },

  setupDroneLayer: function() {
    this.map.addSource('drone-source', {
      type: 'raster',
      tiles: [
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
      ],
      tileSize: 256,
      maxzoom: 18
    });

    this.map.addLayer({
      id: 'drone-layer',
      type: 'raster',
      source: 'drone-source',
      layout: { visibility: 'visible' },
      paint: { 'raster-opacity': 0.7 }
    });
  },

  processPendingOperations: function() {
    while (this.pendingOperations.length > 0) {
      const op = this.pendingOperations.shift();
      op();
    }
  },

  getMap: function() {
    return this.map;
  },

  initSecondaryMap: function(containerId) {
    this.secondaryMap = new maplibregl.Map({
      container: containerId,
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
      center: [78.9629, 20.5937],
      zoom: 5,
      minZoom: 3,
      maxZoom: 18
    });
    return this.secondaryMap;
  },

  loadAllParcels: function(parcels) {
    if (!this.isLoaded) {
      this.pendingOperations.push(() => this.loadAllParcels(parcels));
      return;
    }

    parcels.forEach(parcel => {
      const pId = parcel.id;
      
      // Cadastral Boundary
      if (parcel.geometry) {
        this.map.addSource(`parcel-source-${pId}`, {
          type: 'geojson',
          data: parcel.geometry
        });

        // Fill layer
        this.map.addLayer({
          id: `cadastral-fill-${pId}`,
          type: 'fill',
          source: `parcel-source-${pId}`,
          paint: {
            'fill-color': '#C85A32',
            'fill-opacity': 0 // default transparent, highlighted later
          }
        });

        // Outline layer
        this.map.addLayer({
          id: `cadastral-boundary-${pId}`,
          type: 'line',
          source: `parcel-source-${pId}`,
          paint: {
            'line-color': '#262322',
            'line-width': [
              'interpolate', ['linear'], ['zoom'],
              16, 2,
              20, 3
            ]
          }
        });

        // Label layer
        const labelText = parcel.ulpin || parcel.surveyNumber || '';
        this.map.addLayer({
          id: `cadastral-label-${pId}`,
          type: 'symbol',
          source: `parcel-source-${pId}`,
          layout: {
            'text-field': labelText,
            'text-size': 12,
            'text-anchor': 'center'
          },
          paint: {
            'text-color': '#262322',
            'text-halo-color': '#FFFFFF',
            'text-halo-width': 2
          }
        });
      }

      // Building Footprint
      if (parcel.buildingFootprint) {
        this.map.addSource(`building-source-${pId}`, {
          type: 'geojson',
          data: parcel.buildingFootprint
        });
        
        this.map.addLayer({
          id: `building-footprint-${pId}`,
          type: 'fill',
          source: `building-source-${pId}`,
          paint: {
            'fill-color': '#C85A32',
            'fill-opacity': 0.2
          }
        });
        this.map.addLayer({
          id: `building-footprint-stroke-${pId}`,
          type: 'line',
          source: `building-source-${pId}`,
          paint: {
            'line-color': '#C85A32',
            'line-width': 2
          }
        });
      }

      // Sanctioned Footprint
      if (parcel.sanctionedFootprint) {
        this.map.addSource(`sanctioned-source-${pId}`, {
          type: 'geojson',
          data: parcel.sanctionedFootprint
        });
        
        this.map.addLayer({
          id: `sanctioned-footprint-${pId}`,
          type: 'fill',
          source: `sanctioned-source-${pId}`,
          paint: {
            'fill-color': '#2D5A27',
            'fill-opacity': 0.15
          }
        });
        this.map.addLayer({
          id: `sanctioned-footprint-stroke-${pId}`,
          type: 'line',
          source: `sanctioned-source-${pId}`,
          paint: {
            'line-color': '#2D5A27',
            'line-width': 2,
            'line-dasharray': [2, 2]
          }
        });
      }

      // Buffer Zones
      if (parcel.bufferZones && Array.isArray(parcel.bufferZones)) {
        parcel.bufferZones.forEach((bz, i) => {
          this.map.addSource(`buffer-source-${pId}-${i}`, {
            type: 'geojson',
            data: bz
          });
          
          let fillOpacity = 0.15;
          if (bz.properties && bz.properties.type === 'forest') {
            fillOpacity = 0.20;
          }

          this.map.addLayer({
            id: `buffer-zone-${pId}-${i}`,
            type: 'fill',
            source: `buffer-source-${pId}-${i}`,
            paint: {
              'fill-color': '#2D5A27',
              'fill-opacity': fillOpacity
            }
          });
          this.map.addLayer({
            id: `buffer-zone-stroke-${pId}-${i}`,
            type: 'line',
            source: `buffer-source-${pId}-${i}`,
            paint: {
              'line-color': '#2D5A27',
              'line-width': 2,
              'line-dasharray': [2, 2]
            }
          });
        });
      }

      // Violation Overlay
      if (parcel.status === 'CRITICAL') {
        const violationGeoJSON = (window.BhuSetu && BhuSetu.SpatialAnalysis) 
          ? BhuSetu.SpatialAnalysis.generateViolationGeoJSON(parcel) : null;
          
        if (violationGeoJSON && violationGeoJSON.features && violationGeoJSON.features.length > 0) {
          this.map.addSource(`violation-source-${pId}`, {
            type: 'geojson',
            data: violationGeoJSON
          });

          this.map.addLayer({
            id: `violation-overlay-${pId}`,
            type: 'fill',
            source: `violation-source-${pId}`,
            paint: {
              'fill-pattern': 'hatch-pattern',
              'fill-color': '#B91C1C',
              'fill-opacity': 0.2
            }
          });
        }
      }
    });
  },

  flyToParcel: function(parcel) {
    if (!this.isLoaded) {
      this.pendingOperations.push(() => this.flyToParcel(parcel));
      return;
    }
    
    if (parcel && parcel.geometry && window.turf) {
      const bbox = turf.bbox(parcel.geometry);
      this.map.fitBounds(bbox, { padding: 80, duration: 1500, maxZoom: 17 });
    }
  },

  highlightParcel: function(parcelId) {
    if (!this.isLoaded) return;
    
    this.clearHighlight();

    if (this.map.getLayer(`cadastral-fill-${parcelId}`)) {
      this.map.setPaintProperty(`cadastral-fill-${parcelId}`, 'fill-opacity', 0.15);
    }
    if (this.map.getLayer(`cadastral-boundary-${parcelId}`)) {
      this.map.setPaintProperty(`cadastral-boundary-${parcelId}`, 'line-width', 3);
    }
  },

  clearHighlight: function() {
    if (!this.isLoaded) return;
    
    const style = this.map.getStyle();
    if (!style || !style.layers) return;
    
    style.layers.forEach(layer => {
      if (layer.id.startsWith('cadastral-fill-')) {
        this.map.setPaintProperty(layer.id, 'fill-opacity', 0);
      }
      if (layer.id.startsWith('cadastral-boundary-')) {
        this.map.setPaintProperty(layer.id, 'line-width', [
            'interpolate', ['linear'], ['zoom'],
            16, 2,
            20, 3
        ]);
      }
    });
  },

  toggleLayer: function(layerKey, visible) {
    if (!this.isLoaded) return;
    
    const style = this.map.getStyle();
    if (!style || !style.layers) return;

    const visibility = visible ? 'visible' : 'none';

    style.layers.forEach(layer => {
      let match = false;
      if (layerKey === 'cadastral' && (layer.id.startsWith('cadastral-') || layer.id.startsWith('parcel-'))) match = true;
      else if (layerKey === 'drone' && layer.id === 'drone-layer') match = true;
      else if (layerKey === 'footprint' && (layer.id.startsWith('building-footprint') || layer.id.startsWith('sanctioned-footprint'))) match = true;
      else if (layerKey === 'violations' && layer.id.startsWith('violation-overlay')) match = true;
      else if (layerKey === 'buffers' && layer.id.startsWith('buffer-zone')) match = true;
      
      if (match) {
        this.map.setLayoutProperty(layer.id, 'visibility', visibility);
      }
    });
  },

  setLayerOpacity: function(value0to1) {
    if (!this.isLoaded) return;
    
    const style = this.map.getStyle();
    if (!style || !style.layers) return;
    
    if (this.map.getLayer('drone-layer')) {
      this.map.setPaintProperty('drone-layer', 'raster-opacity', value0to1);
    }

    style.layers.forEach(layer => {
      if (layer.id.startsWith('building-footprint') && layer.type === 'fill') {
        this.map.setPaintProperty(layer.id, 'fill-opacity', 0.2 * value0to1);
      }
      if (layer.id.startsWith('sanctioned-footprint') && layer.type === 'fill') {
        this.map.setPaintProperty(layer.id, 'fill-opacity', 0.15 * value0to1);
      }
    });
  },

  setupInteractions: function() {
    this.map.on('mousemove', (e) => {
      const fillLayers = this.map.getStyle().layers.filter(l => l.id.startsWith('cadastral-fill-')).map(l => l.id);
      if (fillLayers.length === 0) return;

      const features = this.map.queryRenderedFeatures(e.point, { layers: fillLayers });
      
      if (features.length > 0) {
        this.map.getCanvas().style.cursor = 'pointer';
        
        // Popup could be added here
      } else {
        this.map.getCanvas().style.cursor = '';
      }
    });
  },

  onParcelClick: function(callback) {
    if (!this.map) return;
    
    this.map.on('click', (e) => {
      const fillLayers = this.map.getStyle().layers.filter(l => l.id.startsWith('cadastral-fill-')).map(l => l.id);
      if (fillLayers.length === 0) return;
      
      const features = this.map.queryRenderedFeatures(e.point, { layers: fillLayers });
      if (features.length > 0) {
        const featureId = features[0].layer.id.replace('cadastral-fill-', '');
        callback(featureId);
      }
    });
  },

  enableSplitView: function() {
    const mapContainer = document.getElementById('map-container');
    if (!mapContainer || this.comparisonMap) return;

    const compareWrapper = document.createElement('div');
    compareWrapper.id = 'compare-wrapper';
    compareWrapper.style.position = 'absolute';
    compareWrapper.style.top = '0';
    compareWrapper.style.left = '0';
    compareWrapper.style.width = '100%';
    compareWrapper.style.height = '100%';
    compareWrapper.style.overflow = 'hidden';
    compareWrapper.style.pointerEvents = 'none';
    compareWrapper.style.zIndex = '10';

    const compareMapDiv = document.createElement('div');
    compareMapDiv.id = 'compare-map-canvas';
    compareMapDiv.style.position = 'absolute';
    compareMapDiv.style.top = '0';
    compareMapDiv.style.left = '0';
    compareMapDiv.style.width = '100%';
    compareMapDiv.style.height = '100%';
    
    compareWrapper.appendChild(compareMapDiv);

    const slider = document.createElement('div');
    slider.id = 'compare-slider';
    slider.style.position = 'absolute';
    slider.style.top = '0';
    slider.style.bottom = '0';
    slider.style.left = '50%';
    slider.style.width = '4px';
    slider.style.backgroundColor = '#fff';
    slider.style.cursor = 'ew-resize';
    slider.style.zIndex = '11';
    slider.style.transform = 'translateX(-50%)';
    slider.style.pointerEvents = 'auto';
    slider.style.boxShadow = '0 0 4px rgba(0,0,0,0.5)';
    
    const handle = document.createElement('div');
    handle.style.position = 'absolute';
    handle.style.top = '50%';
    handle.style.left = '50%';
    handle.style.transform = 'translate(-50%, -50%)';
    handle.style.width = '32px';
    handle.style.height = '32px';
    handle.style.backgroundColor = '#C85A32';
    handle.style.borderRadius = '50%';
    handle.style.border = '2px solid #fff';
    handle.style.display = 'flex';
    handle.style.alignItems = 'center';
    handle.style.justifyContent = 'center';
    handle.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
    handle.innerHTML = '<div style="width:2px; height:14px; background:#fff; margin:1px;"></div><div style="width:2px; height:14px; background:#fff; margin:1px;"></div>';
    
    slider.appendChild(handle);
    
    mapContainer.appendChild(compareWrapper);
    mapContainer.appendChild(slider);

    this.comparisonMap = new maplibregl.Map({
      container: 'compare-map-canvas',
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
      center: this.map.getCenter(),
      zoom: this.map.getZoom(),
      pitch: this.map.getPitch(),
      bearing: this.map.getBearing(),
      interactive: false,
      maxZoom: 18
    });

    this.comparisonMap.on('load', () => {
      this.comparisonMap.addSource('drone-source-compare', {
        type: 'raster',
        tiles: [
          'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
        ],
        tileSize: 256,
        maxzoom: 18
      });

      this.comparisonMap.addLayer({
        id: 'drone-layer-compare',
        type: 'raster',
        source: 'drone-source-compare',
        layout: { visibility: 'visible' },
        paint: { 'raster-opacity': 1.0 }
      });
      
      this.map.setLayoutProperty('drone-layer', 'visibility', 'none');
    });

    const syncMaps = () => {
      this.comparisonMap.jumpTo({
        center: this.map.getCenter(),
        zoom: this.map.getZoom(),
        pitch: this.map.getPitch(),
        bearing: this.map.getBearing()
      });
    };
    this.map.on('move', syncMaps);
    this._syncMapsListener = syncMaps;

    let isDragging = false;
    const onMouseDown = () => { isDragging = true; };
    const onMouseUp = () => { isDragging = false; };
    const onMouseMove = (e) => {
      if (!isDragging) return;
      const rect = mapContainer.getBoundingClientRect();
      let x = e.clientX - rect.left;
      x = Math.max(0, Math.min(x, rect.width));
      const percentage = (x / rect.width) * 100;
      slider.style.left = `${percentage}%`;
      compareWrapper.style.clipPath = `inset(0 0 0 ${percentage}%)`;
    };

    slider.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    
    compareWrapper.style.clipPath = `inset(0 0 0 50%)`;

    this._sliderEvents = { mousedown: onMouseDown, mouseup: onMouseUp, mousemove: onMouseMove, slider };
  },

  disableSplitView: function() {
    if (!this.comparisonMap) return;
    
    if (this._syncMapsListener) {
      this.map.off('move', this._syncMapsListener);
    }
    
    if (this._sliderEvents) {
      this._sliderEvents.slider.removeEventListener('mousedown', this._sliderEvents.mousedown);
      window.removeEventListener('mouseup', this._sliderEvents.mouseup);
      window.removeEventListener('mousemove', this._sliderEvents.mousemove);
    }

    this.comparisonMap.remove();
    this.comparisonMap = null;

    const wrapper = document.getElementById('compare-wrapper');
    const slider = document.getElementById('compare-slider');
    if (wrapper) wrapper.remove();
    if (slider) slider.remove();

    if (this.map.getLayer('drone-layer')) {
      this.map.setLayoutProperty('drone-layer', 'visibility', 'visible');
    }
  },

  addCustomGeoJSON: function(geojson, name) {
    if (!this.isLoaded) return;
    const sourceId = `custom-source-${Date.now()}`;
    const layerId = `custom-layer-${Date.now()}`;
    const colors = ['#C85A32', '#A94424', '#D4845C', '#F0C4A8', '#2D5A27', '#D97706'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    this.map.addSource(sourceId, {
      type: 'geojson',
      data: geojson
    });

    this.map.addLayer({
      id: layerId,
      type: 'fill',
      source: sourceId,
      paint: {
        'fill-color': randomColor,
        'fill-opacity': 0.4
      }
    });
  },

  addRasterTiles: function(url) {
    if (!this.isLoaded) return;
    const sourceId = `custom-raster-source-${Date.now()}`;
    const layerId = `custom-raster-layer-${Date.now()}`;
    
    this.map.addSource(sourceId, {
      type: 'raster',
      tiles: [url],
      tileSize: 256
    });

    this.map.addLayer({
      id: layerId,
      type: 'raster',
      source: sourceId,
      paint: { 'raster-opacity': 0.8 }
    });
  }
};
