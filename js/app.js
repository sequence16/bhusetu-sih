window.BhuSetu = window.BhuSetu || {};
BhuSetu.App = {
  init() {
    if (BhuSetu.UI) BhuSetu.UI.init();
    
    if (BhuSetu.MapEngine && BhuSetu.MapEngine.init) {
      BhuSetu.MapEngine.init('map-canvas');
      const map = BhuSetu.MapEngine.getMap ? BhuSetu.MapEngine.getMap() : null;
      
      const onMapLoad = () => {
        if (BhuSetu.MapEngine.loadAllParcels && BhuSetu.SeedData) {
          BhuSetu.MapEngine.loadAllParcels(BhuSetu.SeedData.getAllParcels());
        }
        if (BhuSetu.CitizenPortal) BhuSetu.CitizenPortal.init();
        if (BhuSetu.OfficerConsole) BhuSetu.OfficerConsole.init();
        if (BhuSetu.AdminDashboard) BhuSetu.AdminDashboard.init();
        if (BhuSetu.SchemaAdapter) BhuSetu.SchemaAdapter.init();
        if (BhuSetu.DataIngestion) BhuSetu.DataIngestion.init();
        if (BhuSetu.AICopilot) BhuSetu.AICopilot.init();
        
        if (BhuSetu.UI) {
            BhuSetu.UI.selectParcel('parcel-1');
        }
        if (BhuSetu.MapEngine.onParcelClick && BhuSetu.UI) {
          BhuSetu.MapEngine.onParcelClick((id) => BhuSetu.UI.selectParcel(id));
        }

        // Layer toggles
        ['cadastral', 'drone', 'footprint', 'violations', 'buffers'].forEach(layer => {
          const chk = document.getElementById(`layer-toggle-${layer}`);
          if (chk) {
            chk.addEventListener('change', (e) => {
              if (BhuSetu.MapEngine.toggleLayer) BhuSetu.MapEngine.toggleLayer(layer, e.target.checked);
            });
          }
        });

        // Opacity
        const slider = document.getElementById('opacity-slider');
        if (slider) {
          slider.addEventListener('input', (e) => {
            if (BhuSetu.MapEngine.setLayerOpacity) BhuSetu.MapEngine.setLayerOpacity(e.target.value / 100);
          });
        }

        // Split view
        const splitBtn = document.getElementById('split-view-btn');
        if (splitBtn) {
          splitBtn.addEventListener('click', () => {
             const active = splitBtn.classList.toggle('active');
             if (active && BhuSetu.MapEngine.enableSplitView) {
               BhuSetu.MapEngine.enableSplitView();
             } else if (!active && BhuSetu.MapEngine.disableSplitView) {
               BhuSetu.MapEngine.disableSplitView();
             }
          });
        }
        
        console.log('BhuSetu: Bharat Unified Land Stack — Initialized');
      };

      if (map) {
         if (map.loaded()) {
            onMapLoad();
         } else {
            map.on('load', onMapLoad);
         }
      } else {
         // Fallback if map object is missing or mocked
         setTimeout(onMapLoad, 500);
      }
    } else {
        // Mock init if map engine isn't ready
        setTimeout(() => {
            if (BhuSetu.CitizenPortal) BhuSetu.CitizenPortal.init();
            if (BhuSetu.OfficerConsole) BhuSetu.OfficerConsole.init();
            if (BhuSetu.AdminDashboard) BhuSetu.AdminDashboard.init();
            if (BhuSetu.SchemaAdapter) BhuSetu.SchemaAdapter.init();
            if (BhuSetu.DataIngestion) BhuSetu.DataIngestion.init();
            if (BhuSetu.AICopilot) BhuSetu.AICopilot.init();
            if (BhuSetu.UI) BhuSetu.UI.selectParcel('parcel-1');
            console.log('BhuSetu: Bharat Unified Land Stack — Initialized');
        }, 500);
    }
  }
};

document.addEventListener('DOMContentLoaded', () => BhuSetu.App.init());
