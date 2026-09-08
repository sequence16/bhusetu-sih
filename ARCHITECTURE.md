# BhuSetu Architecture Contract

All subagents MUST read this file and follow these contracts exactly to ensure all modules integrate seamlessly.

## Project Root
`C:\Users\Vibhas\.gemini\antigravity\scratch\bhusetu\`

## CDN Dependencies (loaded in index.html in this order)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css">
<script src="https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js"></script>
<script src="https://unpkg.com/@turf/turf@7/turf.min.js"></script>
<script src="https://unpkg.com/jspdf@2.5.2/dist/jspdf.umd.min.js"></script>
<script src="https://unpkg.com/html2canvas@1.4.1/dist/html2canvas.min.js"></script>
```

## CSS Custom Properties (variables.css)
```css
:root {
  /* Brand */
  --terra-primary: #C85A32;
  --terra-deep: #A94424;
  --terra-light: #D4845C;
  --terra-pale: #F0C4A8;
  /* Surfaces */
  --bone: #F9F6F0;
  --parchment: #F5F0E8;
  --white: #FFFFFF;
  /* Darks */
  --charcoal: #262322;
  --charcoal-soft: #333130;
  /* Neutrals */
  --taupe: #E6DFD5;
  --taupe-dark: #C4BAB0;
  --clay-slate: #4A4441;
  --clay-mid: #6B6360;
  --clay-light: #8A8280;
  /* Status */
  --safe-green: #2D5A27;
  --safe-green-bg: #E8F5E6;
  --warning-amber: #D97706;
  --warning-amber-bg: #FEF3C7;
  --critical-red: #B91C1C;
  --critical-red-bg: #FEE2E2;
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(38,35,34,0.06);
  --shadow-md: 0 4px 8px rgba(38,35,34,0.1);
  --shadow-lg: 0 10px 20px rgba(38,35,34,0.14);
  /* Radii */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  /* Fonts */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
  --transition-slow: 400ms ease;
}
```

## JS Namespace Convention
All modules attach to `window.BhuSetu`. Every module MUST create its namespace:
```js
window.BhuSetu = window.BhuSetu || {};
BhuSetu.ModuleName = { ... };
```

---

## COMPLETE DOM STRUCTURE (index.html)

The exact IDs and structure below MUST be used. JS modules reference these IDs.

