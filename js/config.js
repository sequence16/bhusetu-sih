window.BhuSetu = window.BhuSetu || {};

BhuSetu.Config = {
  PALETTE: {
    terraPrimary: '#C85A32',
    terraDeep: '#A94424',
    terraLight: '#D4845C',
    terraPale: '#F0C4A8',
    bone: '#F9F6F0',
    parchment: '#F5F0E8',
    white: '#FFFFFF',
    charcoal: '#262322',
    charcoalSoft: '#333130',
    taupe: '#E6DFD5',
    taupeDark: '#C4BAB0',
    claySlate: '#4A4441',
    clayMid: '#6B6360',
    clayLight: '#8A8280',
    safeGreen: '#2D5A27',
    safeGreenBg: '#E8F5E6',
    warningAmber: '#D97706',
    warningAmberBg: '#FEF3C7',
    criticalRed: '#B91C1C',
    criticalRedBg: '#FEE2E2',
  },
  
  STATUS: {
    CLEAN: 'CLEAN',
    WARNING: 'WARNING',
    CRITICAL: 'CRITICAL'
  },
  
  TRUST_GRADES: {
    A: { min: 90, color: '#2D5A27' },
    B: { min: 75, color: '#6B6360' },
    C: { min: 55, color: '#D97706' },
    D: { min: 35, color: '#D97706' },
    E: { min: 15, color: '#B91C1C' },
    F: { min: 0, color: '#B91C1C' }
  },
  
  UNITS: {
    BIGHA_RAJ: { factor: 809.4, label: 'Bigha (Rajasthan)' },
    BIGHA_JH:  { factor: 2480, label: 'Bigha (Jharkhand)' },
    GUNTHA:    { factor: 101.17, label: 'Guntha' },
    ACRE:      { factor: 4046.86, label: 'Acre' },
    HECTARE:   { factor: 10000, label: 'Hectare' },
    CENT:      { factor: 40.47, label: 'Cent' },
    BISWA:     { factor: 125.42, label: 'Biswa' },
    SQ_YARD:   { factor: 0.8361, label: 'Sq. Yard' },
  },
  
  parseULPIN(str) {
    if (!str) return { valid: false, segments: [] };
    const regex = /^\d{2}-\d{4}-\d{4}-\d{4}$/;
    return {
      valid: regex.test(str),
      segments: str.split('-')
    };
  },
  
  convertArea(valueSqM, toUnitKey) {
    const unit = this.UNITS[toUnitKey];
    if (!unit || !valueSqM) return { value: 0, label: '' };
    return {
      value: valueSqM / unit.factor,
      label: unit.label
    };
  },
  
  formatArea(sqm, decimals = 2) {
    if (sqm == null) return '';
    return `${sqm.toFixed(decimals)} sq.m`;
  }
};
