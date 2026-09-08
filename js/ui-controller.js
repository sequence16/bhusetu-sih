window.BhuSetu = window.BhuSetu || {};
BhuSetu.UI = {
  selectedParcel: null,
  
  init() {
    // Role switcher
    document.querySelectorAll('.role-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.switchRole(e.target.dataset.role);
      });
    });

    // ULPIN Search
    const searchInput = document.getElementById('ulpin-search-input');
    const searchDropdown = document.getElementById('search-dropdown');
    
    let debounceTimer;
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          const query = e.target.value.trim();
          if (query.length > 0 && BhuSetu.SeedData) {
            const results = BhuSetu.SeedData.searchParcels(query);
            this.renderSearchResults(results);
          } else {
            if (searchDropdown) searchDropdown.classList.add('hidden');
          }
        }, 300);
      });

      searchInput.addEventListener('blur', () => {
        setTimeout(() => { if (searchDropdown) searchDropdown.classList.add('hidden'); }, 200);
      });
    }
  },

  renderSearchResults(results) {
    const searchDropdown = document.getElementById('search-dropdown');
    if (!searchDropdown) return;
    searchDropdown.innerHTML = '';
    if (results.length === 0) {
      searchDropdown.innerHTML = '<div style="padding:8px;">No results found</div>';
    } else {
      results.forEach(parcel => {
        const div = document.createElement('div');
        div.style.padding = '8px';
        div.style.cursor = 'pointer';
        div.textContent = `${parcel.ulpin || parcel.surveyNumber} - ${parcel.location.district}`;
        div.addEventListener('mousedown', () => {
          this.selectParcel(parcel.id);
          const input = document.getElementById('ulpin-search-input');
          if (input) input.value = parcel.ulpin || parcel.surveyNumber;
        });
        searchDropdown.appendChild(div);
      });
    }
    searchDropdown.classList.remove('hidden');
  },

  switchRole(role) {
    document.querySelectorAll('.portal-view').forEach(view => {
      view.classList.add('hidden');
    });
    const targetView = document.getElementById(`${role}-view`);
    if (targetView) targetView.classList.remove('hidden');

    document.querySelectorAll('.role-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.role === role);
    });

    const mapContainer = document.getElementById('map-container');
    if (mapContainer) {
      if (role === 'citizen') {
        const centerPanel = document.querySelector('.center-panel');
        if (centerPanel && mapContainer.parentNode !== centerPanel) {
          centerPanel.appendChild(mapContainer);
        }
        if (this.selectedParcel && BhuSetu.MapEngine && BhuSetu.MapEngine.flyToParcel) {
          BhuSetu.MapEngine.flyToParcel(this.selectedParcel);
        }
      } else if (role === 'officer') {
        const officerMapContainer = document.getElementById('officer-map-container');
        if (officerMapContainer && mapContainer.parentNode !== officerMapContainer) {
          // Remove the placeholder canvas if it exists
          const placeholder = document.getElementById('officer-map-canvas');
          if (placeholder) placeholder.remove();
          
          officerMapContainer.appendChild(mapContainer);
        }
      }
      // Note: role === 'admin' has its own map (initHeatmap), so we don't move the main map there.
      setTimeout(() => {
        if (BhuSetu.MapEngine) {
          if (BhuSetu.MapEngine.map) BhuSetu.MapEngine.map.resize();
          if (BhuSetu.MapEngine.secondaryMap) BhuSetu.MapEngine.secondaryMap.resize();
        }
      }, 50);
    }

    if (role === 'officer' && BhuSetu.OfficerConsole) {
      BhuSetu.OfficerConsole.loadTriageQueue();
    } else if (role === 'admin' && BhuSetu.AdminDashboard) {
      BhuSetu.AdminDashboard.updateMetrics();
    }
  },

  getCurrentRole() {
    const activeBtn = document.querySelector('.role-btn.active');
    return activeBtn ? activeBtn.dataset.role : 'citizen';
  },

  selectParcel(parcelId) {
    if (!BhuSetu.SeedData) return;
    const parcel = BhuSetu.SeedData.getParcelById(parcelId);
    if (!parcel) return;
    this.selectedParcel = parcel;

    if (BhuSetu.MapEngine) {
      if (BhuSetu.MapEngine.flyToParcel) BhuSetu.MapEngine.flyToParcel(parcel);
      if (BhuSetu.MapEngine.highlightParcel) BhuSetu.MapEngine.highlightParcel(parcelId);
    }
    if (BhuSetu.CitizenPortal) {
      BhuSetu.CitizenPortal.displayParcel(parcel);
    }
  },

  getSelectedParcel() {
    return this.selectedParcel;
  },

  showNotification(message, type) {
    const container = document.getElementById('notification-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `notification toast-${type}`;
    toast.style.padding = '12px';
    toast.style.marginTop = '8px';
    toast.style.borderRadius = '4px';
    toast.style.backgroundColor = '#fff';
    toast.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
    toast.style.transition = 'opacity 0.5s';
    
    if (type === 'success') toast.style.borderLeft = '4px solid green';
    else if (type === 'warning') toast.style.borderLeft = '4px solid orange';
    else if (type === 'error') toast.style.borderLeft = '4px solid red';
    else toast.style.borderLeft = '4px solid #C85A32';

    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 500);
    }, 5000);
  }
};