```
<body id="app-body">

  <!-- ===== HEADER ===== -->
  <header id="app-header">
    <div id="header-left">
      <img id="app-logo" src="assets/favicon.svg" />
      <div id="app-title-group">
        <h1 id="app-title">BhuSetu</h1>
        <span id="app-subtitle">Bharat Unified Land Stack</span>
      </div>
    </div>
    <div id="header-center">
      <div id="role-switcher">
        <button class="role-btn active" data-role="citizen">Citizen Portal</button>
        <button class="role-btn" data-role="officer">Officer Console</button>
        <button class="role-btn" data-role="admin">State Admin</button>
      </div>
    </div>
    <div id="header-right">
      <div id="search-container">
        <input id="ulpin-search-input" type="text" placeholder="Search ULPIN / Survey No..." autocomplete="off" />
        <div id="search-dropdown" class="hidden"></div>
      </div>
      <div id="sync-status"><span class="sync-dot"></span> Synced 2 min ago</div>
    </div>
  </header>

  <!-- ===== CITIZEN PORTAL VIEW ===== -->
  <main id="citizen-view" class="portal-view active">
    <aside id="citizen-left-panel" class="side-panel">
      <div id="parcel-identity-card" class="info-card">
        <h3 class="card-title">Parcel Identity</h3>
        <div id="parcel-ulpin" class="field-row"></div>
        <div id="parcel-survey-no" class="field-row"></div>
        <div id="parcel-classification" class="field-row"></div>
        <div id="parcel-location" class="field-row"></div>
      </div>
      <div id="owner-card" class="info-card">
        <h3 class="card-title">Ownership</h3>
        <div id="owner-name" class="field-row"></div>
        <div id="owner-type" class="field-row"></div>
      </div>
      <div id="area-card" class="info-card">
        <h3 class="card-title">Area Measurement</h3>
        <div id="area-ror-value" class="field-row"></div>
        <div id="area-gis-value" class="field-row"></div>
        <div id="area-regional" class="field-row"></div>
        <div id="area-match-status" class="field-row"></div>
      </div>
      <div id="zoning-card" class="info-card">
        <h3 class="card-title">Zoning</h3>
        <div id="zoning-badge"></div>
      </div>
      <div id="encumbrance-card" class="info-card">
        <h3 class="card-title">Encumbrance History</h3>
        <div id="encumbrance-list"></div>
      </div>
      <div id="tax-card" class="info-card">
        <h3 class="card-title">Tax Status</h3>
        <div id="tax-status" class="field-row"></div>
        <div id="tax-last-paid" class="field-row"></div>
        <div id="tax-amount" class="field-row"></div>
      </div>
    </aside>

    <section id="citizen-center" class="center-panel">
      <div id="map-container">
        <div id="map-canvas"></div>
        <!-- MapLibre mounts inside #map-canvas -->
        <div id="layer-toggle-panel" class="map-overlay-panel">
          <h4>Layers</h4>
          <label><input type="checkbox" id="layer-toggle-cadastral" checked /> Cadastral Boundaries</label>
          <label><input type="checkbox" id="layer-toggle-drone" checked /> Drone Orthomosaic</label>
          <label><input type="checkbox" id="layer-toggle-footprint" checked /> Building Footprints</label>
          <label><input type="checkbox" id="layer-toggle-violations" checked /> Conflict Overlays</label>
          <label><input type="checkbox" id="layer-toggle-buffers" checked /> Buffer Zones</label>
          <div id="opacity-controls">
            <label>Layer Opacity</label>
            <input type="range" id="opacity-slider" min="0" max="100" value="70" />
          </div>
        </div>
        <button id="split-view-btn" class="map-tool-btn" title="Split View">⇔ Split</button>
        <div id="geojson-drop-overlay" class="hidden">
          <div class="drop-message">Drop GeoJSON File Here</div>
        </div>
      </div>
    </section>

    <aside id="citizen-right-panel" class="side-panel">
      <div id="trust-score-card" class="info-card">
        <h3 class="card-title">Public Trust Score</h3>
        <div id="trust-gauge"></div>
        <div id="trust-grade-letter"></div>
        <div id="trust-details"></div>
      </div>
      <div id="violation-summary" class="info-card">
        <h3 class="card-title">Compliance Status</h3>
        <div id="parcel-alerts-container"></div>
      </div>
      <button id="download-card-btn" class="btn btn-primary full-width">
        ⬇ Download Verified Property Card
      </button>
    </aside>
  </main>

  <!-- ===== OFFICER CONSOLE VIEW ===== -->
  <main id="officer-view" class="portal-view hidden">
    <div id="officer-layout">
      <section id="triage-section">
        <h2 class="section-title">Triaging Queue</h2>
        <table id="triage-queue-table">
          <thead>
            <tr>
              <th>Priority</th><th>ULPIN / Survey</th><th>Violation Type</th>
              <th>Location</th><th>Timestamp</th><th>Action</th>
            </tr>
          </thead>
          <tbody id="triage-queue-body"></tbody>
        </table>
      </section>

      <section id="corroboration-section" class="hidden">
        <h2 class="section-title">Three-Way Corroboration</h2>
        <div id="corroboration-grid">
          <div id="ror-record-card" class="corr-card">
            <h4>RoR Legal Record</h4>
            <div id="ror-record-content"></div>
          </div>
          <div id="cadastral-vector-card" class="corr-card">
            <h4>Cadastral Vector</h4>
            <div id="cadastral-vector-content"></div>
          </div>
          <div id="drone-truth-card" class="corr-card">
            <h4>Drone Ground Truth</h4>
            <div id="drone-truth-content"></div>
          </div>
        </div>
      </section>

      <section id="officer-map-section">
        <div id="officer-map-container">
          <div id="officer-map-canvas"></div>
        </div>
      </section>

      <section id="resolution-section" class="hidden">
        <h2 class="section-title">Resolution Actions</h2>
        <div id="resolution-actions">
          <button id="btn-dispatch-uav" class="btn btn-outline">🛩 Dispatch UAV Re-survey</button>
          <button id="btn-issue-notice" class="btn btn-danger">📋 Issue Show-Cause Notice</button>
          <button id="btn-validate" class="btn btn-success">✓ Validate Approval</button>
          <button id="btn-escalate" class="btn btn-warning">⬆ Escalate to District Collector</button>
        </div>
      </section>

      <section id="audit-section">
        <h2 class="section-title">Immutable Audit Log</h2>
        <div id="audit-log-entries"></div>
      </section>

      <section id="upload-tools-section">
        <h2 class="section-title">Data Ingestion Tools</h2>
        <div id="upload-tools-panel">
          <button id="geojson-upload-btn" class="btn btn-outline">📂 Upload GeoJSON/Shapefile</button>
          <div id="wms-input-group">
            <input id="wms-url-input" type="text" placeholder="Paste WMS/XYZ Tile URL..." />
            <button id="wms-load-btn" class="btn btn-outline">Load Tiles</button>
          </div>
          <button id="ocr-upload-btn" class="btn btn-outline">📄 OCR Document Upload</button>
          <button id="schema-adapter-btn" class="btn btn-outline">🔧 Schema Adapter</button>
        </div>
      </section>
    </div>
  </main>

  <!-- ===== ADMIN DASHBOARD VIEW ===== -->
  <main id="admin-view" class="portal-view hidden">
    <div id="admin-layout">
      <div id="admin-header-bar">
        <h2>State Administration Dashboard</h2>
        <select id="state-filter-select">
          <option value="all">All States</option>
          <option value="telangana" selected>Telangana</option>
          <option value="maharashtra">Maharashtra</option>
          <option value="delhi">Delhi NCT</option>
          <option value="rajasthan">Rajasthan</option>
          <option value="jharkhand">Jharkhand</option>
        </select>
      </div>

      <div id="admin-metrics-row">
        <div class="metric-card" id="metric-total-parcels">
          <span class="metric-label">Total Parcels Indexed</span>
          <span class="metric-value">0</span>
        </div>
        <div class="metric-card" id="metric-active-conflicts">
          <span class="metric-label">Active Conflicts</span>
          <span class="metric-value">0</span>
        </div>
        <div class="metric-card" id="metric-resolved">
          <span class="metric-label">Resolved</span>
          <span class="metric-value">0</span>
        </div>
        <div class="metric-card" id="metric-throughput">
          <span class="metric-label">Schema Throughput</span>
          <span class="metric-value">0/hr</span>
        </div>
      </div>

      <div id="admin-charts-row">
        <div id="admin-map-container">
          <h3>Conflict Heatmap</h3>
          <div id="admin-map-canvas"></div>
        </div>
        <div id="anomaly-chart-container">
          <h3>Isolation Forest Score Distribution</h3>
          <div id="anomaly-chart-bars"></div>
        </div>
      </div>

      <section id="pipeline-section">
        <h3>Schema Adapter Pipeline Activity</h3>
        <div id="pipeline-feed-entries"></div>
      </section>
    </div>
  </main>

  <!-- ===== AI COPILOT DRAWER ===== -->
  <button id="ai-toggle-btn" title="Bhu-Sahayak AI">🤖</button>
  <aside id="ai-drawer" class="hidden">
    <div id="ai-drawer-header">
      <h3>🤖 Bhu-Sahayak AI Copilot</h3>
      <button id="ai-drawer-close">✕</button>
    </div>
    <div id="ai-chat-messages"></div>
    <div id="ai-input-area">
      <input id="ai-input-field" type="text" placeholder="Ask about land records, disputes..." />
      <button id="ai-send-btn" class="btn btn-primary">Send</button>
    </div>
  </aside>

  <!-- ===== SCHEMA ADAPTER MODAL ===== -->
  <div id="schema-modal-overlay" class="modal-overlay hidden">
    <div id="schema-modal" class="modal-content">
      <div class="modal-header">
        <h3>Schema Adapter — Field Mapping</h3>
        <button id="schema-close-btn" class="modal-close">✕</button>
      </div>
      <div class="modal-body">
        <div id="schema-source-type-selector">
          <label>Source Record Type:</label>
          <select id="schema-source-select">
            <option value="ror">RoR (Record of Rights)</option>
            <option value="pahani">Pahani / Adangal</option>
            <option value="jamabandi">Jamabandi</option>
            <option value="satbara">7/12 Extract (Satbara)</option>
            <option value="mcd-approval">Municipal Building Approval</option>
            <option value="deed">Sub-Registrar Deed</option>
          </select>
        </div>
        <div id="schema-columns">
          <div id="schema-source-panel">
            <h4>Source Fields</h4>
            <div id="schema-source-fields"></div>
          </div>
          <div id="schema-mapping-lines"></div>
          <div id="schema-target-panel">
            <h4>Canonical ULPIN Model</h4>
            <div id="schema-target-fields"></div>
          </div>
        </div>
        <div id="schema-preview-section">
          <h4>Preview Mapped Record</h4>
          <table id="schema-preview-table">
            <thead><tr><th>Canonical Field</th><th>Mapped Value</th><th>Unit</th></tr></thead>
            <tbody id="schema-preview-table-body"></tbody>
          </table>
        </div>
      </div>
      <div class="modal-footer">
        <button id="schema-apply-btn" class="btn btn-primary">Apply Mapping</button>
      </div>
    </div>
  </div>

  <!-- ===== OCR MODAL ===== -->
  <div id="ocr-modal-overlay" class="modal-overlay hidden">
    <div id="ocr-modal" class="modal-content">
      <div class="modal-header">
        <h3>Document Vision / OCR Parser</h3>
        <button id="ocr-close-btn" class="modal-close">✕</button>
      </div>
      <div class="modal-body">
        <div id="ocr-dropzone" class="dropzone">
          <p>📄 Drop a scanned deed / patta document here</p>
          <p class="dropzone-sub">Accepts JPG, PNG, PDF</p>
          <span id="ocr-file-name"></span>
        </div>
        <div id="ocr-results-panel" class="hidden">
          <h4>Extracted Fields (Vision-LLM/OCR)</h4>
          <pre id="ocr-json-output"></pre>
        </div>
      </div>
    </div>
  </div>

  <!-- ===== NOTIFICATION CONTAINER ===== -->
  <div id="notification-container"></div>

</body>
```

