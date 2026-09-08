window.BhuSetu = window.BhuSetu || {};
BhuSetu.AICopilot = {
  init() {
    const toggleBtn = document.getElementById('ai-toggle-btn');
    if (toggleBtn) toggleBtn.addEventListener('click', () => this.toggle());

    const closeBtn = document.getElementById('ai-drawer-close');
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());

    const sendBtn = document.getElementById('ai-send-btn');
    const inputField = document.getElementById('ai-input-field');
    
    if (sendBtn && inputField) {
      sendBtn.addEventListener('click', () => {
        if (inputField.value.trim()) this.handleUserMessage(inputField.value);
      });
      inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && inputField.value.trim()) {
           this.handleUserMessage(inputField.value);
        }
      });
    }

    this.addBotMessage("Namaste! I'm Bhu-Sahayak, your AI assistant for land records. Ask me about any property, dispute status, or regulatory compliance.");
  },

  toggle() {
    const drawer = document.getElementById('ai-drawer');
    if (drawer) drawer.classList.toggle('closed');
  },
  open() {
    const drawer = document.getElementById('ai-drawer');
    if (drawer) drawer.classList.remove('closed');
  },
  close() {
    const drawer = document.getElementById('ai-drawer');
    if (drawer) drawer.classList.add('closed');
  },

  handleUserMessage(text) {
    this.addUserMessage(text);
    const inputField = document.getElementById('ai-input-field');
    if (inputField) inputField.value = '';

    setTimeout(() => {
      const lower = text.toLowerCase();
      let response = 'I can help you understand land records, check dispute status, verify compliance, and explain regulatory frameworks. Try asking about a specific parcel or regulation.';
      
      const currentParcel = BhuSetu.UI ? BhuSetu.UI.getSelectedParcel() : null;
      const isAboutProblem = lower.includes('problem') || lower.includes('issue') || lower.includes('dispute') || lower.includes('violation');
      const isAboutSafety = lower.includes('safe') || lower.includes('purchase') || lower.includes('buy');
      
      // Match ULPIN (14-digit)
      const ulpinMatch = lower.match(/\b\d{2}-\d{4}-\d{4}-\d{4}\b/);
      let targetParcel = currentParcel;
      
      if (ulpinMatch && BhuSetu.SeedData) {
        const found = BhuSetu.SeedData.getAllParcels().find(p => p.ulpin === ulpinMatch[0]);
        if (found) targetParcel = found;
      }
      
      if (targetParcel) {
          if (isAboutProblem || ulpinMatch) {
              if (targetParcel.status === 'CLEAN') {
                  response = `Parcel ${targetParcel.ulpin} (${targetParcel.location.village}) is marked CLEAN. There are no active disputes or critical violations.`;
              } else {
                  let violations = targetParcel.violations || [];
                  let text = `Parcel ${targetParcel.ulpin} has a status of ${targetParcel.status}. `;
                  if (violations.length > 0) {
                      text += `I found ${violations.length} issue(s): ` + violations.map(v => v.description).join(', ') + '.';
                  }
                  response = text;
              }
          } else if (isAboutSafety) {
              if (targetParcel.status === 'CLEAN') response = 'Based on the current data, this property is CLEAN and appears safe for transaction.';
              else response = `This property has a status of ${targetParcel.status}. I would advise extreme caution and legal review before proceeding.`;
          } else if (lower.includes('owner') || lower.includes('who')) {
              response = `The registered owner for ${targetParcel.ulpin} is ${targetParcel.owner.maskedName} (${targetParcel.owner.type}).`;
          } else {
             response = `You're currently viewing parcel ${targetParcel.ulpin} in ${targetParcel.location.village}. It has a status of ${targetParcel.status} and a trust score of ${targetParcel.trustScore}. Ask me about its safety or violations!`;
          }
      } else {
          // General queries
          if (lower.includes('ulpin') || lower.includes('search')) {
            response = 'You can search for a property using its 14-digit ULPIN or survey number in the top right search bar.';
          } else if (isAboutProblem) {
            response = 'Please select a specific parcel on the map or type its ULPIN first, so I can check it for problems.';
          }
      }

      this.addBotMessage(response, true);
    }, 500);
  },

  addUserMessage(text) {
    const container = document.getElementById('ai-chat-messages');
    if (!container) return;
    const msg = document.createElement('div');
    msg.style.textAlign = 'right';
    msg.style.margin = '8px';
    msg.style.padding = '8px';
    msg.style.backgroundColor = '#e3f2fd';
    msg.style.color = '#262322';
    msg.style.borderRadius = '8px';
    msg.textContent = text;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
  },

  addBotMessage(text, animate = false) {
    const container = document.getElementById('ai-chat-messages');
    if (!container) return;
    
    const msg = document.createElement('div');
    msg.style.textAlign = 'left';
    msg.style.margin = '8px';
    msg.style.padding = '8px';
    msg.style.backgroundColor = '#f5f5f5';
    msg.style.color = '#262322';
    msg.style.borderRadius = '8px';
    msg.innerHTML = '🤖 <span class="text-content"></span>';
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;

    const span = msg.querySelector('.text-content');

    if (animate) {
      span.textContent = '...';
      let i = 0;
      setTimeout(() => {
        span.textContent = '';
        const interval = setInterval(() => {
          if (i < text.length) {
            span.textContent += text.charAt(i);
            i++;
            container.scrollTop = container.scrollHeight;
          } else {
            clearInterval(interval);
          }
        }, 15);
      }, 500);
    } else {
      span.textContent = text;
    }
  }
};
