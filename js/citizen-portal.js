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
  },

  displayParcel(parcel) {
    if (!parcel) return;

    // Left Panel
    const ulpinEl = document.getElementById('parcel-ulpin');
    if (ulpinEl) ulpinEl.textContent = `ULPIN: ${parcel.ulpin || 'N/A'}`;
    
    const surveyEl = document.getElementById('parcel-survey-no');
    if (surveyEl) surveyEl.textContent = `Survey No: ${parcel.surveyNumber || 'N/A'}`;
    
    const classificationEl = document.getElementById('parcel-classification');
    if (classificationEl) {
        classificationEl.textContent = `Classification: ${parcel.classification || 'N/A'}`;
        classificationEl.style.color = parcel.status === 'CLEAN' ? 'green' : (parcel.status === 'WARNING' ? 'orange' : 'red');
    }
    
    const locEl = document.getElementById('parcel-location');
    if (locEl && parcel.location) locEl.textContent = `Location: ${parcel.location.village}, ${parcel.location.district}, ${parcel.location.state}`;
    
    const ownerNameEl = document.getElementById('owner-name');
    if (ownerNameEl && parcel.owner) ownerNameEl.textContent = `Name: ${parcel.owner.maskedName || 'N/A'}`;
    
    const ownerTypeEl = document.getElementById('owner-type');
    if (ownerTypeEl && parcel.owner) ownerTypeEl.textContent = `Type: ${parcel.owner.type || 'N/A'}`;
    
    const rorArea = (parcel.area && parcel.area.ror) ? Number(parcel.area.ror).toLocaleString() : 'N/A';
    const gisArea = (parcel.area && parcel.area.gis) ? Number(parcel.area.gis).toLocaleString() : 'N/A';
    
    const rorEl = document.getElementById('area-ror-value');
    if (rorEl) rorEl.textContent = `RoR Area: ${rorArea} m²`;
    
    const gisEl = document.getElementById('area-gis-value');
    if (gisEl) {
        gisEl.textContent = `GIS Area: ${gisArea} m²`;
        let diffPercent = 0;
        if (parcel.area && parcel.area.ror && parcel.area.gis) {
          diffPercent = Math.abs(parcel.area.ror - parcel.area.gis) / parcel.area.ror * 100;
        }
        gisEl.style.color = diffPercent > 2 ? 'red' : 'inherit';
        
        const matchStatus = document.getElementById('area-match-status');
        if (matchStatus) {
            if (diffPercent <= 2) {
              matchStatus.textContent = 'Match ✓';
              matchStatus.style.color = 'green';
            } else if (diffPercent <= 5) {
              matchStatus.textContent = 'Minor Discrepancy';
              matchStatus.style.color = 'orange';
            } else {
              matchStatus.textContent = 'Significant Discrepancy';
              matchStatus.style.color = 'red';
            }
        }
    }

    const regEl = document.getElementById('area-regional');
    if (regEl && parcel.area && BhuSetu.Config) {
        const regional = BhuSetu.Config.convertArea(parcel.area.ror, parcel.area.regionalUnit);
        if (regional) regEl.textContent = `Regional: ${regional.value.toFixed(2)} ${regional.label} (Note: Bigha varies by state)`;
    }

    const zoningBadge = document.getElementById('zoning-badge');
    if (zoningBadge) {
        zoningBadge.textContent = parcel.zoning || 'N/A';
        zoningBadge.style.backgroundColor = parcel.status === 'CLEAN' ? '#E8F5E6' : (parcel.status === 'WARNING' ? '#FEF3C7' : '#FEE2E2');
    }

    const encList = document.getElementById('encumbrance-list');
    if (encList) {
        encList.innerHTML = '';
        (parcel.encumbrances || []).forEach(enc => {
          const div = document.createElement('div');
          div.textContent = `${enc.date} - ${enc.type}: ${enc.details} [${enc.status}]`;
          encList.appendChild(div);
        });
    }

    if (parcel.tax) {
        const taxStatus = document.getElementById('tax-status');
        if (taxStatus) {
            taxStatus.textContent = `Tax Status: ${parcel.tax.status}`;
            taxStatus.style.color = parcel.tax.status === 'Clear' ? 'green' : 'red';
        }
        const taxLast = document.getElementById('tax-last-paid');
        if (taxLast) taxLast.textContent = `Last Paid: ${parcel.tax.lastPaid || 'N/A'}`;
        const taxAmt = document.getElementById('tax-amount');
        if (taxAmt) taxAmt.textContent = `Amount: ${parcel.tax.amount || 'N/A'}`;
    }

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
