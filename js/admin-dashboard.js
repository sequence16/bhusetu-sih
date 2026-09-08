window.BhuSetu = window.BhuSetu || {};
BhuSetu.AdminDashboard = {
  init() {
    const filter = document.getElementById('state-filter-select');
    if (filter) {
      filter.addEventListener('change', (e) => {
        const state = e.target.value;
        let all = [];
        if (BhuSetu.SeedData) all = BhuSetu.SeedData.getAllParcels();
        const filtered = state === 'all' ? all : all.filter(p => p.location && p.location.district === state);
        this.updateMetrics(filtered);
        this.renderAnomalyChart(filtered);
      });
    }
    
    this.initHeatmap();
    this.renderPipelineActivity();
  },

  updateMetrics(parcels) {
    if (!parcels && BhuSetu.SeedData) parcels = BhuSetu.SeedData.getAllParcels();
    if (!parcels) parcels = [];
    
    const total = parcels.length;
    const resolved = parcels.filter(p => p.status === 'CLEAN').length;
    const active = total - resolved;

    const mTotal = document.getElementById('metric-total-parcels');
    if (mTotal) mTotal.querySelector('.metric-value').textContent = total;
    
    const mActive = document.getElementById('metric-active-conflicts');
    if (mActive) mActive.querySelector('.metric-value').textContent = active;
    
    const mRes = document.getElementById('metric-resolved');
    if (mRes) mRes.querySelector('.metric-value').textContent = resolved;
    
    const mThr = document.getElementById('metric-throughput');
    if (mThr) mThr.querySelector('.metric-value').textContent = Math.floor(Math.random()*100 + 100) + '/hr';
  },

  renderAnomalyChart(parcels) {
    if (!parcels && BhuSetu.SeedData) parcels = BhuSetu.SeedData.getAllParcels();
    if (!parcels) parcels = [];
    
    const buckets = { '0-0.3': 0, '0.3-0.5': 0, '0.5-0.7': 0, '0.7-0.9': 0, '0.9-1.0': 0 };
    parcels.forEach(p => {
      const score = p.isolationScore !== undefined ? p.isolationScore : Math.random();
      if (score < 0.3) buckets['0-0.3']++;
      else if (score < 0.5) buckets['0.3-0.5']++;
      else if (score < 0.7) buckets['0.5-0.7']++;
      else if (score < 0.9) buckets['0.7-0.9']++;
      else buckets['0.9-1.0']++;
    });

    const container = document.getElementById('anomaly-chart-bars');
    if (!container) return;
    container.innerHTML = '';
    
    const max = Math.max(...Object.values(buckets), 1);

    Object.entries(buckets).forEach(([label, count]) => {
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.marginBottom = '4px';
      
      const lbl = document.createElement('div');
      lbl.style.width = '60px';
      lbl.textContent = label;
      
      const barWrapper = document.createElement('div');
      barWrapper.style.flex = '1';
      barWrapper.style.backgroundColor = '#f0f0f0';
      barWrapper.style.height = '16px';
      
      const bar = document.createElement('div');
      bar.style.width = `${(count / max) * 100}%`;
      bar.style.height = '100%';
      if (label === '0.9-1.0' || label === '0.7-0.9') bar.style.backgroundColor = 'red';
      else if (label === '0.5-0.7') bar.style.backgroundColor = 'orange';
      else bar.style.backgroundColor = 'green';
      
      const cnt = document.createElement('div');
      cnt.style.width = '30px';
      cnt.style.textAlign = 'right';
      cnt.textContent = count;

      barWrapper.appendChild(bar);
      row.appendChild(lbl);
      row.appendChild(barWrapper);
      row.appendChild(cnt);
      container.appendChild(row);
    });
  },

  renderPipelineActivity() {
    const feed = document.getElementById('pipeline-feed-entries');
    if (!feed) return;
    feed.innerHTML = '';

    const events = [
      { text: '7/12 Extract batch (Nashik) — 847 records ingested', status: 'green' },
      { text: 'SVAMITVA drone tiles (Ajmer) — 12 villages processed', status: 'green' },
      { text: 'Jamabandi sync (Haryana) — 2,104 records mapped', status: 'amber' },
      { text: 'OCR extraction — 56 sale deeds parsed', status: 'green' }
    ];

    events.forEach(ev => {
      const div = document.createElement('div');
      div.style.marginBottom = '8px';
      div.innerHTML = `<span style="color:${ev.status === 'green' ? 'green' : 'orange'};">●</span> ${ev.text} <small style="color:#888;">[${new Date().toLocaleTimeString()}]</small>`;
      feed.appendChild(div);
    });
  },

  initHeatmap() {
    if (BhuSetu.MapEngine && BhuSetu.MapEngine.initSecondaryMap) {
      const map = BhuSetu.MapEngine.initSecondaryMap('admin-map-canvas');
      map.on('load', () => {
        const parcels = BhuSetu.SeedData ? BhuSetu.SeedData.getAllParcels() : [];
        const features = parcels.filter(p => p.geometry && p.geometry.coordinates).map(p => {
          return {
            type: 'Feature',
            geometry: { type: 'Point', coordinates: p.geometry.coordinates[0][0] },
            properties: { status: p.status }
          };
        });
        
        map.addSource('admin-heatmap', {
          type: 'geojson',
          data: { type: 'FeatureCollection', features: features }
        });
        
        map.addLayer({
          id: 'admin-heatmap-pts',
          type: 'circle',
          source: 'admin-heatmap',
          paint: {
            'circle-radius': 6,
            'circle-color': [
              'match', ['get', 'status'],
              'CLEAN', '#2D5A27',
              'WARNING', '#D97706',
              'CRITICAL', '#B91C1C',
              '#6B6360'
            ],
            'circle-stroke-width': 1,
            'circle-stroke-color': '#fff'
          }
        });
        
        if (features.length > 0) {
          map.flyTo({ center: features[0].geometry.coordinates, zoom: 6 });
        }
      });
    }
  }
};
