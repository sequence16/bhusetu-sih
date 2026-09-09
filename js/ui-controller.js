window.BhuSetu = window.BhuSetu || {};

BhuSetu.UI = {
  selectedParcel: null,
  currentUser: null,
  
  init() {
    // Role switcher
    document.querySelectorAll('.role-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetRole = e.target.dataset.role;
        if (targetRole === 'officer' && !this.currentUser) {
          this.openLoginModal("Officer authentication required. Use the 1-Click Auto-Fill button for SIH evaluation.");
          return;
        }
        this.switchRole(targetRole);
      });
    });

    // Header Login Button
    const headerLoginBtn = document.getElementById('header-login-btn');
    if (headerLoginBtn) {
      headerLoginBtn.addEventListener('click', () => {
        this.openLoginModal();
      });
    }

    // Modal Close
    const loginCloseBtn = document.getElementById('login-close-btn');
    if (loginCloseBtn) {
      loginCloseBtn.addEventListener('click', () => {
        this.closeLoginModal();
      });
    }

    // Auto-fill Officer credentials
    const quickFillBtn = document.getElementById('quick-fill-judge-btn');
    if (quickFillBtn) {
      quickFillBtn.addEventListener('click', () => {
        const u = document.getElementById('login-username');
        const p = document.getElementById('login-password');
        if (u) u.value = 'officer_admin';
        if (p) p.value = 'BhuSetu@2026';
        this.showNotification('Revenue Officer Credentials auto-filled.', 'info');
      });
    }

    // Login Submit
    const loginSubmitBtn = document.getElementById('login-submit-btn');
    if (loginSubmitBtn) {
      loginSubmitBtn.addEventListener('click', () => {
        this.performLogin();
      });
    }

    // Enter key support in login inputs
    ['login-username', 'login-password'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') this.performLogin();
        });
      }
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

  openLoginModal(noticeText) {
    const overlay = document.getElementById('login-modal-overlay');
    if (overlay) overlay.classList.remove('hidden');
    const errEl = document.getElementById('login-error-msg');
    if (errEl) {
      if (noticeText) {
        errEl.textContent = noticeText;
        errEl.style.color = 'var(--terra-primary)';
        errEl.style.display = 'block';
      } else {
        errEl.style.display = 'none';
      }
    }
  },

  closeLoginModal() {
    const overlay = document.getElementById('login-modal-overlay');
    if (overlay) overlay.classList.add('hidden');
  },

  performLogin() {
    const uEl = document.getElementById('login-username');
    const pEl = document.getElementById('login-password');
    const errEl = document.getElementById('login-error-msg');

    const username = uEl ? uEl.value.trim() : '';
    const password = pEl ? pEl.value.trim() : '';

    if (!username || !password) {
      if (errEl) {
        errEl.textContent = 'Please enter both username and password.';
        errEl.style.color = 'var(--critical-red)';
        errEl.style.display = 'block';
      }
      return;
    }

    // Call Backend API
    fetch('/api/auth/officer-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
    .then(r => r.json())
    .then(data => {
      if (data.success) {
        const user = {
          username: username,
          role: data.role || 'REVENUE_OFFICER',
          full_name: data.full_name || (data.user ? data.user.full_name : "K. Chandrashekhar Rao (Tahsildar)"),
          designation: data.designation || "Divisional Revenue Officer / Tahsildar",
          jurisdiction: data.jurisdiction || "Ranga Reddy District / Zone 4"
        };
        this.setAuthenticatedUser(user);
        this.closeLoginModal();
        this.showNotification(`Authenticated: ${user.designation} (${user.jurisdiction})`, 'success');
        this.switchRole('officer');
      } else {
        if (errEl) {
          errEl.textContent = data.message || 'Invalid credentials. Use officer_admin / BhuSetu@2026';
          errEl.style.color = 'var(--critical-red)';
          errEl.style.display = 'block';
        }
      }
    })
    .catch(() => {
      // Offline fallback
      if ((username === 'officer_admin' || username === 'sih_judge_admin') && password === 'BhuSetu@2026') {
        const fallbackUser = {
          username: username,
          role: 'REVENUE_OFFICER',
          full_name: username === 'officer_admin' ? 'K. Chandrashekhar Rao (Tahsildar)' : "Hon'ble SIH Evaluation Committee",
          designation: 'Divisional Revenue Officer / Tahsildar',
          jurisdiction: 'Ranga Reddy District / Zone 4'
        };
        this.setAuthenticatedUser(fallbackUser);
        this.closeLoginModal();
        this.showNotification(`Officer Session Active (Local Mode)`, 'success');
        this.switchRole('officer');
      } else {
        if (errEl) {
          errEl.textContent = 'Use officer_admin / BhuSetu@2026';
          errEl.style.color = 'var(--critical-red)';
          errEl.style.display = 'block';
        }
      }
    });
  },

  setAuthenticatedUser(user) {
    this.currentUser = user;
    const badge = document.getElementById('auth-status-badge');
    const label = document.getElementById('auth-user-label');
    const loginBtn = document.getElementById('header-login-btn');

    if (badge && label) {
      label.textContent = `${user.full_name} [${user.role.toUpperCase()}]`;
      badge.classList.remove('hidden');
    }
    if (loginBtn) {
      loginBtn.style.display = 'none';
    }
  },

  renderSearchResults(results) {
    const searchDropdown = document.getElementById('search-dropdown');
    if (!searchDropdown) return;
    searchDropdown.innerHTML = '';
    if (results.length === 0) {
      searchDropdown.innerHTML = '<div style="padding:10px; font-size:12px; color:var(--clay-mid);">No parcels found matching query</div>';
    } else {
      results.forEach(parcel => {
        const div = document.createElement('div');
        div.style.padding = '8px 12px';
        div.style.cursor = 'pointer';
        div.style.borderBottom = '1px solid var(--taupe)';
        div.style.fontSize = '12px';
        const vill = (parcel.location && parcel.location.village) ? parcel.location.village : (parcel.village || '');
        const dist = (parcel.location && parcel.location.district) ? parcel.location.district : (parcel.district || '');
        const color = parcel.status === 'CLEAN' ? 'var(--safe-green)' : (parcel.status === 'WARNING' ? 'var(--warning-amber)' : 'var(--critical-red)');
        
        div.innerHTML = `
          <div style="font-family:var(--font-mono); font-weight:600; color:var(--charcoal);">${parcel.ulpin || parcel.surveyNumber}</div>
          <div style="color:var(--clay-mid); font-size:11px;">${vill}, ${dist} • <span style="color:${color}; font-weight:700;">${parcel.status}</span></div>
        `;
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
          const placeholder = document.getElementById('officer-map-canvas');
          if (placeholder) placeholder.remove();
          officerMapContainer.appendChild(mapContainer);
        }
      }
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

  showNotification(message, type = 'info') {
    const container = document.getElementById('notification-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `notification toast-${type}`;
    toast.style.padding = '12px 16px';
    toast.style.marginTop = '8px';
    toast.style.borderRadius = 'var(--radius-md)';
    toast.style.backgroundColor = 'var(--bone)';
    toast.style.boxShadow = 'var(--shadow-md)';
    toast.style.color = 'var(--charcoal)';
    toast.style.fontSize = '13px';
    toast.style.fontWeight = '500';
    toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    
    if (type === 'success') toast.style.borderLeft = '5px solid var(--safe-green)';
    else if (type === 'warning') toast.style.borderLeft = '5px solid var(--warning-amber)';
    else if (type === 'error') toast.style.borderLeft = '5px solid var(--critical-red)';
    else toast.style.borderLeft = '5px solid var(--terra-primary)';

    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(20px)';
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }
};
