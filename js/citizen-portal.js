window.BhuSetu = window.BhuSetu || {};
BhuSetu.CitizenPortal = {
  init() {
    const downloadBtn = document.getElementById('download-card-btn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        const parcel = BhuSetu.UI.getSelectedParcel();
        if (parcel) this.generatePropertyCardPDF(parcel);
      });
    }

    this.populateParcelSelect();

    const citizenSelect = document.getElementById('citizen-parcel-select');
    if (citizenSelect) {
      citizenSelect.addEventListener('change', (e) => {
        const parcelId = e.target.value;
        if (parcelId && BhuSetu.UI && BhuSetu.UI.selectParcel) {
          BhuSetu.UI.selectParcel(parcelId);
        }
      });
    }
  },

  populateParcelSelect() {
    const select = document.getElementById('citizen-parcel-select');
    if (!select || !BhuSetu.SeedData) return;
    
    select.innerHTML = '<option value="">-- Choose Parcel to Verify --</option>';
    
    const parcels = BhuSetu.SeedData.getAllParcels();
    parcels.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.id;
      const score = (p.trustScore !== undefined && p.trustScore !== null) ? p.trustScore : (p.trust_num !== undefined ? p.trust_num : 70);
      const grade = p.trustGrade || p.trust_score || 'B';
      const vill = (p.location && p.location.village) ? p.location.village : (p.village || '');
      const dist = (p.location && p.location.district) ? p.location.district : (p.district || '');
      const identifier = p.ulpin || p.surveyNumber || p.state_survey_no || p.id;
      
      opt.textContent = `${identifier} [Trust Score: ${score}/100 Grade ${grade}] - ${vill}, ${dist}`;
      select.appendChild(opt);
    });
  },

  displayParcel(parcel) {
    if (!parcel) return;

    const citizenSelect = document.getElementById('citizen-parcel-select');
    if (citizenSelect && citizenSelect.value !== parcel.id) {
      citizenSelect.value = parcel.id;
    }

    // Left Panel
    const ulpinEl = document.getElementById('parcel-ulpin');
    if (ulpinEl) ulpinEl.innerHTML = `<span>ULPIN</span><span>${parcel.ulpin || 'N/A'}</span>`;
    
    const surveyEl = document.getElementById('parcel-survey-no');
    if (surveyEl) surveyEl.innerHTML = `<span>Survey No</span><span>${parcel.surveyNumber || parcel.state_survey_no || 'N/A'}</span>`;
    
    const classificationEl = document.getElementById('parcel-classification');
    if (classificationEl) {
        const clColor = parcel.status === 'CLEAN' ? 'var(--safe-green)' : (parcel.status === 'WARNING' ? 'var(--warning-amber)' : 'var(--critical-red)');
        classificationEl.innerHTML = `<span>Classification</span><span style="color:${clColor}; font-weight:600;">${parcel.classification || parcel.zoning || 'N/A'}</span>`;
    }
    
    const locEl = document.getElementById('parcel-location');
    if (locEl) {
        const vill = (parcel.location && parcel.location.village) ? parcel.location.village : (parcel.village || '');
        const dist = (parcel.location && parcel.location.district) ? parcel.location.district : (parcel.district || '');
        const st = (parcel.location && parcel.location.state) ? parcel.location.state : (parcel.state || '');
        locEl.innerHTML = `<span>Location</span><span>${vill}, ${dist}, ${st}</span>`;
    }
    
    const ownerNameEl = document.getElementById('owner-name');
    if (ownerNameEl) {
        const oName = (parcel.owner && parcel.owner.maskedName) ? parcel.owner.maskedName : (parcel.owner_masked || 'N/A');
        ownerNameEl.innerHTML = `<span>Name</span><span>${oName}</span>`;
    }
    
    const ownerTypeEl = document.getElementById('owner-type');
    if (ownerTypeEl) {
        const oType = (parcel.owner && parcel.owner.type) ? parcel.owner.type : (parcel.owner_type || 'Statutory Freehold');
        ownerTypeEl.innerHTML = `<span>Type</span><span>${oType}</span>`;
    }
    
    const rorArea = (parcel.area && parcel.area.ror) ? parcel.area.ror : (parcel.legal_ror_area_sqm || 'N/A');
    const gisArea = (parcel.area && parcel.area.gis) ? parcel.area.gis : (parcel.gis_area_sqm || 'N/A');
    
    const rorEl = document.getElementById('area-ror-value');
    if (rorEl) rorEl.innerHTML = `<span>RoR Area</span><span>${Number(rorArea).toLocaleString()} m²</span>`;
    
    const gisEl = document.getElementById('area-gis-value');
    if (gisEl) {
        let diffPercent = 0;
        if (Number(rorArea) > 0 && Number(gisArea) > 0) {
          diffPercent = Math.abs(Number(rorArea) - Number(gisArea)) / Number(rorArea) * 100;
        }
        const diffColor = diffPercent > 2 ? 'var(--critical-red)' : 'inherit';
        gisEl.innerHTML = `<span>GIS Area</span><span style="color:${diffColor};">${Number(gisArea).toLocaleString()} m²</span>`;
        
        const matchStatus = document.getElementById('area-match-status');
        if (matchStatus) {
            if (diffPercent <= 2) {
              matchStatus.innerHTML = `<span>Match</span><span style="color:var(--safe-green); font-weight:600;">Match ✓</span>`;
            } else if (diffPercent <= 5) {
              matchStatus.innerHTML = `<span>Match</span><span style="color:var(--warning-amber); font-weight:600;">Minor Discrepancy (${diffPercent.toFixed(1)}%)</span>`;
            } else {
              matchStatus.innerHTML = `<span>Match</span><span style="color:var(--critical-red); font-weight:600;">Significant Discrepancy (${diffPercent.toFixed(1)}%)</span>`;
            }
        }
    }

    const regEl = document.getElementById('area-regional');
    if (regEl && BhuSetu.Config) {
        const regional = BhuSetu.Config.convertArea(Number(rorArea), (parcel.area && parcel.area.regionalUnit) || 'SQ_YARD');
        if (regional) {
          regEl.innerHTML = `<span>Regional Area</span><span>${regional.value.toFixed(2)} ${regional.label}</span>`;
        }
    }

    const zoningBadge = document.getElementById('zoning-badge');
    if (zoningBadge) {
        zoningBadge.textContent = parcel.zoning || parcel.classification || 'Standard Freehold';
        zoningBadge.style.backgroundColor = parcel.status === 'CLEAN' ? 'var(--safe-green-bg)' : (parcel.status === 'WARNING' ? 'var(--warning-amber-bg)' : 'var(--critical-red-bg)');
        zoningBadge.style.color = parcel.status === 'CLEAN' ? 'var(--safe-green)' : (parcel.status === 'WARNING' ? 'var(--warning-amber)' : 'var(--critical-red)');
        zoningBadge.style.fontWeight = '600';
    }

    const encList = document.getElementById('encumbrance-list');
    if (encList) {
        encList.innerHTML = '';
        const encs = parcel.encumbrances || [];
        if (encs.length === 0) {
          encList.innerHTML = '<div style="font-size:12px; color:var(--safe-green); font-weight:600;">✓ Nil Encumbrance (Title Clean)</div>';
        } else {
          encs.forEach(enc => {
            const div = document.createElement('div');
            div.style.fontSize = '12px';
            div.style.marginBottom = '6px';
            div.style.borderLeft = '3px solid var(--terra-primary)';
            div.style.paddingLeft = '6px';
            div.innerHTML = `<strong>${enc.date}</strong> - ${enc.type}: ${enc.details} <span class="badge" style="background:var(--taupe); font-size:10px;">${enc.status}</span>`;
            encList.appendChild(div);
          });
        }
    }

    const taxStatus = document.getElementById('tax-status');
    const tStat = (parcel.tax && parcel.tax.status) ? parcel.tax.status : (parcel.tax_status || 'Paid');
    if (taxStatus) {
        const tColor = (tStat === 'Paid' || tStat === 'Clear') ? 'var(--safe-green)' : 'var(--critical-red)';
        taxStatus.innerHTML = `<span>Tax Status</span><span style="color:${tColor}; font-weight:600;">${tStat}</span>`;
    }
    const taxLast = document.getElementById('tax-last-paid');
    const tLast = (parcel.tax && parcel.tax.lastPaid) ? parcel.tax.lastPaid : '2025-11-20';
    if (taxLast) taxLast.innerHTML = `<span>Last Paid</span><span>${tLast}</span>`;

    const taxAmt = document.getElementById('tax-amount');
    const tAmt = (parcel.tax && parcel.tax.amount) ? parcel.tax.amount : '₹14,200';
    if (taxAmt) taxAmt.innerHTML = `<span>Amount</span><span>${tAmt}</span>`;

    // Right Panel
    let grade = 'F';
    if (parcel.trustScore >= 90) grade = 'A';
    else if (parcel.trustScore >= 75) grade = 'B';
    else if (parcel.trustScore >= 55) grade = 'C';
    else if (parcel.trustScore >= 35) grade = 'D';
    else if (parcel.trustScore >= 15) grade = 'E';
    this.renderTrustGauge(grade, parcel.trustScore);
    const trustDetails = document.getElementById('trust-details');
    if (trustDetails) trustDetails.textContent = `Trust score is based on data corroboration and compliance metrics.`;
    
    const alertsContainer = document.getElementById('parcel-alerts-container');
    if (alertsContainer) {
        alertsContainer.innerHTML = '';
        (parcel.violations || []).forEach(v => {
          const div = document.createElement('div');
          div.className = 'violation-card';
          div.style.borderLeft = `4px solid ${v.severity === 'CRITICAL' ? 'red' : (v.severity === 'WARNING' ? 'orange' : 'blue')}`;
          div.style.padding = '8px';
          div.style.margin = '4px 0';
          div.innerHTML = `<strong>${v.severity}</strong>: ${v.description}<br><small>${v.details}</small>`;
          alertsContainer.appendChild(div);
        });
    }
  },

  clearDisplay() {
    ['parcel-ulpin', 'parcel-survey-no', 'parcel-classification', 'parcel-location',
     'owner-name', 'owner-type', 'area-ror-value', 'area-gis-value', 'area-regional',
     'area-match-status', 'zoning-badge', 'encumbrance-list', 'tax-status',
     'tax-last-paid', 'tax-amount', 'trust-gauge', 'trust-grade-letter',
     'trust-details', 'parcel-alerts-container'].forEach(id => {
       const el = document.getElementById(id);
       if (el) el.innerHTML = '';
     });
  },

  renderTrustGauge(grade, score) {
    const gauge = document.getElementById('trust-gauge');
    const letter = document.getElementById('trust-grade-letter');
    
    const colors = { A: 'green', B: 'lightgreen', C: 'yellow', D: 'orange', E: 'orangered', F: 'red' };
    const color = colors[grade] || 'gray';
    
    if (gauge) {
        gauge.style.background = `conic-gradient(${color} ${score}%, #e0e0e0 0)`;
    }
    
    if (letter) {
        letter.textContent = grade;
        letter.style.color = color;
    }
  },

  generatePropertyCardPDF(parcel) {
    if (!window.jspdf) {
        if (BhuSetu.UI) BhuSetu.UI.showNotification('jsPDF not loaded', 'error');
        return;
    }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Verified Property Card - BhuSetu', 20, 20);
    
    doc.setFontSize(12);
    doc.text(`ULPIN: ${parcel.ulpin || 'N/A'}`, 20, 40);
    doc.text(`Owner: ${parcel.owner ? parcel.owner.maskedName : 'N/A'}`, 20, 50);
    doc.text(`Area (RoR): ${parcel.area ? parcel.area.ror : 'N/A'} sqm`, 20, 60);
    doc.text(`Area (GIS): ${parcel.area ? parcel.area.gis : 'N/A'} sqm`, 20, 70);
    doc.text(`Zoning: ${parcel.zoning || 'N/A'}`, 20, 80);
    doc.text(`Trust Score: ${parcel.trustScore} (${parcel.trustGrade})`, 20, 90);
    
    doc.text('Encumbrances:', 20, 110);
    let y = 120;
    (parcel.encumbrances || []).forEach(enc => {
      doc.text(`- ${enc.date} ${enc.type} [${enc.status}]`, 25, y);
      y += 10;
    });
    
    y += 10;
    doc.text(`Tax Status: ${parcel.tax ? parcel.tax.status : 'N/A'}`, 20, y);
    
    y += 20;
    doc.text('Violations:', 20, y);
    y += 10;
    (parcel.violations || []).forEach(v => {
      doc.text(`- [${v.severity}] ${v.description}`, 25, y);
      y += 10;
    });

    doc.setFontSize(10);
    doc.text('Generated via BhuSetu Digital Public Infrastructure', 20, 280);

    const filename = `PropertyCard_${parcel.ulpin || parcel.surveyNumber || parcel.id}.pdf`;
    doc.save(filename);
  }
};
