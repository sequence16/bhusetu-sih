window.BhuSetu = window.BhuSetu || {};
BhuSetu.DataIngestion = {
  init() {
    // GeoJSON Drop
    const mapCanvas = document.getElementById('map-canvas');
    const overlay = document.getElementById('geojson-drop-overlay');
    if (mapCanvas && overlay) {
      mapCanvas.addEventListener('dragenter', (e) => { 
        e.preventDefault(); 
        overlay.classList.add('active'); 
        overlay.style.display = 'flex'; 
      });
      mapCanvas.addEventListener('dragover', (e) => e.preventDefault());
      mapCanvas.addEventListener('dragleave', (e) => {
        if (e.relatedTarget === overlay || !overlay.contains(e.relatedTarget)) {
           overlay.classList.remove('active');
           overlay.style.display = '';
        }
      });
      mapCanvas.addEventListener('drop', (e) => {
        e.preventDefault();
        overlay.classList.remove('active');
        overlay.style.display = '';
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          this.handleGeoJSONFile(e.dataTransfer.files[0]);
        }
      });
    }

    // Upload Btn
    const uploadBtn = document.getElementById('geojson-upload-btn');
    if (uploadBtn) {
      uploadBtn.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.geojson,.json';
        input.onchange = (e) => {
          if (e.target.files.length > 0) this.handleGeoJSONFile(e.target.files[0]);
        };
        input.click();
      });
    }

    // WMS
    const wmsBtn = document.getElementById('wms-load-btn');
    const wmsInput = document.getElementById('wms-url-input');
    if (wmsBtn && wmsInput) {
      wmsBtn.addEventListener('click', () => {
        if (wmsInput.value) this.loadWMSTiles(wmsInput.value);
      });
    }

    // OCR
    const ocrBtn = document.getElementById('ocr-upload-btn');
    if (ocrBtn) ocrBtn.addEventListener('click', () => this.openOCRModal());
    
    const ocrClose = document.getElementById('ocr-close-btn');
    if (ocrClose) ocrClose.addEventListener('click', () => {
        const modal = document.getElementById('ocr-modal-overlay');
        if (modal) modal.classList.add('hidden');
    });

    const ocrDrop = document.getElementById('ocr-dropzone');
    if (ocrDrop) {
      ocrDrop.addEventListener('dragover', e => e.preventDefault());
      ocrDrop.addEventListener('drop', e => {
        e.preventDefault();
        if (e.dataTransfer.files.length > 0) {
           this.simulateOCR(e.dataTransfer.files[0]);
        }
      });
    }
  },

  handleGeoJSONFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target.result);
        if (json.type) {
           if (BhuSetu.MapEngine && BhuSetu.MapEngine.addCustomGeoJSON) BhuSetu.MapEngine.addCustomGeoJSON(json, file.name);
           if (BhuSetu.UI) BhuSetu.UI.showNotification(`Loaded ${file.name}`, 'success');
        } else {
           throw new Error("Invalid GeoJSON");
        }
      } catch (err) {
        if (BhuSetu.UI) BhuSetu.UI.showNotification('Failed to parse GeoJSON', 'error');
      }
    };
    reader.readAsText(file);
  },

  loadWMSTiles(url) {
    if (url.startsWith('http')) {
      if (BhuSetu.MapEngine && BhuSetu.MapEngine.addRasterTiles) BhuSetu.MapEngine.addRasterTiles(url);
      if (BhuSetu.UI) BhuSetu.UI.showNotification('WMS tiles added', 'success');
    } else {
      if (BhuSetu.UI) BhuSetu.UI.showNotification('Invalid URL', 'error');
    }
  },

  openOCRModal() {
    const overlay = document.getElementById('ocr-modal-overlay');
    if (overlay) overlay.classList.remove('hidden');
    const panel = document.getElementById('ocr-results-panel');
    if (panel) panel.classList.add('hidden');
    const fname = document.getElementById('ocr-file-name');
    if (fname) fname.textContent = '';
  },

  simulateOCR(file) {
    const fname = document.getElementById('ocr-file-name');
    if (fname) fname.textContent = file.name;
    const output = document.getElementById('ocr-json-output');
    if (output) output.textContent = 'Processing...';
    const panel = document.getElementById('ocr-results-panel');
    if (panel) panel.classList.remove('hidden');

    setTimeout(() => {
      const mockResult = {
        "document_type": "Registered Sale Deed",
        "extracted_fields": {
          "deed_number": "SRO-III/2019/4782",
          "registration_date": "2019-08-14",
          "seller": "Ramesh Kumar Singh",
          "buyer": "Vikram Patel",
          "property_description": "Plot No. 47, Khasra 122/3, Village Wadgaon",
          "boundaries": {
            "north": "Nalla (seasonal stream)",
            "south": "Municipal Road 40ft",
            "east": "Plot No. 48, Survey 122/4",
            "west": "Government Gauchar Land"
          },
          "area": "8,200 sq.m (2.03 Acres)",
          "sale_consideration": "₹32,50,000",
          "stamp_duty_paid": "₹2,27,500",
          "survey_number": "122/3",
          "state_survey_id": "MH-NSK-WDG-122/3"
        },
        "confidence": 0.87,
        "warnings": ["Boundary description 'Nalla' may indicate flood zone proximity"]
      };
      if (output) output.textContent = JSON.stringify(mockResult, null, 2);
    }, 2000);
    return {};
  }
};