---

## JS API CONTRACTS

### config.js → `BhuSetu.Config`
```js
BhuSetu.Config = {
  PALETTE: { terraPrimary, terraDeep, ... },  // Mirror CSS vars
  STATUS: { CLEAN: 'CLEAN', WARNING: 'WARNING', CRITICAL: 'CRITICAL' },
  TRUST_GRADES: { A: {min:90,color}, B: {min:75}, C: {min:55}, D: {min:35}, E: {min:15}, F: {min:0} },
  UNITS: {
    // { factor: multiplier_to_m2, label, states[] }
    BIGHA_RAJ: { factor: 809.4, label: 'Bigha (Rajasthan)' },
    BIGHA_JH:  { factor: 2480, label: 'Bigha (Jharkhand)' },
    GUNTHA:    { factor: 101.17, label: 'Guntha' },
    ACRE:      { factor: 4046.86, label: 'Acre' },
    HECTARE:   { factor: 10000, label: 'Hectare' },
    CENT:      { factor: 40.47, label: 'Cent' },
    BISWA:     { factor: 125.42, label: 'Biswa' },
    SQ_YARD:   { factor: 0.8361, label: 'Sq. Yard' },
  },
  parseULPIN(str): { valid: bool, segments: string[] },
  convertArea(valueSqM, toUnit): { value: number, label: string },
  formatArea(sqm, decimals=2): string,
};
```

