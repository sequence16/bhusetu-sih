window.BhuSetu = window.BhuSetu || {};

window.BhuSetu.SeedData = (function() {
  const parcels = [
  {
    "id": "parcel-1",
    "ulpin": "14-1029-4401-2026",
    "survey_number": "TS-SNG-AMP-433/A",
    "state": "Telangana",
    "district": "Sangareddy",
    "mandal": "Ameenpur",
    "village": "Sultanpur",
    "status": "CLEAN",
    "trust_score": 96,
    "trust_grade": "A",
    "owner_name": "Ramesh Reddy",
    "owner_masked": "R***sh R***dy",
    "owner_type": "Individual Freehold",
    "ror_area": 36938,
    "gis_area": 36942,
    "regional_unit": "SQ_YARD",
    "regional_value": 44177.5,
    "zoning": "Residential Zone R1",
    "tax_status": "Paid",
    "tax_last_paid": "2026-01-15",
    "tax_amount": "\u20b912,450",
    "isolation_score": 0.08,
    "building": {
      "sanctioned": {
        "type": "Independent Villa G+2",
        "height": 9.5,
        "floors": 3,
        "far": 1.4
      },
      "detected": {
        "type": "Independent Villa G+2",
        "height": 9.4,
        "floors": 3,
        "far": 1.38
      }
    },
    "violations": [],
    "buffer_zones": [],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            78.3268252,
            17.5507838
          ],
          [
            78.3267109,
            17.5498922
          ],
          [
            78.3266829,
            17.5497267
          ],
          [
            78.3267256,
            17.5496279
          ],
          [
            78.3269224,
            17.5493723
          ],
          [
            78.3270519,
            17.5492464
          ],
          [
            78.3269223,
            17.5491162
          ],
          [
            78.3267705,
            17.5489262
          ],
          [
            78.3265756,
            17.548764
          ],
          [
            78.3264361,
            17.5486605
          ],
          [
            78.3263017,
            17.548731
          ],
          [
            78.3253291,
            17.5493798
          ],
          [
            78.3251879,
            17.549468
          ],
          [
            78.3251876,
            17.5496517
          ],
          [
            78.3251673,
            17.5503715
          ],
          [
            78.3251601,
            17.5506272
          ],
          [
            78.3251545,
            17.5507833
          ],
          [
            78.325301,
            17.5508061
          ],
          [
            78.3254571,
            17.5508232
          ],
          [
            78.3257798,
            17.5508578
          ],
          [
            78.3259246,
            17.5508743
          ],
          [
            78.3261047,
            17.5508567
          ],
          [
            78.3266608,
            17.5508043
          ],
          [
            78.3268252,
            17.5507838
          ]
        ]
      ]
    },
    "displayId": "14-1029-4401-2026",
    "surveyNumber": "TS-SNG-AMP-433/A",
    "trustScore": 96,
    "trustGrade": "A",
    "classification": "Residential Zone R1",
    "location": {
      "state": "Telangana",
      "district": "Sangareddy",
      "mandal": "Ameenpur",
      "village": "Sultanpur"
    },
    "owner": {
      "name": "Ramesh Reddy",
      "maskedName": "R***sh R***dy",
      "type": "Individual Freehold"
    },
    "area": {
      "ror": 36938,
      "gis": 36942,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 44177.5
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2026-01-15",
      "amount": "\u20b912,450"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-2",
    "ulpin": "14-3048-8821-2026",
    "survey_number": "TS-HYD-MDP-54/2",
    "state": "Telangana",
    "district": "Hyderabad",
    "mandal": "Shaikpet",
    "village": "Madhapur",
    "status": "CRITICAL",
    "trust_score": 14,
    "trust_grade": "E",
    "owner_name": "Dilip Reddy",
    "owner_masked": "D***ip R***dy",
    "owner_type": "Private Commercial Entity",
    "ror_area": 3400,
    "gis_area": 3410,
    "regional_unit": "GUNTHA",
    "regional_value": 33.61,
    "zoning": "Restricted - Waterbody Periphery Buffer",
    "tax_status": "Pending Verification",
    "tax_last_paid": "2024-03-20",
    "tax_amount": "\u20b945,800",
    "isolation_score": 0.94,
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Commercial Warehouse & Shed",
        "height": 8.5,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [
      {
        "id": "V-HYDRAA-01",
        "severity": "CRITICAL",
        "type": "FTL_ENCROACHMENT",
        "description": "CRITICAL: Illegal Construction inside Durgam Cheruvu FTL Buffer (HYDRAA Act)",
        "details": "Commercial warehouse structure (1,850 m\u00b2) extends 18.2 meters past notified Full Tank Level (FTL) 30m buffer boundary. Demolition notice pending.",
        "encroachment_area_sqm": 1850.0
      }
    ],
    "buffer_zones": [
      {
        "type": "Feature",
        "properties": {
          "name": "Durgam Cheruvu FTL Buffer (30m)",
          "type": "waterbody_ftl"
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                78.3797,
                17.4337
              ],
              [
                78.381,
                17.4346
              ],
              [
                78.3827,
                17.4352
              ],
              [
                78.3842,
                17.435
              ],
              [
                78.3853,
                17.4342
              ],
              [
                78.3858,
                17.4327
              ],
              [
                78.3855,
                17.4311
              ],
              [
                78.3844,
                17.43
              ],
              [
                78.3826,
                17.4297
              ],
              [
                78.381,
                17.4304
              ],
              [
                78.38,
                17.4316
              ],
              [
                78.3797,
                17.4337
              ]
            ]
          ]
        }
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            78.3849,
            17.4344
          ],
          [
            78.3857,
            17.4344
          ],
          [
            78.3857,
            17.4338
          ],
          [
            78.3849,
            17.4338
          ],
          [
            78.3849,
            17.4344
          ]
        ]
      ]
    },
    "displayId": "14-3048-8821-2026",
    "surveyNumber": "TS-HYD-MDP-54/2",
    "trustScore": 14,
    "trustGrade": "E",
    "classification": "Restricted - Waterbody Periphery Buffer",
    "location": {
      "state": "Telangana",
      "district": "Hyderabad",
      "mandal": "Shaikpet",
      "village": "Madhapur"
    },
    "owner": {
      "name": "Dilip Reddy",
      "maskedName": "D***ip R***dy",
      "type": "Private Commercial Entity"
    },
    "area": {
      "ror": 3400,
      "gis": 3410,
      "regionalUnit": "GUNTHA",
      "regionalValue": 33.61
    },
    "tax": {
      "status": "Pending Verification",
      "lastPaid": "2024-03-20",
      "amount": "\u20b945,800"
    },
    "bufferZones": [
      {
        "type": "Feature",
        "properties": {
          "name": "Durgam Cheruvu FTL Buffer (30m)",
          "type": "waterbody_ftl"
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                78.3797,
                17.4337
              ],
              [
                78.381,
                17.4346
              ],
              [
                78.3827,
                17.4352
              ],
              [
                78.3842,
                17.435
              ],
              [
                78.3853,
                17.4342
              ],
              [
                78.3858,
                17.4327
              ],
              [
                78.3855,
                17.4311
              ],
              [
                78.3844,
                17.43
              ],
              [
                78.3826,
                17.4297
              ],
              [
                78.381,
                17.4304
              ],
              [
                78.38,
                17.4316
              ],
              [
                78.3797,
                17.4337
              ]
            ]
          ]
        }
      }
    ],
    "buildingFootprint": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            78.3849,
            17.4344
          ],
          [
            78.3857,
            17.4344
          ],
          [
            78.3857,
            17.4338
          ],
          [
            78.3849,
            17.4338
          ],
          [
            78.3849,
            17.4344
          ]
        ]
      ]
    },
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-3",
    "ulpin": "07-5501-1084-2026",
    "survey_number": "DL-MCD-LJP-108/4",
    "state": "Delhi NCT",
    "district": "South Delhi",
    "mandal": "Defence Colony",
    "village": "Lajpat Nagar",
    "status": "WARNING",
    "trust_score": 32,
    "trust_grade": "D",
    "owner_name": "Anand Sharma",
    "owner_masked": "A***nd S***ma",
    "owner_type": "Joint Family Ownership",
    "ror_area": 220,
    "gis_area": 218,
    "regional_unit": "SQ_YARD",
    "regional_value": 263.12,
    "zoning": "Mixed-Use Commercial/Residential (MU-1)",
    "tax_status": "Overdue",
    "tax_last_paid": "2023-08-11",
    "tax_amount": "\u20b918,200",
    "isolation_score": 0.89,
    "building": {
      "sanctioned": {
        "type": "Residential G+2",
        "height": 9.0,
        "floors": 3,
        "far": 1.5
      },
      "detected": {
        "type": "Commercial-Residential G+5",
        "height": 18.5,
        "floors": 6,
        "far": 3.8
      }
    },
    "violations": [
      {
        "id": "V-MCD-01",
        "severity": "WARNING",
        "type": "HEIGHT_AND_FAR_VIOLATION",
        "description": "STRUCTURAL RISK: Unapproved G+5 Multi-Storey Overbuild (MCD Sanction Limit 9m)",
        "details": "Sanction plan authorizes G+2 (9.0m, FAR 1.5). Drone photogrammetry detected G+5 structure (18.5m, FAR 3.8) with 0m setback from adjacent properties.",
        "encroachment_area_sqm": 85.0
      }
    ],
    "buffer_zones": [],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            77.2395,
            28.5698
          ],
          [
            77.2401,
            28.5699
          ],
          [
            77.2402,
            28.5694
          ],
          [
            77.2396,
            28.5693
          ],
          [
            77.2395,
            28.5698
          ]
        ]
      ]
    },
    "displayId": "07-5501-1084-2026",
    "surveyNumber": "DL-MCD-LJP-108/4",
    "trustScore": 32,
    "trustGrade": "D",
    "classification": "Mixed-Use Commercial/Residential (MU-1)",
    "location": {
      "state": "Delhi NCT",
      "district": "South Delhi",
      "mandal": "Defence Colony",
      "village": "Lajpat Nagar"
    },
    "owner": {
      "name": "Anand Sharma",
      "maskedName": "A***nd S***ma",
      "type": "Joint Family Ownership"
    },
    "area": {
      "ror": 220,
      "gis": 218,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 263.12
    },
    "tax": {
      "status": "Overdue",
      "lastPaid": "2023-08-11",
      "amount": "\u20b918,200"
    },
    "bufferZones": [],
    "buildingFootprint": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            77.2395,
            28.5698
          ],
          [
            77.2401,
            28.5699
          ],
          [
            77.2402,
            28.5694
          ],
          [
            77.2396,
            28.5693
          ],
          [
            77.2395,
            28.5698
          ]
        ]
      ]
    },
    "sanctionedFootprint": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            77.23965,
            28.5697
          ],
          [
            77.23995,
            28.56972
          ],
          [
            77.23998,
            28.56948
          ],
          [
            77.23968,
            28.56946
          ],
          [
            77.23965,
            28.5697
          ]
        ]
      ]
    }
  },
  {
    "id": "parcel-4",
    "ulpin": "14-2204-7102-2026",
    "survey_number": "TS-RNG-FRQ-33",
    "state": "Telangana",
    "district": "Rangareddy",
    "mandal": "Farooqnagar",
    "village": "Nagulapalle",
    "status": "CLEAN",
    "trust_score": 94,
    "trust_grade": "A",
    "owner_name": "Sunita Devi",
    "owner_masked": "S***ta D**i",
    "owner_type": "Rural Household (SVAMITVA Title)",
    "ror_area": 34310,
    "gis_area": 34305,
    "regional_unit": "GUNTHA",
    "regional_value": 339.13,
    "zoning": "Village Abadi - Habitation",
    "tax_status": "Paid",
    "tax_last_paid": "2025-11-04",
    "tax_amount": "\u20b9650",
    "isolation_score": 0.12,
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Rural Dwelling & Courtyard",
        "height": 4.5,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            78.2120023,
            17.1058223
          ],
          [
            78.2132045,
            17.1054112
          ],
          [
            78.2138902,
            17.1042331
          ],
          [
            78.2129554,
            17.1039881
          ],
          [
            78.2118221,
            17.1046114
          ],
          [
            78.2120023,
            17.1058223
          ]
        ]
      ]
    },
    "displayId": "14-2204-7102-2026",
    "surveyNumber": "TS-RNG-FRQ-33",
    "trustScore": 94,
    "trustGrade": "A",
    "classification": "Village Abadi - Habitation",
    "location": {
      "state": "Telangana",
      "district": "Rangareddy",
      "mandal": "Farooqnagar",
      "village": "Nagulapalle"
    },
    "owner": {
      "name": "Sunita Devi",
      "maskedName": "S***ta D**i",
      "type": "Rural Household (SVAMITVA Title)"
    },
    "area": {
      "ror": 34310,
      "gis": 34305,
      "regionalUnit": "GUNTHA",
      "regionalValue": 339.13
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-11-04",
      "amount": "\u20b9650"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-5",
    "ulpin": "14-4307-1090-2026",
    "survey_number": "TS-WRG-ELK-876",
    "state": "Telangana",
    "district": "Warangal_Urban",
    "mandal": "Elkathurthi",
    "village": "Elkathurthi",
    "status": "CRITICAL",
    "trust_score": 18,
    "trust_grade": "E",
    "owner_name": "Vikram Patel",
    "owner_masked": "V***am P***el",
    "owner_type": "Succession Disputed",
    "ror_area": 69291,
    "gis_area": 71000,
    "regional_unit": "ACRE",
    "regional_value": 17.12,
    "zoning": "Agricultural / Govt Common Grazing",
    "tax_status": "Overdue",
    "tax_last_paid": "2023-04-12",
    "tax_amount": "\u20b93,400",
    "isolation_score": 0.88,
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Farm Shed & Boundary Wall",
        "height": 4.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [
      {
        "id": "V-WRG-01",
        "severity": "CRITICAL",
        "type": "GOVT_LAND_ENCROACHMENT",
        "description": "CRITICAL: Area discrepancy & Encroachment on Village Commons",
        "details": "GIS boundary exceeds RoR area by 1,709 m\u00b2 into designated Government Gauchar land. Contested succession mutation.",
        "encroachment_area_sqm": 1709.0
      }
    ],
    "buffer_zones": [],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            79.4312011,
            18.1098442
          ],
          [
            79.4328445,
            18.1094112
          ],
          [
            79.4331002,
            18.1079553
          ],
          [
            79.4318554,
            18.1074112
          ],
          [
            79.4305112,
            18.1086221
          ],
          [
            79.4312011,
            18.1098442
          ]
        ]
      ]
    },
    "displayId": "14-4307-1090-2026",
    "surveyNumber": "TS-WRG-ELK-876",
    "trustScore": 18,
    "trustGrade": "E",
    "classification": "Agricultural / Govt Common Grazing",
    "location": {
      "state": "Telangana",
      "district": "Warangal_Urban",
      "mandal": "Elkathurthi",
      "village": "Elkathurthi"
    },
    "owner": {
      "name": "Vikram Patel",
      "maskedName": "V***am P***el",
      "type": "Succession Disputed"
    },
    "area": {
      "ror": 69291,
      "gis": 71000,
      "regionalUnit": "ACRE",
      "regionalValue": 17.12
    },
    "tax": {
      "status": "Overdue",
      "lastPaid": "2023-04-12",
      "amount": "\u20b93,400"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-6",
    "ulpin": "14-5011-9214-2026",
    "survey_number": "TS-SDP-MLG-210",
    "state": "Telangana",
    "district": "Siddipet",
    "mandal": "Mulug",
    "village": "Achaipally",
    "status": "CRITICAL",
    "trust_score": 8,
    "trust_grade": "F",
    "owner_name": "Rajesh Mahato",
    "owner_masked": "R***sh M***to",
    "owner_type": "Encroacher (Forest Fringe)",
    "ror_area": 97106,
    "gis_area": 97450,
    "regional_unit": "ACRE",
    "regional_value": 24.0,
    "zoning": "Notified Protected Forest Buffer",
    "tax_status": "N/A - Forest Land",
    "tax_last_paid": "N/A",
    "tax_amount": "N/A",
    "isolation_score": 0.96,
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Excavation Pit & Kiln",
        "height": 5.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [
      {
        "id": "V-FOR-01",
        "severity": "CRITICAL",
        "type": "FOREST_ENCROACHMENT",
        "description": "CRITICAL: Illegal excavation & clearing inside Protected Forest Zone",
        "details": "Violates Forest Conservation Act Section 2. Commercial clay excavation and kiln detected by drone imagery.",
        "encroachment_area_sqm": 4200.0
      }
    ],
    "buffer_zones": [],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            78.5658372,
            17.700329
          ],
          [
            78.5673283,
            17.700093
          ],
          [
            78.5683436,
            17.7006818
          ],
          [
            78.5675488,
            17.6983421
          ],
          [
            78.5661605,
            17.6980903
          ],
          [
            78.5660082,
            17.6981999
          ],
          [
            78.5656047,
            17.6984904
          ],
          [
            78.5637658,
            17.6996031
          ],
          [
            78.5629881,
            17.7000665
          ],
          [
            78.5639235,
            17.7007625
          ],
          [
            78.5658372,
            17.700329
          ]
        ]
      ]
    },
    "displayId": "14-5011-9214-2026",
    "surveyNumber": "TS-SDP-MLG-210",
    "trustScore": 8,
    "trustGrade": "F",
    "classification": "Notified Protected Forest Buffer",
    "location": {
      "state": "Telangana",
      "district": "Siddipet",
      "mandal": "Mulug",
      "village": "Achaipally"
    },
    "owner": {
      "name": "Rajesh Mahato",
      "maskedName": "R***sh M***to",
      "type": "Encroacher (Forest Fringe)"
    },
    "area": {
      "ror": 97106,
      "gis": 97450,
      "regionalUnit": "ACRE",
      "regionalValue": 24.0
    },
    "tax": {
      "status": "N/A - Forest Land",
      "lastPaid": "N/A",
      "amount": "N/A"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  }
];

  return {
    getAllParcels: function() { return parcels; },
    getParcelById: function(id) { return parcels.find(p => p.id === id) || null; },
    getParcelByULPIN: function(ulpin) { return parcels.find(p => p.ulpin === ulpin || p.displayId === ulpin) || null; },
    getParcelBySurvey: function(survey) { return parcels.find(p => p.survey_number === survey) || null; },
    searchParcels: function(query) {
      if (!query) return [];
      const q = query.toLowerCase();
      return parcels.filter(p =>
        (p.id && p.id.toLowerCase().includes(q)) ||
        (p.ulpin && p.ulpin.toLowerCase().includes(q)) ||
        (p.survey_number && p.survey_number.toLowerCase().includes(q)) ||
        (p.owner_name && p.owner_name.toLowerCase().includes(q)) ||
        (p.village && p.village.toLowerCase().includes(q)) ||
        (p.district && p.district.toLowerCase().includes(q))
      );
    }
  };
})();
