window.BhuSetu = window.BhuSetu || {};
BhuSetu.SchemaAdapter = {
  sourceSchemas: {
    'ror': ['khasra_no', 'khata_no', 'owner_name', 'father_name', 'total_area_bigha', 'land_type', 'irrigation', 'encumbrance'],
    'pahani': ['patta_no', 'survey_no', 'ryot_name', 'extent_acres', 'classification', 'soil_type', 'source_irrigation', 'crop_details'],
    'satbara': ['gat_no', 'survey_no', 'owner_name', 'total_area_hectare', 'cultivation_type', 'water_source', 'loan_details', 'mutation_entries'],
    'jamabandi': ['khewat_no', 'khatoni_no', 'owner_name', 'total_area_kanal', 'land_type', 'revenue_amount'],
    'mcd-approval': ['file_no', 'plot_no', 'applicant', 'sanctioned_area_sqm', 'floors_sanctioned', 'height_limit', 'far_allowed', 'approval_date'],
    'deed': ['deed_no', 'sro_office', 'seller_name', 'buyer_name', 'property_desc', 'sale_consideration', 'stamp_duty', 'registration_date']
  },
  targetFields: ['ulpin', 'survey_no', 'owner_name', 'area_sqm', 'land_classification', 'zoning', 'encumbrance', 'building_sanction', 'geo_coordinates'],
  
  selectedSource: null,

  init() {
    const btn = document.getElementById('schema-adapter-btn');
    if (btn) btn.addEventListener('click', () => this.openModal());

    const closeBtn = document.getElementById('schema-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', () => this.closeModal());

    const select = document.getElementById('schema-source-select');
    if (select) {
      select.addEventListener('change', (e) => {
        this.loadSourceSchema(e.target.value);
      });
    }

    const applyBtn = document.getElementById('schema-apply-btn');
    if (applyBtn) {
      applyBtn.addEventListener('click', () => this.applyMapping());
    }
  },

  openModal() {
    const m = document.getElementById('schema-modal-overlay');
    if (m) m.classList.remove('hidden');
    const select = document.getElementById('schema-source-select');
    this.loadSourceSchema(select ? select.value : 'ror');
  },

  closeModal() {
    const m = document.getElementById('schema-modal-overlay');
    if (m) m.classList.add('hidden');
  },

  loadSourceSchema(type) {
    const sFields = this.sourceSchemas[type] || [];
    
    const sPanel = document.getElementById('schema-source-fields');
    if (!sPanel) return;
    sPanel.innerHTML = '';
    sFields.forEach(f => {
      const div = document.createElement('div');
      div.className = 'schema-field';
      div.textContent = f;
      div.style.padding = '4px';
      div.style.border = '1px solid #ccc';
      div.style.marginBottom = '4px';
      div.style.cursor = 'pointer';
      div.addEventListener('click', () => {
        this.selectedSource = f;
        Array.from(sPanel.children).forEach(c => c.style.backgroundColor = '');
        div.style.backgroundColor = '#e0f7fa';
      });
      sPanel.appendChild(div);
    });

    const tPanel = document.getElementById('schema-target-fields');
    if (!tPanel) return;
    tPanel.innerHTML = '';
    this.targetFields.forEach(f => {
      const div = document.createElement('div');
      div.className = 'schema-field';
      div.textContent = f;
      div.style.padding = '4px';
      div.style.border = '1px solid #ccc';
      div.style.marginBottom = '4px';
      div.style.cursor = 'pointer';
      div.addEventListener('click', () => {
        if (this.selectedSource) {
          const lines = document.getElementById('schema-mapping-lines');
          if (lines) {
              const line = document.createElement('div');
              line.textContent = `${this.selectedSource} → ${f}`;
              line.style.fontSize = '12px';
              line.style.color = 'blue';
              lines.appendChild(line);
          }
          this.generatePreview();
        }
      });
      tPanel.appendChild(div);
    });
    
    const mLines = document.getElementById('schema-mapping-lines');
    if (mLines) mLines.innerHTML = '';
  },

  generatePreview() {
    const tbody = document.getElementById('schema-preview-table-body');
    if (!tbody) return;
    tbody.innerHTML = `
      <tr><td>survey_no</td><td>123/4</td><td>-</td></tr>
      <tr><td>owner_name</td><td>Ramesh Kumar</td><td>-</td></tr>
      <tr><td>area_sqm</td><td>2048.5</td><td>sqm</td></tr>
    `;
  },

  applyMapping() {
    if (BhuSetu.UI) BhuSetu.UI.showNotification('Mapping applied successfully', 'success');
    this.closeModal();
    return {};
  }
};