### seed-data.js → `BhuSetu.SeedData`
```js
// Each parcel object:
{
  id: 'parcel-1',
  ulpin: '14-1029-4401-2026' | null,
  surveyNumber: null | 'DL-MCD-SUR-108/4',
  displayId: string,  // ulpin or surveyNumber
  status: 'CLEAN' | 'WARNING' | 'CRITICAL',
  trustGrade: 'A'..'F',
  trustScore: 0..100,
  classification: string,
  location: { village: string, district: string, state: string, description: string },
  owner: { maskedName: string, type: string },
  area: { ror: number/*m²*/, gis: number/*m²*/, regionalUnit: string/*key into Config.UNITS*/ },
  zoning: string,
  encumbrances: [{ date: string, type: string, details: string, status: 'Active'|'Cleared' }],
  tax: { status: 'Clear'|'Pending'|'Overdue', lastPaid: string, amount: string },
  building: {
    sanctioned: { type: string, height: number, floors: string, far: number } | null,
    detected:   { type: string, height: number, floors: string, far: number } | null
  },
  violations: [{ id: string, type: string, severity: 'CRITICAL'|'WARNING'|'INFO',
                  description: string, encroachmentArea: number|null, details: string }],
  isolationScore: number | null,
  geometry: GeoJSON.Feature<Polygon>,        // Parcel boundary
  buildingFootprint: GeoJSON.Feature<Polygon> | null,  // Detected building
  sanctionedFootprint: GeoJSON.Feature<Polygon> | null, // Approved footprint
  bufferZones: [GeoJSON.Feature<Polygon>],   // FTL, floodplain, forest, gauchar
}

BhuSetu.SeedData = {
  parcels: [...],  // Array of 6 parcels
  getAllParcels(): array,
  getParcelById(id): parcel|null,
  getParcelByULPIN(ulpin): parcel|null,
  getParcelBySurvey(surveyNo): parcel|null,
  searchParcels(query): parcel[],  // Fuzzy match on ULPIN, survey, owner, location
};
```

