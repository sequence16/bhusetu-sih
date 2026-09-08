window.BhuSetu = window.BhuSetu || {};

window.BhuSetu.SeedData = (function() {
  function makePolygon(coords) {
    return {
      type: 'Polygon',
      coordinates: [coords]
    };
  }

  function makeBox(lon, lat, size) {
    return makePolygon([
      [lon - size, lat - size],
      [lon + size, lat - size],
      [lon + size, lat + size],
      [lon - size, lat + size],
      [lon - size, lat - size]
    ]);
  }

  const parcels = [
    {
      id: 'parcel-1',
      ulpin: '14-3261-5499-2024',
      surveyNumber: 'TS-SNG-AMP-433',
      displayId: '14-3261-5499-2024',
      status: 'CLEAN',
      trustScore: 95,
      location: {
        state: 'Telangana',
        district: 'Sangareddy',
        mandal: 'Ameenpur',
        village: 'Sultanpur',
        dmvCode: '1737006'
      },
      owner: {
        name: 'Ramesh Reddy',
        maskedName: 'R***y',
        type: 'Individual'
      },
      area: {
        ror: 36938,
        gis: 36950,
        unit: 'sqm'
      },
      zoning: 'Residential',
      tax: {
        status: 'Paid',
        lastPaid: '2024-01-15',
        annualAmount: 12500
      },
      encumbrances: [],
      building: {
        sanctioned: { type: 'Residential', height: 12, floors: 3, far: 1.5 },
        detected: { type: 'Residential', height: 12, floors: 3, far: 1.5 }
      },
      violations: [],
      isolationScore: 0.1,
      geometry: makePolygon([
        [78.3268252, 17.5507838], [78.3267109, 17.5498922], [78.3266829, 17.5497267],
        [78.3267256, 17.5496279], [78.3269224, 17.5493723], [78.3270519, 17.5492464],
        [78.3269223, 17.5491162], [78.3267705, 17.5489262], [78.3265756, 17.548764],
        [78.3264361, 17.5486605], [78.3263017, 17.548731], [78.3253291, 17.5493798],
        [78.3251879, 17.549468], [78.3251876, 17.5496517], [78.3251673, 17.5503715],
        [78.3251601, 17.5506272], [78.3251545, 17.5507833], [78.325301, 17.5508061],
        [78.3254571, 17.5508232], [78.3257798, 17.5508578], [78.3259246, 17.5508743],
        [78.3261047, 17.5508567], [78.3266608, 17.5508043], [78.3268252, 17.5507838]
      ]),
      buildingFootprint: null,
      sanctionedFootprint: null,
      bufferZones: []
    },
    {
      id: 'parcel-2',
      ulpin: '14-3253-5484-2024',
      surveyNumber: 'TS-SNG-AMP-453',
      displayId: 'TS-SNG-AMP-453',
      status: 'WARNING',
      trustScore: 65,
      location: {
        state: 'Telangana',
        district: 'Sangareddy',
        mandal: 'Ameenpur',
        village: 'Sultanpur',
        dmvCode: '1737006'
      },
      owner: {
        name: 'Suresh Kumar',
        maskedName: 'S***r',
        type: 'Individual'
      },
      area: {
        ror: 20787,
        gis: 21500,
        unit: 'sqm'
      },
      zoning: 'Residential',
      tax: {
        status: 'Paid',
        lastPaid: '2023-11-20',
        annualAmount: 8400
      },
      encumbrances: ['Bank Loan Pending'],
      building: {
        sanctioned: { type: 'Residential', height: 9, floors: 2, far: 1.2 },
        detected: { type: 'Residential', height: 9, floors: 2, far: 1.2 }
      },
      violations: [{ severity: 'WARNING', description: 'Boundary overlap dispute with parcel 433', details: 'System flagged: Boundary overlap dispute with parcel 433' }],
      isolationScore: 0.3,
      geometry: makePolygon([
        [78.3264361, 17.5486605], [78.3263458, 17.5485393], [78.3262224, 17.5484006],
        [78.3260757, 17.5482836], [78.3259027, 17.5482551], [78.3256621, 17.5482185],
        [78.3254785, 17.5481884], [78.3252891, 17.5481159], [78.3250726, 17.5480006],
        [78.324486, 17.5479841], [78.3240435, 17.5479747], [78.3239063, 17.5479559],
        [78.3240458, 17.548062], [78.3244264, 17.5483414], [78.3246997, 17.5486207],
        [78.3249701, 17.5489624], [78.3251412, 17.5493092], [78.3251879, 17.549468],
        [78.3253291, 17.5493798], [78.3263017, 17.548731], [78.3264361, 17.5486605]
      ]),
      buildingFootprint: null,
      sanctionedFootprint: null,
      bufferZones: []
    },
    {
      id: 'parcel-3',
      ulpin: '14-3241-5488-2024',
      surveyNumber: 'TS-SNG-AMP-454',
      displayId: '14-3241-5488-2024',
      status: 'CLEAN',
      trustScore: 92,
      location: {
        state: 'Telangana',
        district: 'Sangareddy',
        mandal: 'Ameenpur',
        village: 'Sultanpur',
        dmvCode: '1737006'
      },
      owner: {
        name: 'Venkatesh Rao',
        maskedName: 'V***o',
        type: 'Individual'
      },
      area: {
        ror: 22025,
        gis: 21980,
        unit: 'sqm'
      },
      zoning: 'Residential',
      tax: {
        status: 'Paid',
        lastPaid: '2024-02-10',
        annualAmount: 9000
      },
      encumbrances: [],
      building: {
        sanctioned: { type: 'Residential', height: 10, floors: 3, far: 1.4 },
        detected: { type: 'Residential', height: 10, floors: 3, far: 1.4 }
      },
      violations: [],
      isolationScore: 0.05,
      geometry: makePolygon([
        [78.3239063, 17.5479559], [78.3235785, 17.5479245], [78.3235368, 17.5489554],
        [78.3233289, 17.5490957], [78.3232284, 17.54917], [78.3232938, 17.5493826],
        [78.3234425, 17.5493942], [78.3239444, 17.5494149], [78.3250398, 17.5494595],
        [78.3251879, 17.549468], [78.3251412, 17.5493092], [78.3249701, 17.5489624],
        [78.3246997, 17.5486207], [78.3244264, 17.5483414], [78.3240458, 17.548062],
        [78.3239063, 17.5479559]
      ]),
      buildingFootprint: null,
      sanctionedFootprint: null,
      bufferZones: []
    },
    {
      id: 'parcel-4',
      ulpin: '14-2117-1051-2024',
      surveyNumber: 'TS-RGD-FQN-33',
      displayId: 'TS-RGD-FQN-33',
      status: 'CLEAN',
      trustScore: 88,
      location: {
        state: 'Telangana',
        district: 'Rangareddy',
        mandal: 'Farooqnagar',
        village: 'Nagulapalle',
        dmvCode: '1412005'
      },
      owner: {
        name: 'Kavitha Devi',
        maskedName: 'K***i',
        type: 'Individual'
      },
      area: {
        ror: 34310,
        gis: 34305,
        unit: 'sqm'
      },
      zoning: 'Agricultural',
      tax: {
        status: 'Paid',
        lastPaid: '2023-10-05',
        annualAmount: 1500
      },
      encumbrances: [],
      building: {
        sanctioned: null,
        detected: null
      },
      violations: [],
      isolationScore: 0.8,
      geometry: makePolygon([
        [78.2120047, 17.1036067], [78.2119449, 17.1034851], [78.2114956, 17.1042482],
        [78.2113501, 17.1059758], [78.2112404, 17.1061303], [78.2112333, 17.1071158],
        [78.2124685, 17.1067785], [78.2120047, 17.1036067]
      ]),
      buildingFootprint: null,
      sanctionedFootprint: null,
      bufferZones: []
    },
    {
      id: 'parcel-5',
      ulpin: '14-2131-1041-2024',
      surveyNumber: 'TS-RGD-FQN-34',
      displayId: '14-2131-1041-2024',
      status: 'WARNING',
      trustScore: 60,
      location: {
        state: 'Telangana',
        district: 'Rangareddy',
        mandal: 'Farooqnagar',
        village: 'Nagulapalle',
        dmvCode: '1412005'
      },
      owner: {
        name: 'Murali Krishna',
        maskedName: 'M***a',
        type: 'Individual'
      },
      area: {
        ror: 74161,
        gis: 74500,
        unit: 'sqm'
      },
      zoning: 'Agricultural',
      tax: {
        status: 'Pending',
        lastPaid: '2022-05-12',
        annualAmount: 3200
      },
      encumbrances: ['Mutation Pending'],
      building: {
        sanctioned: null,
        detected: null
      },
      violations: [{ severity: 'WARNING', description: 'Mutation Process Incomplete', details: 'System flagged: Mutation Process Incomplete' }],
      isolationScore: 0.75,
      geometry: makePolygon([
        [78.2141376, 17.1046907], [78.2136124, 17.103907], [78.213496, 17.1034904],
        [78.2132109, 17.1020445], [78.2131281, 17.1018801], [78.212039, 17.1033349],
        [78.2119449, 17.1034851], [78.2120047, 17.1036067], [78.2124685, 17.1067785],
        [78.2133064, 17.1065123], [78.2140068, 17.1048343], [78.2141376, 17.1046907]
      ]),
      buildingFootprint: null,
      sanctionedFootprint: null,
      bufferZones: []
    },
    {
      id: 'parcel-6',
      ulpin: '14-4307-1090-2024',
      surveyNumber: 'TS-WRG-ELK-876',
      displayId: 'TS-WRG-ELK-876',
      status: 'CRITICAL',
      trustScore: 25,
      location: {
        state: 'Telangana',
        district: 'Warangal_Urban',
        mandal: 'Elkathurthi',
        village: 'Elkathurthi',
        dmvCode: '2051005'
      },
      owner: {
        name: 'Srinivas Goud',
        maskedName: 'S***d',
        type: 'Individual'
      },
      area: {
        ror: 69291,
        gis: 71000,
        unit: 'sqm'
      },
      zoning: 'Mixed',
      tax: {
        status: 'Overdue',
        lastPaid: '2020-03-10',
        annualAmount: 18000
      },
      encumbrances: ['Legal Dispute Active'],
      building: {
        sanctioned: { type: 'Commercial', height: 15, floors: 4, far: 2.0 },
        detected: { type: 'Commercial', height: 15, floors: 5, far: 2.5 }
      },
      violations: ['Encroachment on government land', 'Unauthorized additional floor'],
      isolationScore: 0.2,
      geometry: makePolygon([
        [79.4320794, 18.1100407], [79.4320843, 18.1098499], [79.4320774, 18.1082208],
        [79.4320756, 18.1080168], [79.4320627, 18.1080225], [79.4320057, 18.1080479],
        [79.4318686, 18.1081088], [79.4313244, 18.1084211], [79.4312945, 18.1084343],
        [79.4308, 18.1086524], [79.430415, 18.1088222], [79.4303613, 18.1088459],
        [79.4303529, 18.1087898], [79.4302892, 18.1083622], [79.4302718, 18.1082365],
        [79.4301011, 18.1082837], [79.4285277, 18.1088534], [79.428379, 18.1089022],
        [79.4284816, 18.1089974], [79.4295955, 18.1101529], [79.4297796, 18.1103437],
        [79.429868, 18.1104717], [79.4300876, 18.1104326], [79.4318882, 18.110081],
        [79.4320794, 18.1100407]
      ]),
      buildingFootprint: null,
      sanctionedFootprint: null,
      bufferZones: []
    },
    {
      id: 'parcel-7',
      ulpin: '14-3635-5962-2024',
      surveyNumber: 'TS-PDP-PDP-82',
      displayId: '14-3635-5962-2024',
      status: 'CLEAN',
      trustScore: 98,
      location: {
        state: 'Telangana',
        district: 'Peddapalli',
        mandal: 'Peddapalli',
        village: 'Peddakalvala',
        dmvCode: '2016015'
      },
      owner: {
        name: 'Laxmi Narayana',
        maskedName: 'L***a',
        type: 'Individual'
      },
      area: {
        ror: 41081,
        gis: 41075,
        unit: 'sqm'
      },
      zoning: 'Agricultural',
      tax: {
        status: 'Paid',
        lastPaid: '2024-03-01',
        annualAmount: 1200
      },
      encumbrances: [],
      building: {
        sanctioned: null,
        detected: null
      },
      violations: [],
      isolationScore: 0.9,
      geometry: makePolygon([
        [79.3634755, 18.5973899], [79.3641444, 18.597151], [79.36511, 18.5966913],
        [79.364262, 18.5953522], [79.3642071, 18.5952677], [79.3640271, 18.5953651],
        [79.3638466, 18.5954571], [79.3633963, 18.5956894], [79.3632901, 18.5957689],
        [79.363141, 18.5958456], [79.362752, 18.5961271], [79.3625193, 18.5961083],
        [79.3625951, 18.5963379], [79.3629836, 18.5975335], [79.3634755, 18.5973899]
      ]),
      buildingFootprint: null,
      sanctionedFootprint: null,
      bufferZones: []
    },
    {
      id: 'parcel-8',
      ulpin: '14-2082-0050-2024',
      surveyNumber: 'TS-NLG-KNL-107',
      displayId: 'TS-NLG-KNL-107',
      status: 'WARNING',
      trustScore: 70,
      location: {
        state: 'Telangana',
        district: 'Nalgonda',
        mandal: 'Kanagal',
        village: 'Parvathagiril',
        dmvCode: '2339010'
      },
      owner: {
        name: 'Government of Telangana',
        maskedName: 'G***a',
        type: 'Government'
      },
      area: {
        ror: 31953,
        gis: 31800,
        unit: 'sqm'
      },
      zoning: 'Agricultural',
      tax: {
        status: 'Overdue',
        lastPaid: '2021-08-11',
        annualAmount: 1100
      },
      encumbrances: [],
      building: {
        sanctioned: null,
        detected: null
      },
      violations: [{ severity: 'WARNING', description: 'Tax Overdue > 2 years', details: 'System flagged: Tax Overdue > 2 years' }],
      isolationScore: 0.6,
      geometry: makePolygon([
        [79.2090745, 17.0055173], [79.2085873, 17.0038591], [79.2071669, 17.0039407],
        [79.2073921, 17.0044959], [79.2080505, 17.0061188], [79.2084717, 17.0058714],
        [79.2090745, 17.0055173]
      ]),
      buildingFootprint: null,
      sanctionedFootprint: null,
      bufferZones: []
    },
    {
      id: 'parcel-9',
      ulpin: '14-5657-6995-2024',
      surveyNumber: 'TS-SDP-MLG-210',
      displayId: '14-5657-6995-2024',
      status: 'CRITICAL',
      trustScore: 40,
      location: {
        state: 'Telangana',
        district: 'Siddipet',
        mandal: 'Mulug',
        village: 'Achaipally',
        dmvCode: '1745023'
      },
      owner: {
        name: 'Pratap Singh',
        maskedName: 'P***h',
        type: 'Individual'
      },
      area: {
        ror: 97106,
        gis: 100500,
        unit: 'sqm'
      },
      zoning: 'Agricultural',
      tax: {
        status: 'Paid',
        lastPaid: '2024-01-05',
        annualAmount: 4500
      },
      encumbrances: ['Forest Dept Notice'],
      building: {
        sanctioned: null,
        detected: null
      },
      violations: [{ severity: 'WARNING', description: 'Forest boundary violation detected', details: 'System flagged: Forest boundary violation detected' }],
      isolationScore: 0.85,
      geometry: makePolygon([
        [78.5658372, 17.700329], [78.5673283, 17.700093], [78.5683436, 17.7006818],
        [78.5675488, 17.6983421], [78.5661605, 17.6980903], [78.5660082, 17.6981999],
        [78.5656047, 17.6984904], [78.5637658, 17.6996031], [78.5629881, 17.7000665],
        [78.5639235, 17.7007625], [78.5658372, 17.700329]
      ]),
      buildingFootprint: null,
      sanctionedFootprint: null,
      bufferZones: []
    }
  ];

  return {
    getAllParcels: function() {
      return parcels;
    },
    getParcelById: function(id) {
      return parcels.find(p => p.id === id) || null;
    },
    searchParcels: function(query) {
      const q = query.toLowerCase();
      return parcels.filter(p => 
        p.id.toLowerCase().includes(q) || 
        p.ulpin.toLowerCase().includes(q) ||
        p.surveyNumber.toLowerCase().includes(q) ||
        p.owner.name.toLowerCase().includes(q) ||
        p.location.village.toLowerCase().includes(q)
      );
    }
  };
})();
