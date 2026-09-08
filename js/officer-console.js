window.BhuSetu = window.BhuSetu || {};
BhuSetu.OfficerConsole = {
  auditLog: [],

  init() {
    const resBtns = [
      { id: 'btn-dispatch-uav', action: 'UAV_RESURVEY_DISPATCHED' },
      { id: 'btn-issue-notice', action: 'SHOW_CAUSE_NOTICE_ISSUED' },
      { id: 'btn-validate', action: 'APPROVAL_VALIDATED' },
      { id: 'btn-escalate', action: 'ESCALATED_TO_DC' }
    ];

    resBtns.forEach(btn => {
      const el = document.getElementById(btn.id);
      if (el) {
        el.addEventListener('click', () => {
          const parcel = BhuSetu.UI ? BhuSetu.UI.getSelectedParcel() : null;
          if (parcel) {
            this.logAuditAction(btn.action, parcel.id);
            if (BhuSetu.UI) BhuSetu.UI.showNotification(`Action ${btn.action} executed.`, 'success');
          } else {
            if (BhuSetu.UI) BhuSetu.UI.showNotification('No parcel selected', 'error');
          }
        });
      }
    });

    this.populateParcelSelect();

    const reviewBtn = document.getElementById('officer-review-btn');
    if (reviewBtn) {
      reviewBtn.addEventListener('click', () => {
        const select = document.getElementById('officer-parcel-select');
        if (select && select.value) {
          this.selectTriageItem(select.value);
        }
      });
    }
  },

  populateParcelSelect() {
    const select = document.getElementById('officer-parcel-select');
    if (!select || !BhuSetu.SeedData) return;
    select.innerHTML = '<option value="">-- Select a parcel --</option>';
    BhuSetu.SeedData.getAllParcels().forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.id;
      opt.textContent = (p.ulpin || p.surveyNumber) + ' - ' + p.location.village + ', ' + p.location.district;
      select.appendChild(opt);
    });
  },

  loadTriageQueue(parcels) {
    if (!parcels && BhuSetu.SeedData) parcels = BhuSetu.SeedData.getAllParcels();
    if (!parcels) return;
    
    const sorted = [...parcels].sort((a, b) => {
      const rank = { 'CRITICAL': 1, 'WARNING': 2, 'CLEAN': 3 };
      return (rank[a.status] || 4) - (rank[b.status] || 4);
    });

    const tbody = document.getElementById('triage-queue-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    sorted.forEach(parcel => {
      const tr = document.createElement('tr');
      const priorityColor = parcel.status === 'CRITICAL' ? 'red' : (parcel.status === 'WARNING' ? 'orange' : 'green');
      const vType = (parcel.violations && parcel.violations.length > 0) ? parcel.violations[0].type : 'No Violations';
      
      const randomDate = new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0];

      tr.innerHTML = `
        <td><span class="badge" style="color:${priorityColor};font-weight:bold;">${parcel.status}</span></td>
        <td><a href="#" class="triage-link">${parcel.ulpin || parcel.surveyNumber}</a></td>
        <td>${vType}</td>
        <td>${parcel.location ? `${parcel.location.district}, ${parcel.location.state}` : 'N/A'}</td>
        <td>${randomDate}</td>
        <td><button class="btn btn-outline btn-sm triage-view-btn">View</button></td>
      `;

      tr.querySelector('.triage-link').addEventListener('click', (e) => {
        e.preventDefault();
        this.selectTriageItem(parcel.id);
      });
      tr.querySelector('.triage-view-btn').addEventListener('click', () => {
        this.selectTriageItem(parcel.id);
      });

      tbody.appendChild(tr);
    });
  },

  selectTriageItem(parcelId) {
    if (!BhuSetu.SeedData) return;
    const parcel = BhuSetu.SeedData.getParcelById(parcelId);
    if (!parcel) return;

    const secCorr = document.getElementById('corroboration-section');
    if (secCorr) secCorr.classList.remove('hidden');
    const secRes = document.getElementById('resolution-section');
    if (secRes) secRes.classList.remove('hidden');

    this.showCorroboration(parcel);
    
    if (BhuSetu.MapEngine && BhuSetu.MapEngine.flyToParcel) {
       BhuSetu.MapEngine.flyToParcel(parcel);
    }
    if (BhuSetu.UI && BhuSetu.UI.selectParcel) {
       BhuSetu.UI.selectParcel(parcelId);
    }
  },

  showCorroboration(parcel) {
    const ror = document.getElementById('ror-record-content');
    if (ror) {
        ror.innerHTML = `
          <p>Owner: ${parcel.owner ? parcel.owner.maskedName : 'N/A'}</p>
          <p>RoR Area: ${parcel.area ? parcel.area.ror : 'N/A'} sqm</p>
          <p>Legal Status: ${parcel.status}</p>
          <p>Encumbrances: ${parcel.encumbrances ? parcel.encumbrances.length : 0}</p>
        `;
    }

    const cad = document.getElementById('cadastral-vector-content');
    if (cad) {
        cad.innerHTML = `
          <p>GIS Computed Area: ${parcel.area ? parcel.area.gis : 'N/A'} sqm</p>
          <p>Zoning Overlay: ${parcel.zoning || 'N/A'}</p>
          <p>Geometry Type: ${parcel.geometry ? parcel.geometry.type : 'N/A'}</p>
        `;
    }

    const b = parcel.building && parcel.building.detected ? parcel.building.detected : null;
    const drone = document.getElementById('drone-truth-content');
    if (drone) {
        drone.innerHTML = `
          <p>Detected Building: ${b ? 'Yes' : 'No'}</p>
          ${b ? `<p>Height: ${b.height}m</p><p>Floors: ${b.floors}</p><p>FAR: ${b.far}</p>` : ''}
          <p>Violations: ${parcel.violations ? parcel.violations.length : 0}</p>
        `;
    }
  },

  logAuditAction(action, parcelId) {
    const entry = {
      officer: 'Officer R. Sharma (ID: GOV-2024-0847)',
      action: action,
      parcelId: parcelId,
      timestamp: new Date().toISOString(),
      hash: this.simpleHash(action + parcelId + Date.now())
    };
    
    this.auditLog.unshift(entry);

    const logDiv = document.getElementById('audit-log-entries');
    if (logDiv) {
      const div = document.createElement('div');
      div.className = 'audit-entry';
      div.style.borderBottom = '1px solid #ccc';
      div.style.padding = '8px 0';
      div.innerHTML = `<strong>${entry.timestamp}</strong> - ${entry.officer} executed <em>${entry.action}</em> on ${entry.parcelId}. <br><small>Hash: ${entry.hash}</small>`;
      logDiv.prepend(div);
    }
  },

  getAuditEntries() {
    return this.auditLog;
  },

  simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash).toString(16);
  }
};