### map-engine.js → `BhuSetu.MapEngine`
```js
BhuSetu.MapEngine = {
  init(containerId): void,            // Init MapLibre in container
  getMap(): maplibregl.Map,
  loadAllParcels(parcels): void,      // Add all seed parcels as layers
  flyToParcel(parcel): void,          // Animate to parcel bbox
  highlightParcel(parcelId): void,    // Highlight selected
  clearHighlight(): void,
  toggleLayer(layerKey, visible): void,  // layerKey = 'cadastral'|'drone'|'footprint'|'violations'|'buffers'
  setLayerOpacity(value0to1): void,
  enableSplitView(): void,
  disableSplitView(): void,
  onParcelClick(callback): void,      // callback(parcelId)
  addCustomGeoJSON(geojson, name): void,  // For user-uploaded data
  addRasterTiles(url): void,          // For WMS/XYZ
  initSecondaryMap(containerId): void, // For officer/admin views
};
```

### spatial-analysis.js → `BhuSetu.SpatialAnalysis`
```js
BhuSetu.SpatialAnalysis = {
  computeArea(geojsonFeature): number,  // Returns m²
  computeIntersection(featureA, featureB): GeoJSON.Feature|null,
  computeEncroachmentMetrics(building, buffer): { area: number, depthM: number },
  runFullComplianceCheck(parcel): { violations: [], riskScore: number },
  compareHeightCompliance(sanctioned, detected): { exceeded: bool, delta: number },
  compareFARCompliance(sanctioned, detected): { exceeded: bool, ratio: number },
  generateViolationGeoJSON(parcel): GeoJSON.FeatureCollection,  // Cross-hatch overlay
};
```

### ui-controller.js → `BhuSetu.UI`
```js
BhuSetu.UI = {
  init(): void,
  switchRole(role): void,  // 'citizen'|'officer'|'admin'
  getCurrentRole(): string,
  selectParcel(parcelId): void,  // Master handler: updates all panels
  getSelectedParcel(): parcel|null,
  showNotification(message, type): void,  // type='success'|'warning'|'error'|'info'
};
```

### citizen-portal.js → `BhuSetu.CitizenPortal`
```js
BhuSetu.CitizenPortal = {
  init(): void,
  displayParcel(parcel): void,    // Populates left + right panels
  clearDisplay(): void,
  renderTrustGauge(grade, score): void,
  generatePropertyCardPDF(parcel): void,  // jsPDF
};
```

### officer-console.js → `BhuSetu.OfficerConsole`
```js
BhuSetu.OfficerConsole = {
  init(): void,
  loadTriageQueue(parcels): void,
  selectTriageItem(parcelId): void,   // Shows corroboration + resolution
  showCorroboration(parcel): void,
  logAuditAction(action, parcelId): void,  // Appends to audit log with SHA-256 hash
  getAuditEntries(): array,
};
```

### admin-dashboard.js → `BhuSetu.AdminDashboard`
```js
BhuSetu.AdminDashboard = {
  init(): void,
  updateMetrics(parcels): void,
  renderAnomalyChart(parcels): void,
  renderPipelineActivity(): void,
  initHeatmap(): void,
};
```

### schema-adapter.js → `BhuSetu.SchemaAdapter`
```js
BhuSetu.SchemaAdapter = {
  init(): void,
  openModal(): void,
  closeModal(): void,
  loadSourceSchema(type): void,  // Populates source fields
  generatePreview(): void,       // Shows mapped data in preview table
  applyMapping(): object,        // Returns canonical record
};
```

### data-ingestion.js → `BhuSetu.DataIngestion`
```js
BhuSetu.DataIngestion = {
  init(): void,                    // Sets up drag-drop, button handlers
  handleGeoJSONFile(file): void,   // Parse + add to map
  loadWMSTiles(url): void,         // Add raster to map
  openOCRModal(): void,
  simulateOCR(file): object,      // Returns mock extracted JSON
};
```

### ai-copilot.js → `BhuSetu.AICopilot`
```js
BhuSetu.AICopilot = {
  init(): void,
  toggle(): void,
  open(): void,
  close(): void,
  handleUserMessage(text): void,
  addBotMessage(text): void,
  addUserMessage(text): void,
};
```

### app.js → `BhuSetu.App`
```js
BhuSetu.App = {
  init(): void,  // Called on DOMContentLoaded. Initializes all modules in order:
  // 1. Config (already loaded)
  // 2. SeedData (already loaded)
  // 3. UI.init()
  // 4. MapEngine.init('map-canvas')
  // 5. MapEngine.loadAllParcels(SeedData.getAllParcels())
  // 6. SpatialAnalysis (stateless, no init needed)
  // 7. CitizenPortal.init()
  // 8. OfficerConsole.init()
  // 9. AdminDashboard.init()
  // 10. SchemaAdapter.init()
  // 11. DataIngestion.init()
  // 12. AICopilot.init()
  // 13. Select first parcel by default
};
```

---

## PARCEL COORDINATES (approximate centers for map positioning)

| Parcel | Center Lat | Center Lng | Zoom |
|--------|-----------|-----------|------|
| 1 - Gachibowli, Hyderabad | 17.4400 | 78.3489 | 17 |
| 2 - Durgam Cheruvu, Hyderabad | 17.4340 | 78.3780 | 16 |
| 3 - Lajpat Nagar, Delhi | 28.5700 | 77.2400 | 17 |
| 4 - Village Baori, Ajmer | 26.4500 | 74.6500 | 17 |
| 5 - Village Wadgaon, Nashik | 19.9800 | 73.7800 | 16 |
| 6 - Village Hesatu, Ranchi | 23.3500 | 85.3300 | 15 |

Initial map view: Center on India (20.5937, 78.9629), Zoom 5.

## SCRIPT LOADING ORDER in index.html
```html
<!-- CSS -->
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/map.css">
<link rel="stylesheet" href="css/panels.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/dashboard.css">

<!-- JS (defer, in order) -->
<script src="js/config.js" defer></script>
<script src="js/seed-data.js" defer></script>
<script src="js/map-engine.js" defer></script>
<script src="js/spatial-analysis.js" defer></script>
<script src="js/ui-controller.js" defer></script>
<script src="js/citizen-portal.js" defer></script>
<script src="js/officer-console.js" defer></script>
<script src="js/admin-dashboard.js" defer></script>
<script src="js/schema-adapter.js" defer></script>
<script src="js/data-ingestion.js" defer></script>
<script src="js/ai-copilot.js" defer></script>
<script src="js/app.js" defer></script>
```
