window.BhuSetu = window.BhuSetu || {};

window.BhuSetu.SeedData = (function() {
  const parcels = [
  {
    "id": "parcel-1",
    "ulpin": "14-8842-9901-2020",
    "state_survey_no": "TS-SNG-AMP-433",
    "survey_number": "TS-SNG-AMP-433",
    "state": "Telangana",
    "district": "Sangareddy",
    "mandal": "Ameenpur",
    "village": "Sultanpur",
    "census_code": "573930",
    "dmv_code": "1737006",
    "owner_name": "Ramesh Reddy",
    "owner_masked": "R***sh R***dy",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 35103.9,
    "gis_area_sqm": 35103.9,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "A",
    "trust_num": 96,
    "zoning": "Residential Zone R1",
    "classification": "Residential Zone R1",
    "tax_status": "Paid",
    "tax_amount": "\u20b912,400",
    "tax_last_paid": "2025-11-20",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved (G+2 Sanctioned)",
    "building": {
      "sanctioned": {
        "height": 9.5,
        "floors": 3,
        "far": 1.4
      },
      "detected": {
        "height": 9.4,
        "floors": 3,
        "far": 1.38
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2021-04-12",
        "type": "Registered Sale Deed",
        "details": "Sub-Registrar Sangareddy Document #2104/2021",
        "status": "Clean"
      },
      {
        "date": "2023-01-15",
        "type": "Property Tax Clearance",
        "details": "GHMC Municipal Tax NOC #TX-88319",
        "status": "Cleared"
      }
    ],
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
    "displayId": "14-8842-9901-2020",
    "surveyNumber": "TS-SNG-AMP-433",
    "trustScore": 96,
    "trustGrade": "A",
    "location": {
      "state": "Telangana",
      "district": "Sangareddy",
      "mandal": "Ameenpur",
      "village": "Sultanpur"
    },
    "owner": {
      "name": "Ramesh Reddy",
      "maskedName": "R***sh R***dy",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 35103.9,
      "gis": 35103.9,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 41985.3
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-11-20",
      "amount": "\u20b912,400"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-2",
    "ulpin": "14-8842-9901-2021",
    "state_survey_no": "TS-RR-SUR-401/1A",
    "survey_number": "TS-RR-SUR-401/1A",
    "state": "Telangana",
    "district": "Hyderabad",
    "mandal": "Shaikpet",
    "village": "Madhapur",
    "census_code": "574044",
    "dmv_code": "1738012",
    "owner_name": "Sunil Ganapathi",
    "owner_masked": "S***l G***ti",
    "owner_type": "Private Commercial / Encroacher",
    "legal_ror_area_sqm": 4500.0,
    "gis_area_sqm": 4515.0,
    "area_diff_sqm": 15.0,
    "area_diff_pct": 0.33,
    "status": "CRITICAL",
    "trust_score": "F",
    "trust_num": 14,
    "zoning": "Waterbody Buffer (FTL)",
    "classification": "Waterbody Buffer (FTL)",
    "tax_status": "Defaulter / Disputed",
    "tax_amount": "\u20b942,000",
    "tax_last_paid": "2023-04-01",
    "dispute_tag": "CRITICAL_FTL_ENCROACHMENT",
    "permit_status": "Unsanctioned / Illegal Construction",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Commercial Warehouse",
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
        "description": "CRITICAL: Illegal Commercial Warehouse inside Durgam Cheruvu 30m FTL Lake Buffer",
        "details": "Structure encroaches 2,818.4 m\u00b2 past notified Full Tank Level (FTL) buffer boundary line. Statutory Demolition Notice required.",
        "encroachment_area_sqm": 2818.4
      }
    ],
    "buffer_zones": [
      {
        "type": "Feature",
        "properties": {
          "name": "Durgam Cheruvu 30m FTL Buffer",
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
    "encumbrances": [
      {
        "date": "2024-06-20",
        "type": "HYDRAA Statutory Notice",
        "details": "Encroachment inside Durgam Cheruvu FTL buffer \u2014 Demolition Review",
        "status": "Active"
      },
      {
        "date": "2024-09-02",
        "type": "High Court Interim Stay",
        "details": "Writ Petition #18492/2024 pending hearing",
        "status": "Active"
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
    "displayId": "14-8842-9901-2021",
    "surveyNumber": "TS-RR-SUR-401/1A",
    "trustScore": 14,
    "trustGrade": "F",
    "location": {
      "state": "Telangana",
      "district": "Hyderabad",
      "mandal": "Shaikpet",
      "village": "Madhapur"
    },
    "owner": {
      "name": "Sunil Ganapathi",
      "maskedName": "S***l G***ti",
      "type": "Private Commercial / Encroacher"
    },
    "area": {
      "ror": 4500.0,
      "gis": 4515.0,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 5382.1
    },
    "tax": {
      "status": "Defaulter / Disputed",
      "lastPaid": "2023-04-01",
      "amount": "\u20b942,000"
    },
    "bufferZones": [
      {
        "type": "Feature",
        "properties": {
          "name": "Durgam Cheruvu 30m FTL Buffer",
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
    "ulpin": "07-8842-9901-2022",
    "state_survey_no": "DL-MCD-LJP-108/4",
    "survey_number": "DL-MCD-LJP-108/4",
    "state": "Delhi NCT",
    "district": "South Delhi",
    "mandal": "Defence Colony",
    "village": "Lajpat Nagar",
    "census_code": "058721",
    "dmv_code": "0701004",
    "owner_name": "Arvind Sharma",
    "owner_masked": "A***nd S***ma",
    "owner_type": "Joint Urban Freehold",
    "legal_ror_area_sqm": 220.0,
    "gis_area_sqm": 218.0,
    "area_diff_sqm": -2.0,
    "area_diff_pct": 0.91,
    "status": "WARNING",
    "trust_score": "C",
    "trust_num": 32,
    "zoning": "Dense Mixed Commercial",
    "classification": "Dense Mixed Commercial",
    "tax_status": "Overdue",
    "tax_amount": "\u20b928,500",
    "tax_last_paid": "2023-08-15",
    "dispute_tag": "UNAPPROVED_HEIGHT_FAR",
    "permit_status": "G+2 Sanctioned (G+5 Built)",
    "building": {
      "sanctioned": {
        "height": 9.0,
        "floors": 3,
        "far": 1.5
      },
      "detected": {
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
        "description": "STRUCTURAL ALERT: Unauthorized G+5 Construction (Sanctioned G+2 9.0m Limit)",
        "details": "Drone photogrammetry detects 18.5m height and FAR 3.8 (allowed 1.5). Zero setback from adjacent plots presents severe structural risk.",
        "encroachment_area_sqm": 85.0
      }
    ],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2025-01-10",
        "type": "MCD Stop-Work Order",
        "details": "Unauthorized construction beyond G+2 sanction",
        "status": "Active"
      },
      {
        "date": "2020-07-22",
        "type": "Registered Sale Deed",
        "details": "Sub-registrar SRO-III, South Delhi",
        "status": "Cleared"
      }
    ],
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
    "displayId": "07-8842-9901-2022",
    "surveyNumber": "DL-MCD-LJP-108/4",
    "trustScore": 32,
    "trustGrade": "C",
    "location": {
      "state": "Delhi NCT",
      "district": "South Delhi",
      "mandal": "Defence Colony",
      "village": "Lajpat Nagar"
    },
    "owner": {
      "name": "Arvind Sharma",
      "maskedName": "A***nd S***ma",
      "type": "Joint Urban Freehold"
    },
    "area": {
      "ror": 220.0,
      "gis": 218.0,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 263.1
    },
    "tax": {
      "status": "Overdue",
      "lastPaid": "2023-08-15",
      "amount": "\u20b928,500"
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
    "ulpin": "14-3361-0004-2026",
    "state_survey_no": "TS-PED-PED-82",
    "survey_number": "TS-PED-PED-82",
    "state": "Telangana",
    "district": "Peddapalli",
    "mandal": "Peddapalli",
    "village": "Peddakalvala",
    "census_code": "571990",
    "dmv_code": "2016015",
    "owner_name": "Prabhakar Venkatesh",
    "owner_masked": "P***r V***h",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 38809.2,
    "gis_area_sqm": 38809.2,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "A",
    "trust_num": 94,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Ryotwari Freehold",
    "tax_status": "Paid",
    "tax_amount": "\u20b915,561",
    "tax_last_paid": "2025-09-30",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved Patta / Dharani Integrated",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2022-08-14",
        "type": "Registered Dharani Patta Passbook",
        "details": "Dharani Digital Title Passbook #TS-PED-PED-82",
        "status": "Clean"
      },
      {
        "date": "2025-06-10",
        "type": "Land Revenue Clearance",
        "details": "Annual land revenue assessed and cleared",
        "status": "Cleared"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            79.3634755,
            18.5973899
          ],
          [
            79.3641444,
            18.597151
          ],
          [
            79.36511,
            18.5966913
          ],
          [
            79.364262,
            18.5953522
          ],
          [
            79.3642071,
            18.5952677
          ],
          [
            79.3640271,
            18.5953651
          ],
          [
            79.3638466,
            18.5954571
          ],
          [
            79.3633963,
            18.5956894
          ],
          [
            79.3632901,
            18.5957689
          ],
          [
            79.363141,
            18.5958456
          ],
          [
            79.362752,
            18.5961271
          ],
          [
            79.3625193,
            18.5961083
          ],
          [
            79.3625951,
            18.5963379
          ],
          [
            79.3629836,
            18.5975335
          ],
          [
            79.3634755,
            18.5973899
          ]
        ]
      ]
    },
    "displayId": "14-3361-0004-2026",
    "surveyNumber": "TS-PED-PED-82",
    "trustScore": 94,
    "trustGrade": "A",
    "location": {
      "state": "Telangana",
      "district": "Peddapalli",
      "mandal": "Peddapalli",
      "village": "Peddakalvala"
    },
    "owner": {
      "name": "Prabhakar Venkatesh",
      "maskedName": "P***r V***h",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 38809.2,
      "gis": 38809.2,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 46416.9
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-09-30",
      "amount": "\u20b915,561"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-5",
    "ulpin": "14-8623-0005-2026",
    "state_survey_no": "TS-PED-PED-66",
    "survey_number": "TS-PED-PED-66",
    "state": "Telangana",
    "district": "Peddapalli",
    "mandal": "Peddapalli",
    "village": "Peddakalvala",
    "census_code": "571990",
    "dmv_code": "2016015",
    "owner_name": "Sudarshan Narayana",
    "owner_masked": "S***n N***a",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 17377.2,
    "gis_area_sqm": 17377.2,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "B",
    "trust_num": 88,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Ryotwari Freehold",
    "tax_status": "Paid",
    "tax_amount": "\u20b914,823",
    "tax_last_paid": "2025-09-30",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved Patta / Dharani Integrated",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2022-08-14",
        "type": "Registered Dharani Patta Passbook",
        "details": "Dharani Digital Title Passbook #TS-PED-PED-66",
        "status": "Clean"
      },
      {
        "date": "2025-06-10",
        "type": "Land Revenue Clearance",
        "details": "Annual land revenue assessed and cleared",
        "status": "Cleared"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            79.3632901,
            18.5957689
          ],
          [
            79.3632169,
            18.5955909
          ],
          [
            79.3627597,
            18.5943514
          ],
          [
            79.3627132,
            18.5941909
          ],
          [
            79.3625929,
            18.5942525
          ],
          [
            79.3620985,
            18.5944819
          ],
          [
            79.3618999,
            18.5945697
          ],
          [
            79.3617853,
            18.5947284
          ],
          [
            79.3618928,
            18.594869
          ],
          [
            79.3626128,
            18.5959469
          ],
          [
            79.3625049,
            18.5960055
          ],
          [
            79.3625193,
            18.5961083
          ],
          [
            79.362752,
            18.5961271
          ],
          [
            79.363141,
            18.5958456
          ],
          [
            79.3632901,
            18.5957689
          ]
        ]
      ]
    },
    "displayId": "14-8623-0005-2026",
    "surveyNumber": "TS-PED-PED-66",
    "trustScore": 88,
    "trustGrade": "B",
    "location": {
      "state": "Telangana",
      "district": "Peddapalli",
      "mandal": "Peddapalli",
      "village": "Peddakalvala"
    },
    "owner": {
      "name": "Sudarshan Narayana",
      "maskedName": "S***n N***a",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 17377.2,
      "gis": 17377.2,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 20783.6
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-09-30",
      "amount": "\u20b914,823"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-6",
    "ulpin": "14-5838-0006-2026",
    "state_survey_no": "TS-PED-PED-83",
    "survey_number": "TS-PED-PED-83",
    "state": "Telangana",
    "district": "Peddapalli",
    "mandal": "Peddapalli",
    "village": "Peddakalvala",
    "census_code": "571990",
    "dmv_code": "2016015",
    "owner_name": "Narasimha Goud",
    "owner_masked": "N***a G***d",
    "owner_type": "Individual Freehold (Succession Contested)",
    "legal_ror_area_sqm": 36536.1,
    "gis_area_sqm": 37449.5,
    "area_diff_sqm": 913.4,
    "area_diff_pct": 2.5,
    "status": "WARNING",
    "trust_score": "C",
    "trust_num": 58,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Agricultural Freehold",
    "tax_status": "Overdue (3 Years Defaulter)",
    "tax_amount": "\u20b912,038",
    "tax_last_paid": "2023-01-15",
    "dispute_tag": "MUTATION_DISPUTE",
    "permit_status": "Agricultural Ryotwari",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [
      {
        "id": "V-006",
        "severity": "WARNING",
        "type": "MUTATION_CONTESTED",
        "description": "SUCCESSION DISPUTE: Contested mutation application filed before Tahsildar",
        "details": "Succession transfer challenged by legal heirs. Revenue record locked pending DRO inquiry.",
        "encroachment_area_sqm": 0.0
      }
    ],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2024-11-15",
        "type": "Mutation Dispute Objection",
        "details": "Objection petition filed under ROR Act \u00a75",
        "status": "Active"
      },
      {
        "date": "2020-02-18",
        "type": "Primary Agriculture Co-op Loan",
        "details": "Crop loan hypothecation of \u20b91,80,000",
        "status": "Active"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            79.3663477,
            18.5959205
          ],
          [
            79.3664678,
            18.5958187
          ],
          [
            79.3665392,
            18.5957873
          ],
          [
            79.3665353,
            18.5957796
          ],
          [
            79.3658707,
            18.5942964
          ],
          [
            79.3657267,
            18.5943701
          ],
          [
            79.3655876,
            18.5944269
          ],
          [
            79.3646417,
            18.5948675
          ],
          [
            79.3643067,
            18.5951747
          ],
          [
            79.3642071,
            18.5952677
          ],
          [
            79.364262,
            18.5953522
          ],
          [
            79.36511,
            18.5966913
          ],
          [
            79.3651468,
            18.5966738
          ],
          [
            79.3663477,
            18.5959205
          ]
        ]
      ]
    },
    "displayId": "14-5838-0006-2026",
    "surveyNumber": "TS-PED-PED-83",
    "trustScore": 58,
    "trustGrade": "C",
    "location": {
      "state": "Telangana",
      "district": "Peddapalli",
      "mandal": "Peddapalli",
      "village": "Peddakalvala"
    },
    "owner": {
      "name": "Narasimha Goud",
      "maskedName": "N***a G***d",
      "type": "Individual Freehold (Succession Contested)"
    },
    "area": {
      "ror": 36536.1,
      "gis": 37449.5,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 43698.2
    },
    "tax": {
      "status": "Overdue (3 Years Defaulter)",
      "lastPaid": "2023-01-15",
      "amount": "\u20b912,038"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-7",
    "ulpin": "14-4146-0007-2026",
    "state_survey_no": "TS-PED-PED-84",
    "survey_number": "TS-PED-PED-84",
    "state": "Telangana",
    "district": "Peddapalli",
    "mandal": "Peddapalli",
    "village": "Peddakalvala",
    "census_code": "571990",
    "dmv_code": "2016015",
    "owner_name": "Kavitha Venkatesh",
    "owner_masked": "K***a V***h",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 21983.3,
    "gis_area_sqm": 21983.3,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "B",
    "trust_num": 88,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Ryotwari Freehold",
    "tax_status": "Paid",
    "tax_amount": "\u20b97,346",
    "tax_last_paid": "2025-09-30",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved Patta / Dharani Integrated",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2022-08-14",
        "type": "Registered Dharani Patta Passbook",
        "details": "Dharani Digital Title Passbook #TS-PED-PED-84",
        "status": "Clean"
      },
      {
        "date": "2025-06-10",
        "type": "Land Revenue Clearance",
        "details": "Annual land revenue assessed and cleared",
        "status": "Cleared"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            79.366902,
            18.5956281
          ],
          [
            79.367515,
            18.5953498
          ],
          [
            79.3680584,
            18.5951756
          ],
          [
            79.3675199,
            18.5941457
          ],
          [
            79.3674798,
            18.5939749
          ],
          [
            79.3673048,
            18.5940504
          ],
          [
            79.3664636,
            18.5943762
          ],
          [
            79.3662995,
            18.5944236
          ],
          [
            79.3661629,
            18.5946521
          ],
          [
            79.3667249,
            18.5957058
          ],
          [
            79.366902,
            18.5956281
          ]
        ]
      ]
    },
    "displayId": "14-4146-0007-2026",
    "surveyNumber": "TS-PED-PED-84",
    "trustScore": 88,
    "trustGrade": "B",
    "location": {
      "state": "Telangana",
      "district": "Peddapalli",
      "mandal": "Peddapalli",
      "village": "Peddakalvala"
    },
    "owner": {
      "name": "Kavitha Venkatesh",
      "maskedName": "K***a V***h",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 21983.3,
      "gis": 21983.3,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 26292.7
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-09-30",
      "amount": "\u20b97,346"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-8",
    "ulpin": "14-8852-0008-2026",
    "state_survey_no": "TS-PED-PED-87/2",
    "survey_number": "TS-PED-PED-87/2",
    "state": "Telangana",
    "district": "Peddapalli",
    "mandal": "Peddapalli",
    "village": "Peddakalvala",
    "census_code": "571990",
    "dmv_code": "2016015",
    "owner_name": "Shankar Narayana",
    "owner_masked": "S***r N***a",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 7755.3,
    "gis_area_sqm": 7755.3,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "A",
    "trust_num": 94,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Ryotwari Freehold",
    "tax_status": "Paid",
    "tax_amount": "\u20b96,052",
    "tax_last_paid": "2025-09-30",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved Patta / Dharani Integrated",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2022-08-14",
        "type": "Registered Dharani Patta Passbook",
        "details": "Dharani Digital Title Passbook #TS-PED-PED-87/2",
        "status": "Clean"
      },
      {
        "date": "2025-06-10",
        "type": "Land Revenue Clearance",
        "details": "Annual land revenue assessed and cleared",
        "status": "Cleared"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            79.3674798,
            18.5939749
          ],
          [
            79.3674245,
            18.5938697
          ],
          [
            79.367272,
            18.5935959
          ],
          [
            79.367209,
            18.5934744
          ],
          [
            79.3661593,
            18.5939374
          ],
          [
            79.3662211,
            18.5942489
          ],
          [
            79.3662995,
            18.5944236
          ],
          [
            79.3664636,
            18.5943762
          ],
          [
            79.3673048,
            18.5940504
          ],
          [
            79.3674798,
            18.5939749
          ]
        ]
      ]
    },
    "displayId": "14-8852-0008-2026",
    "surveyNumber": "TS-PED-PED-87/2",
    "trustScore": 94,
    "trustGrade": "A",
    "location": {
      "state": "Telangana",
      "district": "Peddapalli",
      "mandal": "Peddapalli",
      "village": "Peddakalvala"
    },
    "owner": {
      "name": "Shankar Narayana",
      "maskedName": "S***r N***a",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 7755.3,
      "gis": 7755.3,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 9275.6
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-09-30",
      "amount": "\u20b96,052"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-9",
    "ulpin": "14-7987-0009-2026",
    "state_survey_no": "TS-WAR-ELK-876",
    "survey_number": "TS-WAR-ELK-876",
    "state": "Telangana",
    "district": "Warangal_Urban",
    "mandal": "Elkathurthi",
    "village": "Elkathurthi",
    "census_code": "572690",
    "dmv_code": "2051005",
    "owner_name": "Yadagiri Goud",
    "owner_masked": "Y***i G***d",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 65645.1,
    "gis_area_sqm": 65645.1,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "B",
    "trust_num": 88,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Ryotwari Freehold",
    "tax_status": "Paid",
    "tax_amount": "\u20b98,187",
    "tax_last_paid": "2025-09-30",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved Patta / Dharani Integrated",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2022-08-14",
        "type": "Registered Dharani Patta Passbook",
        "details": "Dharani Digital Title Passbook #TS-WAR-ELK-876",
        "status": "Clean"
      },
      {
        "date": "2025-06-10",
        "type": "Land Revenue Clearance",
        "details": "Annual land revenue assessed and cleared",
        "status": "Cleared"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            79.4320794,
            18.1100407
          ],
          [
            79.4320843,
            18.1098499
          ],
          [
            79.4320774,
            18.1082208
          ],
          [
            79.4320756,
            18.1080168
          ],
          [
            79.4320627,
            18.1080225
          ],
          [
            79.4320057,
            18.1080479
          ],
          [
            79.4318686,
            18.1081088
          ],
          [
            79.4313244,
            18.1084211
          ],
          [
            79.4312945,
            18.1084343
          ],
          [
            79.4308,
            18.1086524
          ],
          [
            79.430415,
            18.1088222
          ],
          [
            79.4303613,
            18.1088459
          ],
          [
            79.4303529,
            18.1087898
          ],
          [
            79.4302892,
            18.1083622
          ],
          [
            79.4302718,
            18.1082365
          ],
          [
            79.4301011,
            18.1082837
          ],
          [
            79.4285277,
            18.1088534
          ],
          [
            79.428379,
            18.1089022
          ],
          [
            79.4284816,
            18.1089974
          ],
          [
            79.4295955,
            18.1101529
          ],
          [
            79.4297796,
            18.1103437
          ],
          [
            79.429868,
            18.1104717
          ],
          [
            79.4300876,
            18.1104326
          ],
          [
            79.4318882,
            18.110081
          ],
          [
            79.4320794,
            18.1100407
          ]
        ]
      ]
    },
    "displayId": "14-7987-0009-2026",
    "surveyNumber": "TS-WAR-ELK-876",
    "trustScore": 88,
    "trustGrade": "B",
    "location": {
      "state": "Telangana",
      "district": "Warangal_Urban",
      "mandal": "Elkathurthi",
      "village": "Elkathurthi"
    },
    "owner": {
      "name": "Yadagiri Goud",
      "maskedName": "Y***i G***d",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 65645.1,
      "gis": 65645.1,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 78513.5
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-09-30",
      "amount": "\u20b98,187"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-10",
    "ulpin": "14-2117-0010-2026",
    "state_survey_no": "TS-WAR-ELK-877",
    "survey_number": "TS-WAR-ELK-877",
    "state": "Telangana",
    "district": "Warangal_Urban",
    "mandal": "Elkathurthi",
    "village": "Elkathurthi",
    "census_code": "572690",
    "dmv_code": "2051005",
    "owner_name": "Venkatesh Venkatesh",
    "owner_masked": "V***h V***h",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 31423.1,
    "gis_area_sqm": 31423.1,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "A",
    "trust_num": 94,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Ryotwari Freehold",
    "tax_status": "Paid",
    "tax_amount": "\u20b914,317",
    "tax_last_paid": "2025-09-30",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved Patta / Dharani Integrated",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2022-08-14",
        "type": "Registered Dharani Patta Passbook",
        "details": "Dharani Digital Title Passbook #TS-WAR-ELK-877",
        "status": "Clean"
      },
      {
        "date": "2025-06-10",
        "type": "Land Revenue Clearance",
        "details": "Annual land revenue assessed and cleared",
        "status": "Cleared"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            79.429868,
            18.1104717
          ],
          [
            79.4297796,
            18.1103437
          ],
          [
            79.4295955,
            18.1101529
          ],
          [
            79.4284816,
            18.1089974
          ],
          [
            79.428379,
            18.1089022
          ],
          [
            79.4282354,
            18.1089856
          ],
          [
            79.4276998,
            18.1093673
          ],
          [
            79.4275694,
            18.109475
          ],
          [
            79.427516,
            18.1095036
          ],
          [
            79.4274542,
            18.1095368
          ],
          [
            79.4274451,
            18.1095417
          ],
          [
            79.4274043,
            18.1095614
          ],
          [
            79.4280519,
            18.1104914
          ],
          [
            79.4281435,
            18.1105935
          ],
          [
            79.4281734,
            18.1106893
          ],
          [
            79.4282822,
            18.1110833
          ],
          [
            79.428636,
            18.1109512
          ],
          [
            79.4287051,
            18.1109254
          ],
          [
            79.4297532,
            18.1105342
          ],
          [
            79.429868,
            18.1104717
          ]
        ]
      ]
    },
    "displayId": "14-2117-0010-2026",
    "surveyNumber": "TS-WAR-ELK-877",
    "trustScore": 94,
    "trustGrade": "A",
    "location": {
      "state": "Telangana",
      "district": "Warangal_Urban",
      "mandal": "Elkathurthi",
      "village": "Elkathurthi"
    },
    "owner": {
      "name": "Venkatesh Venkatesh",
      "maskedName": "V***h V***h",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 31423.1,
      "gis": 31423.1,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 37582.9
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-09-30",
      "amount": "\u20b914,317"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-11",
    "ulpin": "14-8632-0011-2026",
    "state_survey_no": "TS-WAR-ELK-878",
    "survey_number": "TS-WAR-ELK-878",
    "state": "Telangana",
    "district": "Warangal_Urban",
    "mandal": "Elkathurthi",
    "village": "Elkathurthi",
    "census_code": "572690",
    "dmv_code": "2051005",
    "owner_name": "Mallaiah Narayana",
    "owner_masked": "M***h N***a",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 40449.4,
    "gis_area_sqm": 40449.4,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "B",
    "trust_num": 88,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Ryotwari Freehold",
    "tax_status": "Paid",
    "tax_amount": "\u20b92,832",
    "tax_last_paid": "2025-09-30",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved Patta / Dharani Integrated",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2022-08-14",
        "type": "Registered Dharani Patta Passbook",
        "details": "Dharani Digital Title Passbook #TS-WAR-ELK-878",
        "status": "Clean"
      },
      {
        "date": "2025-06-10",
        "type": "Land Revenue Clearance",
        "details": "Annual land revenue assessed and cleared",
        "status": "Cleared"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            79.4306658,
            18.1118422
          ],
          [
            79.430578,
            18.1116877
          ],
          [
            79.4299694,
            18.1106465
          ],
          [
            79.429868,
            18.1104717
          ],
          [
            79.4297532,
            18.1105342
          ],
          [
            79.4287051,
            18.1109254
          ],
          [
            79.428636,
            18.1109512
          ],
          [
            79.4282822,
            18.1110833
          ],
          [
            79.4283279,
            18.1112486
          ],
          [
            79.4285308,
            18.1118634
          ],
          [
            79.4285891,
            18.1119605
          ],
          [
            79.428624,
            18.1120985
          ],
          [
            79.4288919,
            18.1127062
          ],
          [
            79.4290868,
            18.1130641
          ],
          [
            79.4291772,
            18.1129884
          ],
          [
            79.4294907,
            18.1127434
          ],
          [
            79.4297391,
            18.1125493
          ],
          [
            79.4305153,
            18.1119428
          ],
          [
            79.4306658,
            18.1118422
          ]
        ]
      ]
    },
    "displayId": "14-8632-0011-2026",
    "surveyNumber": "TS-WAR-ELK-878",
    "trustScore": 88,
    "trustGrade": "B",
    "location": {
      "state": "Telangana",
      "district": "Warangal_Urban",
      "mandal": "Elkathurthi",
      "village": "Elkathurthi"
    },
    "owner": {
      "name": "Mallaiah Narayana",
      "maskedName": "M***h N***a",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 40449.4,
      "gis": 40449.4,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 48378.7
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-09-30",
      "amount": "\u20b92,832"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-12",
    "ulpin": "14-5179-0012-2026",
    "state_survey_no": "TS-WAR-ELK-879",
    "survey_number": "TS-WAR-ELK-879",
    "state": "Telangana",
    "district": "Warangal_Urban",
    "mandal": "Elkathurthi",
    "village": "Elkathurthi",
    "census_code": "572690",
    "dmv_code": "2051005",
    "owner_name": "Srinivas Goud",
    "owner_masked": "S***s G***d",
    "owner_type": "Individual Freehold (Succession Contested)",
    "legal_ror_area_sqm": 48062.6,
    "gis_area_sqm": 49264.2,
    "area_diff_sqm": 1201.6,
    "area_diff_pct": 2.5,
    "status": "WARNING",
    "trust_score": "C",
    "trust_num": 58,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Agricultural Freehold",
    "tax_status": "Overdue (3 Years Defaulter)",
    "tax_amount": "\u20b914,379",
    "tax_last_paid": "2023-01-15",
    "dispute_tag": "MUTATION_DISPUTE",
    "permit_status": "Agricultural Ryotwari",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [
      {
        "id": "V-012",
        "severity": "WARNING",
        "type": "MUTATION_CONTESTED",
        "description": "SUCCESSION DISPUTE: Contested mutation application filed before Tahsildar",
        "details": "Succession transfer challenged by legal heirs. Revenue record locked pending DRO inquiry.",
        "encroachment_area_sqm": 0.0
      }
    ],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2024-11-15",
        "type": "Mutation Dispute Objection",
        "details": "Objection petition filed under ROR Act \u00a75",
        "status": "Active"
      },
      {
        "date": "2020-02-18",
        "type": "Primary Agriculture Co-op Loan",
        "details": "Crop loan hypothecation of \u20b91,80,000",
        "status": "Active"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            79.4317858,
            18.1130379
          ],
          [
            79.4317877,
            18.1130371
          ],
          [
            79.431855,
            18.1130104
          ],
          [
            79.4319853,
            18.1129587
          ],
          [
            79.4322537,
            18.112827
          ],
          [
            79.4323636,
            18.1127731
          ],
          [
            79.4324606,
            18.1127155
          ],
          [
            79.4325427,
            18.1126667
          ],
          [
            79.4324969,
            18.1125265
          ],
          [
            79.4324233,
            18.1120826
          ],
          [
            79.4323499,
            18.1119154
          ],
          [
            79.4321879,
            18.1119036
          ],
          [
            79.4308065,
            18.1118597
          ],
          [
            79.4306658,
            18.1118422
          ],
          [
            79.4305153,
            18.1119428
          ],
          [
            79.4297391,
            18.1125493
          ],
          [
            79.4294907,
            18.1127434
          ],
          [
            79.4291772,
            18.1129884
          ],
          [
            79.4290868,
            18.1130641
          ],
          [
            79.4292503,
            18.1133646
          ],
          [
            79.4293346,
            18.1135274
          ],
          [
            79.4294467,
            18.1137904
          ],
          [
            79.429503,
            18.1139225
          ],
          [
            79.429563,
            18.1139236
          ],
          [
            79.4297416,
            18.1138302
          ],
          [
            79.4297892,
            18.1138116
          ],
          [
            79.4298872,
            18.1137734
          ],
          [
            79.4315865,
            18.1131108
          ],
          [
            79.4317858,
            18.1130379
          ]
        ]
      ]
    },
    "displayId": "14-5179-0012-2026",
    "surveyNumber": "TS-WAR-ELK-879",
    "trustScore": 58,
    "trustGrade": "C",
    "location": {
      "state": "Telangana",
      "district": "Warangal_Urban",
      "mandal": "Elkathurthi",
      "village": "Elkathurthi"
    },
    "owner": {
      "name": "Srinivas Goud",
      "maskedName": "S***s G***d",
      "type": "Individual Freehold (Succession Contested)"
    },
    "area": {
      "ror": 48062.6,
      "gis": 49264.2,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 57484.3
    },
    "tax": {
      "status": "Overdue (3 Years Defaulter)",
      "lastPaid": "2023-01-15",
      "amount": "\u20b914,379"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-13",
    "ulpin": "14-1187-0013-2026",
    "state_survey_no": "TS-WAR-ELK-880",
    "survey_number": "TS-WAR-ELK-880",
    "state": "Telangana",
    "district": "Warangal_Urban",
    "mandal": "Elkathurthi",
    "village": "Elkathurthi",
    "census_code": "572690",
    "dmv_code": "2051005",
    "owner_name": "Laxmi Venkatesh",
    "owner_masked": "L***i V***h",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 40983.8,
    "gis_area_sqm": 40983.8,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "B",
    "trust_num": 88,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Ryotwari Freehold",
    "tax_status": "Paid",
    "tax_amount": "\u20b910,387",
    "tax_last_paid": "2025-09-30",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved Patta / Dharani Integrated",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2022-08-14",
        "type": "Registered Dharani Patta Passbook",
        "details": "Dharani Digital Title Passbook #TS-WAR-ELK-880",
        "status": "Clean"
      },
      {
        "date": "2025-06-10",
        "type": "Land Revenue Clearance",
        "details": "Annual land revenue assessed and cleared",
        "status": "Cleared"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            79.4321635,
            18.1143673
          ],
          [
            79.4322406,
            18.1143318
          ],
          [
            79.4318936,
            18.1132525
          ],
          [
            79.4317858,
            18.1130379
          ],
          [
            79.4315865,
            18.1131108
          ],
          [
            79.4298872,
            18.1137734
          ],
          [
            79.4297892,
            18.1138116
          ],
          [
            79.4297416,
            18.1138302
          ],
          [
            79.429563,
            18.1139236
          ],
          [
            79.429503,
            18.1139225
          ],
          [
            79.4300005,
            18.1150903
          ],
          [
            79.4300947,
            18.1152137
          ],
          [
            79.4301373,
            18.1153192
          ],
          [
            79.4302704,
            18.1152647
          ],
          [
            79.4304776,
            18.1151461
          ],
          [
            79.430679,
            18.115053
          ],
          [
            79.4321635,
            18.1143673
          ]
        ]
      ]
    },
    "displayId": "14-1187-0013-2026",
    "surveyNumber": "TS-WAR-ELK-880",
    "trustScore": 88,
    "trustGrade": "B",
    "location": {
      "state": "Telangana",
      "district": "Warangal_Urban",
      "mandal": "Elkathurthi",
      "village": "Elkathurthi"
    },
    "owner": {
      "name": "Laxmi Venkatesh",
      "maskedName": "L***i V***h",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 40983.8,
      "gis": 40983.8,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 49017.8
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-09-30",
      "amount": "\u20b910,387"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-14",
    "ulpin": "14-5815-0014-2026",
    "state_survey_no": "TS-RAN-FAR-33",
    "survey_number": "TS-RAN-FAR-33",
    "state": "Telangana",
    "district": "Rangareddy",
    "mandal": "Farooqnagar",
    "village": "Nagulapalle",
    "census_code": "575179",
    "dmv_code": "1412005",
    "owner_name": "Prabhakar Narayana",
    "owner_masked": "P***r N***a",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 32685.4,
    "gis_area_sqm": 32685.4,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "A",
    "trust_num": 94,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Ryotwari Freehold",
    "tax_status": "Paid",
    "tax_amount": "\u20b96,015",
    "tax_last_paid": "2025-09-30",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved Patta / Dharani Integrated",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2022-08-14",
        "type": "Registered Dharani Patta Passbook",
        "details": "Dharani Digital Title Passbook #TS-RAN-FAR-33",
        "status": "Clean"
      },
      {
        "date": "2025-06-10",
        "type": "Land Revenue Clearance",
        "details": "Annual land revenue assessed and cleared",
        "status": "Cleared"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            78.2120047,
            17.1036067
          ],
          [
            78.2119449,
            17.1034851
          ],
          [
            78.2114956,
            17.1042482
          ],
          [
            78.2113501,
            17.1059758
          ],
          [
            78.2112404,
            17.1061303
          ],
          [
            78.2112333,
            17.1071158
          ],
          [
            78.2124685,
            17.1067785
          ],
          [
            78.2120047,
            17.1036067
          ]
        ]
      ]
    },
    "displayId": "14-5815-0014-2026",
    "surveyNumber": "TS-RAN-FAR-33",
    "trustScore": 94,
    "trustGrade": "A",
    "location": {
      "state": "Telangana",
      "district": "Rangareddy",
      "mandal": "Farooqnagar",
      "village": "Nagulapalle"
    },
    "owner": {
      "name": "Prabhakar Narayana",
      "maskedName": "P***r N***a",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 32685.4,
      "gis": 32685.4,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 39092.7
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-09-30",
      "amount": "\u20b96,015"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-15",
    "ulpin": "14-3162-0015-2026",
    "state_survey_no": "TS-RAN-FAR-34",
    "survey_number": "TS-RAN-FAR-34",
    "state": "Telangana",
    "district": "Rangareddy",
    "mandal": "Farooqnagar",
    "village": "Nagulapalle",
    "census_code": "575179",
    "dmv_code": "1412005",
    "owner_name": "Sudarshan Goud",
    "owner_masked": "S***n G***d",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 70651.0,
    "gis_area_sqm": 70651.0,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "B",
    "trust_num": 88,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Ryotwari Freehold",
    "tax_status": "Paid",
    "tax_amount": "\u20b99,362",
    "tax_last_paid": "2025-09-30",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved Patta / Dharani Integrated",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2022-08-14",
        "type": "Registered Dharani Patta Passbook",
        "details": "Dharani Digital Title Passbook #TS-RAN-FAR-34",
        "status": "Clean"
      },
      {
        "date": "2025-06-10",
        "type": "Land Revenue Clearance",
        "details": "Annual land revenue assessed and cleared",
        "status": "Cleared"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            78.2141376,
            17.1046907
          ],
          [
            78.2136124,
            17.103907
          ],
          [
            78.213496,
            17.1034904
          ],
          [
            78.2132109,
            17.1020445
          ],
          [
            78.2131281,
            17.1018801
          ],
          [
            78.212039,
            17.1033349
          ],
          [
            78.2119449,
            17.1034851
          ],
          [
            78.2120047,
            17.1036067
          ],
          [
            78.2124685,
            17.1067785
          ],
          [
            78.2133064,
            17.1065123
          ],
          [
            78.2140068,
            17.1048343
          ],
          [
            78.2141376,
            17.1046907
          ]
        ]
      ]
    },
    "displayId": "14-3162-0015-2026",
    "surveyNumber": "TS-RAN-FAR-34",
    "trustScore": 88,
    "trustGrade": "B",
    "location": {
      "state": "Telangana",
      "district": "Rangareddy",
      "mandal": "Farooqnagar",
      "village": "Nagulapalle"
    },
    "owner": {
      "name": "Sudarshan Goud",
      "maskedName": "S***n G***d",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 70651.0,
      "gis": 70651.0,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 84500.7
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-09-30",
      "amount": "\u20b99,362"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-16",
    "ulpin": "14-1100-0016-2026",
    "state_survey_no": "TS-RAN-FAR-35",
    "survey_number": "TS-RAN-FAR-35",
    "state": "Telangana",
    "district": "Rangareddy",
    "mandal": "Farooqnagar",
    "village": "Nagulapalle",
    "census_code": "575179",
    "dmv_code": "1412005",
    "owner_name": "Narasimha Venkatesh",
    "owner_masked": "N***a V***h",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 38144.2,
    "gis_area_sqm": 38144.2,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "A",
    "trust_num": 94,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Ryotwari Freehold",
    "tax_status": "Paid",
    "tax_amount": "\u20b913,300",
    "tax_last_paid": "2025-09-30",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved Patta / Dharani Integrated",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2022-08-14",
        "type": "Registered Dharani Patta Passbook",
        "details": "Dharani Digital Title Passbook #TS-RAN-FAR-35",
        "status": "Clean"
      },
      {
        "date": "2025-06-10",
        "type": "Land Revenue Clearance",
        "details": "Annual land revenue assessed and cleared",
        "status": "Cleared"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            78.2148264,
            17.1077492
          ],
          [
            78.2141376,
            17.1046907
          ],
          [
            78.2140068,
            17.1048343
          ],
          [
            78.2133064,
            17.1065123
          ],
          [
            78.2124685,
            17.1067785
          ],
          [
            78.2125914,
            17.1068716
          ],
          [
            78.2140061,
            17.1078768
          ],
          [
            78.2148264,
            17.1077492
          ]
        ]
      ]
    },
    "displayId": "14-1100-0016-2026",
    "surveyNumber": "TS-RAN-FAR-35",
    "trustScore": 94,
    "trustGrade": "A",
    "location": {
      "state": "Telangana",
      "district": "Rangareddy",
      "mandal": "Farooqnagar",
      "village": "Nagulapalle"
    },
    "owner": {
      "name": "Narasimha Venkatesh",
      "maskedName": "N***a V***h",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 38144.2,
      "gis": 38144.2,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 45621.6
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-09-30",
      "amount": "\u20b913,300"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-17",
    "ulpin": "14-4260-0017-2026",
    "state_survey_no": "TS-RAN-FAR-36",
    "survey_number": "TS-RAN-FAR-36",
    "state": "Telangana",
    "district": "Rangareddy",
    "mandal": "Farooqnagar",
    "village": "Nagulapalle",
    "census_code": "575179",
    "dmv_code": "1412005",
    "owner_name": "Kavitha Narayana",
    "owner_masked": "K***a N***a",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 73792.7,
    "gis_area_sqm": 73792.7,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "B",
    "trust_num": 88,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Ryotwari Freehold",
    "tax_status": "Paid",
    "tax_amount": "\u20b97,460",
    "tax_last_paid": "2025-09-30",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved Patta / Dharani Integrated",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2022-08-14",
        "type": "Registered Dharani Patta Passbook",
        "details": "Dharani Digital Title Passbook #TS-RAN-FAR-36",
        "status": "Clean"
      },
      {
        "date": "2025-06-10",
        "type": "Land Revenue Clearance",
        "details": "Annual land revenue assessed and cleared",
        "status": "Cleared"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            78.2152756,
            17.1097236
          ],
          [
            78.2148264,
            17.1077492
          ],
          [
            78.2140061,
            17.1078768
          ],
          [
            78.2125914,
            17.1068716
          ],
          [
            78.2124685,
            17.1067785
          ],
          [
            78.2122039,
            17.1098451
          ],
          [
            78.2152756,
            17.1097236
          ]
        ]
      ]
    },
    "displayId": "14-4260-0017-2026",
    "surveyNumber": "TS-RAN-FAR-36",
    "trustScore": 88,
    "trustGrade": "B",
    "location": {
      "state": "Telangana",
      "district": "Rangareddy",
      "mandal": "Farooqnagar",
      "village": "Nagulapalle"
    },
    "owner": {
      "name": "Kavitha Narayana",
      "maskedName": "K***a N***a",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 73792.7,
      "gis": 73792.7,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 88258.2
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-09-30",
      "amount": "\u20b97,460"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-18",
    "ulpin": "14-9883-0018-2026",
    "state_survey_no": "TS-RAN-FAR-37",
    "survey_number": "TS-RAN-FAR-37",
    "state": "Telangana",
    "district": "Rangareddy",
    "mandal": "Farooqnagar",
    "village": "Nagulapalle",
    "census_code": "575179",
    "dmv_code": "1412005",
    "owner_name": "Shankar Goud",
    "owner_masked": "S***r G***d",
    "owner_type": "Individual Freehold (Succession Contested)",
    "legal_ror_area_sqm": 28119.8,
    "gis_area_sqm": 28822.8,
    "area_diff_sqm": 703.0,
    "area_diff_pct": 2.5,
    "status": "WARNING",
    "trust_score": "C",
    "trust_num": 58,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Agricultural Freehold",
    "tax_status": "Overdue (3 Years Defaulter)",
    "tax_amount": "\u20b916,083",
    "tax_last_paid": "2023-01-15",
    "dispute_tag": "MUTATION_DISPUTE",
    "permit_status": "Agricultural Ryotwari",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [
      {
        "id": "V-018",
        "severity": "WARNING",
        "type": "MUTATION_CONTESTED",
        "description": "SUCCESSION DISPUTE: Contested mutation application filed before Tahsildar",
        "details": "Succession transfer challenged by legal heirs. Revenue record locked pending DRO inquiry.",
        "encroachment_area_sqm": 0.0
      }
    ],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2024-11-15",
        "type": "Mutation Dispute Objection",
        "details": "Objection petition filed under ROR Act \u00a75",
        "status": "Active"
      },
      {
        "date": "2020-02-18",
        "type": "Primary Agriculture Co-op Loan",
        "details": "Crop loan hypothecation of \u20b91,80,000",
        "status": "Active"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            78.2153934,
            17.1102388
          ],
          [
            78.2152756,
            17.1097236
          ],
          [
            78.2122039,
            17.1098451
          ],
          [
            78.2122329,
            17.1099413
          ],
          [
            78.2128679,
            17.1108717
          ],
          [
            78.2131749,
            17.1108401
          ],
          [
            78.2131904,
            17.1108385
          ],
          [
            78.213266,
            17.1108179
          ],
          [
            78.2153934,
            17.1102388
          ]
        ]
      ]
    },
    "displayId": "14-9883-0018-2026",
    "surveyNumber": "TS-RAN-FAR-37",
    "trustScore": 58,
    "trustGrade": "C",
    "location": {
      "state": "Telangana",
      "district": "Rangareddy",
      "mandal": "Farooqnagar",
      "village": "Nagulapalle"
    },
    "owner": {
      "name": "Shankar Goud",
      "maskedName": "S***r G***d",
      "type": "Individual Freehold (Succession Contested)"
    },
    "area": {
      "ror": 28119.8,
      "gis": 28822.8,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 33632.1
    },
    "tax": {
      "status": "Overdue (3 Years Defaulter)",
      "lastPaid": "2023-01-15",
      "amount": "\u20b916,083"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-19",
    "ulpin": "14-6373-0019-2026",
    "state_survey_no": "TS-RAN-FAR-38",
    "survey_number": "TS-RAN-FAR-38",
    "state": "Telangana",
    "district": "Rangareddy",
    "mandal": "Farooqnagar",
    "village": "Nagulapalle",
    "census_code": "575179",
    "dmv_code": "1412005",
    "owner_name": "Yadagiri Venkatesh",
    "owner_masked": "Y***i V***h",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 47311.5,
    "gis_area_sqm": 47311.5,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "B",
    "trust_num": 88,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Ryotwari Freehold",
    "tax_status": "Paid",
    "tax_amount": "\u20b99,573",
    "tax_last_paid": "2025-09-30",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved Patta / Dharani Integrated",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2022-08-14",
        "type": "Registered Dharani Patta Passbook",
        "details": "Dharani Digital Title Passbook #TS-RAN-FAR-38",
        "status": "Clean"
      },
      {
        "date": "2025-06-10",
        "type": "Land Revenue Clearance",
        "details": "Annual land revenue assessed and cleared",
        "status": "Cleared"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            78.2154005,
            17.1102368
          ],
          [
            78.2155559,
            17.110188
          ],
          [
            78.2161553,
            17.109848
          ],
          [
            78.2168359,
            17.1094619
          ],
          [
            78.2170025,
            17.1093684
          ],
          [
            78.2170431,
            17.1093159
          ],
          [
            78.2170731,
            17.109277
          ],
          [
            78.2171551,
            17.109197
          ],
          [
            78.2166909,
            17.1079952
          ],
          [
            78.2165355,
            17.1075931
          ],
          [
            78.2148264,
            17.1077492
          ],
          [
            78.2152756,
            17.1097236
          ],
          [
            78.2153934,
            17.1102388
          ],
          [
            78.2154005,
            17.1102368
          ]
        ]
      ]
    },
    "displayId": "14-6373-0019-2026",
    "surveyNumber": "TS-RAN-FAR-38",
    "trustScore": 88,
    "trustGrade": "B",
    "location": {
      "state": "Telangana",
      "district": "Rangareddy",
      "mandal": "Farooqnagar",
      "village": "Nagulapalle"
    },
    "owner": {
      "name": "Yadagiri Venkatesh",
      "maskedName": "Y***i V***h",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 47311.5,
      "gis": 47311.5,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 56585.9
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-09-30",
      "amount": "\u20b99,573"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-20",
    "ulpin": "14-2526-0020-2026",
    "state_survey_no": "TS-NAL-KAN-107",
    "survey_number": "TS-NAL-KAN-107",
    "state": "Telangana",
    "district": "Nalgonda",
    "mandal": "Kanagal",
    "village": "Parvathagiril",
    "census_code": "577315",
    "dmv_code": "2339010",
    "owner_name": "Venkatesh Narayana",
    "owner_masked": "V***h N***a",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 30457.0,
    "gis_area_sqm": 30457.0,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "A",
    "trust_num": 94,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Ryotwari Freehold",
    "tax_status": "Paid",
    "tax_amount": "\u20b92,726",
    "tax_last_paid": "2025-09-30",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved Patta / Dharani Integrated",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2022-08-14",
        "type": "Registered Dharani Patta Passbook",
        "details": "Dharani Digital Title Passbook #TS-NAL-KAN-107",
        "status": "Clean"
      },
      {
        "date": "2025-06-10",
        "type": "Land Revenue Clearance",
        "details": "Annual land revenue assessed and cleared",
        "status": "Cleared"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            79.2090745,
            17.0055173
          ],
          [
            79.2085873,
            17.0038591
          ],
          [
            79.2071669,
            17.0039407
          ],
          [
            79.2073921,
            17.0044959
          ],
          [
            79.2080505,
            17.0061188
          ],
          [
            79.2084717,
            17.0058714
          ],
          [
            79.2090745,
            17.0055173
          ]
        ]
      ]
    },
    "displayId": "14-2526-0020-2026",
    "surveyNumber": "TS-NAL-KAN-107",
    "trustScore": 94,
    "trustGrade": "A",
    "location": {
      "state": "Telangana",
      "district": "Nalgonda",
      "mandal": "Kanagal",
      "village": "Parvathagiril"
    },
    "owner": {
      "name": "Venkatesh Narayana",
      "maskedName": "V***h N***a",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 30457.0,
      "gis": 30457.0,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 36427.5
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-09-30",
      "amount": "\u20b92,726"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-21",
    "ulpin": "14-6888-0021-2026",
    "state_survey_no": "TS-NAL-KAN-108",
    "survey_number": "TS-NAL-KAN-108",
    "state": "Telangana",
    "district": "Nalgonda",
    "mandal": "Kanagal",
    "village": "Parvathagiril",
    "census_code": "577315",
    "dmv_code": "2339010",
    "owner_name": "Mallaiah Goud",
    "owner_masked": "M***h G***d",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 18008.9,
    "gis_area_sqm": 18008.9,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "B",
    "trust_num": 88,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Ryotwari Freehold",
    "tax_status": "Paid",
    "tax_amount": "\u20b916,088",
    "tax_last_paid": "2025-09-30",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved Patta / Dharani Integrated",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2022-08-14",
        "type": "Registered Dharani Patta Passbook",
        "details": "Dharani Digital Title Passbook #TS-NAL-KAN-108",
        "status": "Clean"
      },
      {
        "date": "2025-06-10",
        "type": "Land Revenue Clearance",
        "details": "Annual land revenue assessed and cleared",
        "status": "Cleared"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            79.2098146,
            17.0054258
          ],
          [
            79.2097497,
            17.0042376
          ],
          [
            79.2092962,
            17.0043189
          ],
          [
            79.2090532,
            17.0031922
          ],
          [
            79.2085873,
            17.0038591
          ],
          [
            79.2090745,
            17.0055173
          ],
          [
            79.2098146,
            17.0054258
          ]
        ]
      ]
    },
    "displayId": "14-6888-0021-2026",
    "surveyNumber": "TS-NAL-KAN-108",
    "trustScore": 88,
    "trustGrade": "B",
    "location": {
      "state": "Telangana",
      "district": "Nalgonda",
      "mandal": "Kanagal",
      "village": "Parvathagiril"
    },
    "owner": {
      "name": "Mallaiah Goud",
      "maskedName": "M***h G***d",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 18008.9,
      "gis": 18008.9,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 21539.2
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-09-30",
      "amount": "\u20b916,088"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-22",
    "ulpin": "14-2759-0022-2026",
    "state_survey_no": "TS-NAL-KAN-109",
    "survey_number": "TS-NAL-KAN-109",
    "state": "Telangana",
    "district": "Nalgonda",
    "mandal": "Kanagal",
    "village": "Parvathagiril",
    "census_code": "577315",
    "dmv_code": "2339010",
    "owner_name": "Srinivas Venkatesh",
    "owner_masked": "S***s V***h",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 20922.3,
    "gis_area_sqm": 20922.3,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "A",
    "trust_num": 94,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Ryotwari Freehold",
    "tax_status": "Paid",
    "tax_amount": "\u20b98,959",
    "tax_last_paid": "2025-09-30",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved Patta / Dharani Integrated",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2022-08-14",
        "type": "Registered Dharani Patta Passbook",
        "details": "Dharani Digital Title Passbook #TS-NAL-KAN-109",
        "status": "Clean"
      },
      {
        "date": "2025-06-10",
        "type": "Land Revenue Clearance",
        "details": "Annual land revenue assessed and cleared",
        "status": "Cleared"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            79.210225,
            17.0036124
          ],
          [
            79.21022,
            17.003442
          ],
          [
            79.2102178,
            17.003442
          ],
          [
            79.2101967,
            17.0033251
          ],
          [
            79.2101922,
            17.0032999
          ],
          [
            79.2101767,
            17.0031967
          ],
          [
            79.2101735,
            17.0031754
          ],
          [
            79.2101557,
            17.0030575
          ],
          [
            79.2101406,
            17.002957
          ],
          [
            79.2101355,
            17.0029232
          ],
          [
            79.2101323,
            17.0029019
          ],
          [
            79.2101173,
            17.0028245
          ],
          [
            79.2101034,
            17.0027522
          ],
          [
            79.2100854,
            17.0026592
          ],
          [
            79.2100819,
            17.0026413
          ],
          [
            79.2102188,
            17.0026428
          ],
          [
            79.2101578,
            17.0024259
          ],
          [
            79.2093663,
            17.0025916
          ],
          [
            79.2092203,
            17.0026469
          ],
          [
            79.2090532,
            17.0031922
          ],
          [
            79.2092962,
            17.0043189
          ],
          [
            79.2097497,
            17.0042376
          ],
          [
            79.2098993,
            17.0042088
          ],
          [
            79.2101539,
            17.0041395
          ],
          [
            79.2102635,
            17.0041105
          ],
          [
            79.2102773,
            17.0039603
          ],
          [
            79.210225,
            17.0036124
          ]
        ]
      ]
    },
    "displayId": "14-2759-0022-2026",
    "surveyNumber": "TS-NAL-KAN-109",
    "trustScore": 94,
    "trustGrade": "A",
    "location": {
      "state": "Telangana",
      "district": "Nalgonda",
      "mandal": "Kanagal",
      "village": "Parvathagiril"
    },
    "owner": {
      "name": "Srinivas Venkatesh",
      "maskedName": "S***s V***h",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 20922.3,
      "gis": 20922.3,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 25023.7
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-09-30",
      "amount": "\u20b98,959"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-23",
    "ulpin": "14-8264-0023-2026",
    "state_survey_no": "TS-NAL-KAN-106",
    "survey_number": "TS-NAL-KAN-106",
    "state": "Telangana",
    "district": "Nalgonda",
    "mandal": "Kanagal",
    "village": "Parvathagiril",
    "census_code": "577315",
    "dmv_code": "2339010",
    "owner_name": "Laxmi Narayana",
    "owner_masked": "L***i N***a",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 35649.6,
    "gis_area_sqm": 35649.6,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "B",
    "trust_num": 88,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Ryotwari Freehold",
    "tax_status": "Paid",
    "tax_amount": "\u20b914,464",
    "tax_last_paid": "2025-09-30",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved Patta / Dharani Integrated",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2022-08-14",
        "type": "Registered Dharani Patta Passbook",
        "details": "Dharani Digital Title Passbook #TS-NAL-KAN-106",
        "status": "Clean"
      },
      {
        "date": "2025-06-10",
        "type": "Land Revenue Clearance",
        "details": "Annual land revenue assessed and cleared",
        "status": "Cleared"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            79.2081181,
            17.0015002
          ],
          [
            79.2081024,
            17.0013654
          ],
          [
            79.2068041,
            17.0016883
          ],
          [
            79.2073597,
            17.0030763
          ],
          [
            79.2074336,
            17.0032627
          ],
          [
            79.2073333,
            17.0032799
          ],
          [
            79.2069594,
            17.0034192
          ],
          [
            79.2071669,
            17.0039407
          ],
          [
            79.2085873,
            17.0038591
          ],
          [
            79.2081181,
            17.0015002
          ]
        ]
      ]
    },
    "displayId": "14-8264-0023-2026",
    "surveyNumber": "TS-NAL-KAN-106",
    "trustScore": 88,
    "trustGrade": "B",
    "location": {
      "state": "Telangana",
      "district": "Nalgonda",
      "mandal": "Kanagal",
      "village": "Parvathagiril"
    },
    "owner": {
      "name": "Laxmi Narayana",
      "maskedName": "L***i N***a",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 35649.6,
      "gis": 35649.6,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 42638.0
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-09-30",
      "amount": "\u20b914,464"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-24",
    "ulpin": "14-2903-0024-2026",
    "state_survey_no": "TS-NAL-KAN-105",
    "survey_number": "TS-NAL-KAN-105",
    "state": "Telangana",
    "district": "Nalgonda",
    "mandal": "Kanagal",
    "village": "Parvathagiril",
    "census_code": "577315",
    "dmv_code": "2339010",
    "owner_name": "Prabhakar Goud",
    "owner_masked": "P***r G***d",
    "owner_type": "Individual Freehold (Succession Contested)",
    "legal_ror_area_sqm": 32683.1,
    "gis_area_sqm": 33500.2,
    "area_diff_sqm": 817.1,
    "area_diff_pct": 2.5,
    "status": "WARNING",
    "trust_score": "C",
    "trust_num": 58,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Agricultural Freehold",
    "tax_status": "Overdue (3 Years Defaulter)",
    "tax_amount": "\u20b99,103",
    "tax_last_paid": "2023-01-15",
    "dispute_tag": "MUTATION_DISPUTE",
    "permit_status": "Agricultural Ryotwari",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [
      {
        "id": "V-024",
        "severity": "WARNING",
        "type": "MUTATION_CONTESTED",
        "description": "SUCCESSION DISPUTE: Contested mutation application filed before Tahsildar",
        "details": "Succession transfer challenged by legal heirs. Revenue record locked pending DRO inquiry.",
        "encroachment_area_sqm": 0.0
      }
    ],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2024-11-15",
        "type": "Mutation Dispute Objection",
        "details": "Objection petition filed under ROR Act \u00a75",
        "status": "Active"
      },
      {
        "date": "2020-02-18",
        "type": "Primary Agriculture Co-op Loan",
        "details": "Crop loan hypothecation of \u20b91,80,000",
        "status": "Active"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            79.2096161,
            17.0009932
          ],
          [
            79.209616,
            17.0009928
          ],
          [
            79.209616,
            17.0009928
          ],
          [
            79.2081024,
            17.0013654
          ],
          [
            79.2081181,
            17.0015002
          ],
          [
            79.2085873,
            17.0038591
          ],
          [
            79.2090532,
            17.0031922
          ],
          [
            79.2092203,
            17.0026469
          ],
          [
            79.2093663,
            17.0025916
          ],
          [
            79.2101578,
            17.0024259
          ],
          [
            79.2101006,
            17.0022619
          ],
          [
            79.2100976,
            17.0022532
          ],
          [
            79.2099818,
            17.0021877
          ],
          [
            79.2099113,
            17.0021478
          ],
          [
            79.2098168,
            17.0020943
          ],
          [
            79.2095571,
            17.0020786
          ],
          [
            79.2094998,
            17.0019243
          ],
          [
            79.2095484,
            17.0019242
          ],
          [
            79.2096709,
            17.0019241
          ],
          [
            79.2096122,
            17.0018271
          ],
          [
            79.2095116,
            17.0016611
          ],
          [
            79.2094852,
            17.001562
          ],
          [
            79.2094466,
            17.0013449
          ],
          [
            79.2095676,
            17.0013438
          ],
          [
            79.209625,
            17.0013433
          ],
          [
            79.2096637,
            17.0013429
          ],
          [
            79.2096161,
            17.0009932
          ]
        ]
      ]
    },
    "displayId": "14-2903-0024-2026",
    "surveyNumber": "TS-NAL-KAN-105",
    "trustScore": 58,
    "trustGrade": "C",
    "location": {
      "state": "Telangana",
      "district": "Nalgonda",
      "mandal": "Kanagal",
      "village": "Parvathagiril"
    },
    "owner": {
      "name": "Prabhakar Goud",
      "maskedName": "P***r G***d",
      "type": "Individual Freehold (Succession Contested)"
    },
    "area": {
      "ror": 32683.1,
      "gis": 33500.2,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 39089.9
    },
    "tax": {
      "status": "Overdue (3 Years Defaulter)",
      "lastPaid": "2023-01-15",
      "amount": "\u20b99,103"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-25",
    "ulpin": "14-3572-0025-2026",
    "state_survey_no": "TS-SAN-AME-453",
    "survey_number": "TS-SAN-AME-453",
    "state": "Telangana",
    "district": "Sangareddy",
    "mandal": "Ameenpur",
    "village": "Sultanpur",
    "census_code": "573930",
    "dmv_code": "1737006",
    "owner_name": "Sudarshan Venkatesh",
    "owner_masked": "S***n V***h",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 19754.8,
    "gis_area_sqm": 19754.8,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "B",
    "trust_num": 88,
    "zoning": "Residential Zone R2",
    "classification": "Plotted Residential Freehold",
    "tax_status": "Paid",
    "tax_amount": "\u20b93,772",
    "tax_last_paid": "2025-09-30",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved Patta / Dharani Integrated",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2022-08-14",
        "type": "Registered Dharani Patta Passbook",
        "details": "Dharani Digital Title Passbook #TS-SAN-AME-453",
        "status": "Clean"
      },
      {
        "date": "2025-06-10",
        "type": "Land Revenue Clearance",
        "details": "Annual land revenue assessed and cleared",
        "status": "Cleared"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            78.3264361,
            17.5486605
          ],
          [
            78.3263458,
            17.5485393
          ],
          [
            78.3262224,
            17.5484006
          ],
          [
            78.3260757,
            17.5482836
          ],
          [
            78.3259027,
            17.5482551
          ],
          [
            78.3256621,
            17.5482185
          ],
          [
            78.3254785,
            17.5481884
          ],
          [
            78.3252891,
            17.5481159
          ],
          [
            78.3250726,
            17.5480006
          ],
          [
            78.324486,
            17.5479841
          ],
          [
            78.3240435,
            17.5479747
          ],
          [
            78.3239063,
            17.5479559
          ],
          [
            78.3240458,
            17.548062
          ],
          [
            78.3244264,
            17.5483414
          ],
          [
            78.3246997,
            17.5486207
          ],
          [
            78.3249701,
            17.5489624
          ],
          [
            78.3251412,
            17.5493092
          ],
          [
            78.3251879,
            17.549468
          ],
          [
            78.3253291,
            17.5493798
          ],
          [
            78.3263017,
            17.548731
          ],
          [
            78.3264361,
            17.5486605
          ]
        ]
      ]
    },
    "displayId": "14-3572-0025-2026",
    "surveyNumber": "TS-SAN-AME-453",
    "trustScore": 88,
    "trustGrade": "B",
    "location": {
      "state": "Telangana",
      "district": "Sangareddy",
      "mandal": "Ameenpur",
      "village": "Sultanpur"
    },
    "owner": {
      "name": "Sudarshan Venkatesh",
      "maskedName": "S***n V***h",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 19754.8,
      "gis": 19754.8,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 23627.3
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-09-30",
      "amount": "\u20b93,772"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-26",
    "ulpin": "14-2467-0026-2026",
    "state_survey_no": "TS-SAN-AME-454",
    "survey_number": "TS-SAN-AME-454",
    "state": "Telangana",
    "district": "Sangareddy",
    "mandal": "Ameenpur",
    "village": "Sultanpur",
    "census_code": "573930",
    "dmv_code": "1737006",
    "owner_name": "Narasimha Narayana",
    "owner_masked": "N***a N***a",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 20931.4,
    "gis_area_sqm": 20931.4,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "A",
    "trust_num": 94,
    "zoning": "Residential Zone R2",
    "classification": "Plotted Residential Freehold",
    "tax_status": "Paid",
    "tax_amount": "\u20b92,667",
    "tax_last_paid": "2025-09-30",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved Patta / Dharani Integrated",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2022-08-14",
        "type": "Registered Dharani Patta Passbook",
        "details": "Dharani Digital Title Passbook #TS-SAN-AME-454",
        "status": "Clean"
      },
      {
        "date": "2025-06-10",
        "type": "Land Revenue Clearance",
        "details": "Annual land revenue assessed and cleared",
        "status": "Cleared"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            78.3239063,
            17.5479559
          ],
          [
            78.3235785,
            17.5479245
          ],
          [
            78.3235368,
            17.5489554
          ],
          [
            78.3233289,
            17.5490957
          ],
          [
            78.3232284,
            17.54917
          ],
          [
            78.3232938,
            17.5493826
          ],
          [
            78.3234425,
            17.5493942
          ],
          [
            78.3239444,
            17.5494149
          ],
          [
            78.3250398,
            17.5494595
          ],
          [
            78.3251879,
            17.549468
          ],
          [
            78.3251412,
            17.5493092
          ],
          [
            78.3249701,
            17.5489624
          ],
          [
            78.3246997,
            17.5486207
          ],
          [
            78.3244264,
            17.5483414
          ],
          [
            78.3240458,
            17.548062
          ],
          [
            78.3239063,
            17.5479559
          ]
        ]
      ]
    },
    "displayId": "14-2467-0026-2026",
    "surveyNumber": "TS-SAN-AME-454",
    "trustScore": 94,
    "trustGrade": "A",
    "location": {
      "state": "Telangana",
      "district": "Sangareddy",
      "mandal": "Ameenpur",
      "village": "Sultanpur"
    },
    "owner": {
      "name": "Narasimha Narayana",
      "maskedName": "N***a N***a",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 20931.4,
      "gis": 20931.4,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 25034.6
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-09-30",
      "amount": "\u20b92,667"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-27",
    "ulpin": "14-8949-0027-2026",
    "state_survey_no": "TS-SAN-AME-455",
    "survey_number": "TS-SAN-AME-455",
    "state": "Telangana",
    "district": "Sangareddy",
    "mandal": "Ameenpur",
    "village": "Sultanpur",
    "census_code": "573930",
    "dmv_code": "1737006",
    "owner_name": "Kavitha Goud",
    "owner_masked": "K***a G***d",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 39500.7,
    "gis_area_sqm": 39500.7,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "B",
    "trust_num": 88,
    "zoning": "Residential Zone R2",
    "classification": "Plotted Residential Freehold",
    "tax_status": "Paid",
    "tax_amount": "\u20b915,149",
    "tax_last_paid": "2025-09-30",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved Patta / Dharani Integrated",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2022-08-14",
        "type": "Registered Dharani Patta Passbook",
        "details": "Dharani Digital Title Passbook #TS-SAN-AME-455",
        "status": "Clean"
      },
      {
        "date": "2025-06-10",
        "type": "Land Revenue Clearance",
        "details": "Annual land revenue assessed and cleared",
        "status": "Cleared"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            78.3234425,
            17.5493942
          ],
          [
            78.3232938,
            17.5493826
          ],
          [
            78.3231988,
            17.5494631
          ],
          [
            78.3221515,
            17.5505417
          ],
          [
            78.3220797,
            17.550668
          ],
          [
            78.3221789,
            17.5506793
          ],
          [
            78.323091,
            17.5507131
          ],
          [
            78.3250273,
            17.5507848
          ],
          [
            78.3251545,
            17.5507833
          ],
          [
            78.3251601,
            17.5506272
          ],
          [
            78.3251673,
            17.5503715
          ],
          [
            78.3251876,
            17.5496517
          ],
          [
            78.3251879,
            17.549468
          ],
          [
            78.3250398,
            17.5494595
          ],
          [
            78.3239444,
            17.5494149
          ],
          [
            78.3234425,
            17.5493942
          ]
        ]
      ]
    },
    "displayId": "14-8949-0027-2026",
    "surveyNumber": "TS-SAN-AME-455",
    "trustScore": 88,
    "trustGrade": "B",
    "location": {
      "state": "Telangana",
      "district": "Sangareddy",
      "mandal": "Ameenpur",
      "village": "Sultanpur"
    },
    "owner": {
      "name": "Kavitha Goud",
      "maskedName": "K***a G***d",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 39500.7,
      "gis": 39500.7,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 47244.0
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-09-30",
      "amount": "\u20b915,149"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-28",
    "ulpin": "14-8829-0028-2026",
    "state_survey_no": "TS-SAN-AME-456",
    "survey_number": "TS-SAN-AME-456",
    "state": "Telangana",
    "district": "Sangareddy",
    "mandal": "Ameenpur",
    "village": "Sultanpur",
    "census_code": "573930",
    "dmv_code": "1737006",
    "owner_name": "Shankar Venkatesh",
    "owner_masked": "S***r V***h",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 56915.7,
    "gis_area_sqm": 56915.7,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "A",
    "trust_num": 94,
    "zoning": "Residential Zone R2",
    "classification": "Plotted Residential Freehold",
    "tax_status": "Paid",
    "tax_amount": "\u20b912,029",
    "tax_last_paid": "2025-09-30",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved Patta / Dharani Integrated",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2022-08-14",
        "type": "Registered Dharani Patta Passbook",
        "details": "Dharani Digital Title Passbook #TS-SAN-AME-456",
        "status": "Clean"
      },
      {
        "date": "2025-06-10",
        "type": "Land Revenue Clearance",
        "details": "Annual land revenue assessed and cleared",
        "status": "Cleared"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            78.3229888,
            17.5524245
          ],
          [
            78.3236897,
            17.5520825
          ],
          [
            78.3239393,
            17.5522417
          ],
          [
            78.3243454,
            17.5520996
          ],
          [
            78.3244848,
            17.5520961
          ],
          [
            78.3245583,
            17.5519656
          ],
          [
            78.3251117,
            17.5509055
          ],
          [
            78.3251545,
            17.5507833
          ],
          [
            78.3250273,
            17.5507848
          ],
          [
            78.323091,
            17.5507131
          ],
          [
            78.3221789,
            17.5506793
          ],
          [
            78.3220797,
            17.550668
          ],
          [
            78.3219873,
            17.5507844
          ],
          [
            78.3217181,
            17.5512808
          ],
          [
            78.3217848,
            17.5513606
          ],
          [
            78.3217634,
            17.5516129
          ],
          [
            78.3217306,
            17.5517142
          ],
          [
            78.3216258,
            17.551763
          ],
          [
            78.321762,
            17.551839
          ],
          [
            78.3223197,
            17.5527791
          ],
          [
            78.3224007,
            17.5529153
          ],
          [
            78.3224861,
            17.5528557
          ],
          [
            78.3229888,
            17.5524245
          ]
        ]
      ]
    },
    "displayId": "14-8829-0028-2026",
    "surveyNumber": "TS-SAN-AME-456",
    "trustScore": 94,
    "trustGrade": "A",
    "location": {
      "state": "Telangana",
      "district": "Sangareddy",
      "mandal": "Ameenpur",
      "village": "Sultanpur"
    },
    "owner": {
      "name": "Shankar Venkatesh",
      "maskedName": "S***r V***h",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 56915.7,
      "gis": 56915.7,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 68072.8
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-09-30",
      "amount": "\u20b912,029"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-29",
    "ulpin": "14-9167-0029-2026",
    "state_survey_no": "TS-SAN-AME-451",
    "survey_number": "TS-SAN-AME-451",
    "state": "Telangana",
    "district": "Sangareddy",
    "mandal": "Ameenpur",
    "village": "Sultanpur",
    "census_code": "573930",
    "dmv_code": "1737006",
    "owner_name": "Yadagiri Narayana",
    "owner_masked": "Y***i N***a",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 16978.7,
    "gis_area_sqm": 16978.7,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "B",
    "trust_num": 88,
    "zoning": "Residential Zone R2",
    "classification": "Plotted Residential Freehold",
    "tax_status": "Paid",
    "tax_amount": "\u20b99,367",
    "tax_last_paid": "2025-09-30",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved Patta / Dharani Integrated",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2022-08-14",
        "type": "Registered Dharani Patta Passbook",
        "details": "Dharani Digital Title Passbook #TS-SAN-AME-451",
        "status": "Clean"
      },
      {
        "date": "2025-06-10",
        "type": "Land Revenue Clearance",
        "details": "Annual land revenue assessed and cleared",
        "status": "Cleared"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            78.3275055,
            17.5471812
          ],
          [
            78.3282088,
            17.5466535
          ],
          [
            78.3279661,
            17.5466267
          ],
          [
            78.3270514,
            17.5465726
          ],
          [
            78.326963,
            17.5465674
          ],
          [
            78.3263615,
            17.5465319
          ],
          [
            78.3263198,
            17.5466062
          ],
          [
            78.3262067,
            17.5466035
          ],
          [
            78.3254963,
            17.5469178
          ],
          [
            78.3253648,
            17.5469638
          ],
          [
            78.3255186,
            17.5470612
          ],
          [
            78.3259292,
            17.5472866
          ],
          [
            78.3260565,
            17.547374
          ],
          [
            78.326255,
            17.5473323
          ],
          [
            78.3273437,
            17.5471853
          ],
          [
            78.3275055,
            17.5471812
          ]
        ]
      ]
    },
    "displayId": "14-9167-0029-2026",
    "surveyNumber": "TS-SAN-AME-451",
    "trustScore": 88,
    "trustGrade": "B",
    "location": {
      "state": "Telangana",
      "district": "Sangareddy",
      "mandal": "Ameenpur",
      "village": "Sultanpur"
    },
    "owner": {
      "name": "Yadagiri Narayana",
      "maskedName": "Y***i N***a",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 16978.7,
      "gis": 16978.7,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 20307.0
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-09-30",
      "amount": "\u20b99,367"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-30",
    "ulpin": "14-6770-0030-2026",
    "state_survey_no": "TS-SAN-AME-452",
    "survey_number": "TS-SAN-AME-452",
    "state": "Telangana",
    "district": "Sangareddy",
    "mandal": "Ameenpur",
    "village": "Sultanpur",
    "census_code": "573930",
    "dmv_code": "1737006",
    "owner_name": "Venkatesh Goud",
    "owner_masked": "V***h G***d",
    "owner_type": "Individual Freehold (Succession Contested)",
    "legal_ror_area_sqm": 14063.9,
    "gis_area_sqm": 14415.5,
    "area_diff_sqm": 351.6,
    "area_diff_pct": 2.5,
    "status": "WARNING",
    "trust_score": "C",
    "trust_num": 58,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Agricultural Freehold",
    "tax_status": "Overdue (3 Years Defaulter)",
    "tax_amount": "\u20b912,970",
    "tax_last_paid": "2023-01-15",
    "dispute_tag": "MUTATION_DISPUTE",
    "permit_status": "Agricultural Ryotwari",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [
      {
        "id": "V-030",
        "severity": "WARNING",
        "type": "MUTATION_CONTESTED",
        "description": "SUCCESSION DISPUTE: Contested mutation application filed before Tahsildar",
        "details": "Succession transfer challenged by legal heirs. Revenue record locked pending DRO inquiry.",
        "encroachment_area_sqm": 0.0
      }
    ],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2024-11-15",
        "type": "Mutation Dispute Objection",
        "details": "Objection petition filed under ROR Act \u00a75",
        "status": "Active"
      },
      {
        "date": "2020-02-18",
        "type": "Primary Agriculture Co-op Loan",
        "details": "Crop loan hypothecation of \u20b91,80,000",
        "status": "Active"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            78.3255186,
            17.5470612
          ],
          [
            78.3253648,
            17.5469638
          ],
          [
            78.3252133,
            17.5470225
          ],
          [
            78.324789,
            17.5472319
          ],
          [
            78.3246589,
            17.5472877
          ],
          [
            78.3247615,
            17.5474013
          ],
          [
            78.3253292,
            17.5480623
          ],
          [
            78.3254785,
            17.5481884
          ],
          [
            78.3256621,
            17.5482185
          ],
          [
            78.3259027,
            17.5482551
          ],
          [
            78.3260757,
            17.5482836
          ],
          [
            78.326134,
            17.548183
          ],
          [
            78.3261724,
            17.5479855
          ],
          [
            78.3261646,
            17.5478721
          ],
          [
            78.3261343,
            17.5477511
          ],
          [
            78.3260858,
            17.5474802
          ],
          [
            78.3260565,
            17.547374
          ],
          [
            78.3259292,
            17.5472866
          ],
          [
            78.3255186,
            17.5470612
          ]
        ]
      ]
    },
    "displayId": "14-6770-0030-2026",
    "surveyNumber": "TS-SAN-AME-452",
    "trustScore": 58,
    "trustGrade": "C",
    "location": {
      "state": "Telangana",
      "district": "Sangareddy",
      "mandal": "Ameenpur",
      "village": "Sultanpur"
    },
    "owner": {
      "name": "Venkatesh Goud",
      "maskedName": "V***h G***d",
      "type": "Individual Freehold (Succession Contested)"
    },
    "area": {
      "ror": 14063.9,
      "gis": 14415.5,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 16820.8
    },
    "tax": {
      "status": "Overdue (3 Years Defaulter)",
      "lastPaid": "2023-01-15",
      "amount": "\u20b912,970"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-31",
    "ulpin": "14-2501-0031-2026",
    "state_survey_no": "TS-SAN-AME-458/Kunta",
    "survey_number": "TS-SAN-AME-458/Kunta",
    "state": "Telangana",
    "district": "Sangareddy",
    "mandal": "Ameenpur",
    "village": "Sultanpur",
    "census_code": "573930",
    "dmv_code": "1737006",
    "owner_name": "Mallaiah Venkatesh",
    "owner_masked": "M***h V***h",
    "owner_type": "Government Custody / Contested Encroachment",
    "legal_ror_area_sqm": 44655.0,
    "gis_area_sqm": 46441.2,
    "area_diff_sqm": 1786.2,
    "area_diff_pct": 4.0,
    "status": "CRITICAL",
    "trust_score": "F",
    "trust_num": 12,
    "zoning": "Waterbody Tank Bed (Kunta Poramboke)",
    "classification": "Waterbody / Government Poramboke",
    "tax_status": "Not Applicable (Govt Commons)",
    "tax_amount": "\u20b914,701",
    "tax_last_paid": "2023-01-15",
    "dispute_tag": "CRITICAL_WATERBODY_ENCROACHMENT",
    "permit_status": "Prohibited / Unsanctioned",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Unauthorized Structure",
        "height": 4.5,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [
      {
        "id": "V-031",
        "severity": "CRITICAL",
        "type": "WATERBODY_ENCROACHMENT",
        "description": "CRITICAL: Village Irrigation Kunta tank bed encroachment",
        "details": "Survey #458/Kunta is recorded as government Kunta in revenue Sethwar. Unsanctioned fencing detected by survey team.",
        "encroachment_area_sqm": 15629.2
      }
    ],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2024-03-10",
        "type": "Revenue Tahsildar Notice",
        "details": "Eviction Notice under Land Encroachment Act \u00a76",
        "status": "Active"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            78.3253648,
            17.5469638
          ],
          [
            78.3254963,
            17.5469178
          ],
          [
            78.3262067,
            17.5466035
          ],
          [
            78.3263198,
            17.5466062
          ],
          [
            78.3263615,
            17.5465319
          ],
          [
            78.3237483,
            17.5463776
          ],
          [
            78.3223958,
            17.5471267
          ],
          [
            78.322186,
            17.5474572
          ],
          [
            78.3235785,
            17.5479245
          ],
          [
            78.3239063,
            17.5479559
          ],
          [
            78.3240435,
            17.5479747
          ],
          [
            78.324486,
            17.5479841
          ],
          [
            78.3250726,
            17.5480006
          ],
          [
            78.3252891,
            17.5481159
          ],
          [
            78.3254785,
            17.5481884
          ],
          [
            78.3253292,
            17.5480623
          ],
          [
            78.3247615,
            17.5474013
          ],
          [
            78.3246589,
            17.5472877
          ],
          [
            78.324789,
            17.5472319
          ],
          [
            78.3252133,
            17.5470225
          ],
          [
            78.3253648,
            17.5469638
          ]
        ]
      ]
    },
    "displayId": "14-2501-0031-2026",
    "surveyNumber": "TS-SAN-AME-458/Kunta",
    "trustScore": 12,
    "trustGrade": "F",
    "location": {
      "state": "Telangana",
      "district": "Sangareddy",
      "mandal": "Ameenpur",
      "village": "Sultanpur"
    },
    "owner": {
      "name": "Mallaiah Venkatesh",
      "maskedName": "M***h V***h",
      "type": "Government Custody / Contested Encroachment"
    },
    "area": {
      "ror": 44655.0,
      "gis": 46441.2,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 53408.7
    },
    "tax": {
      "status": "Not Applicable (Govt Commons)",
      "lastPaid": "2023-01-15",
      "amount": "\u20b914,701"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-32",
    "ulpin": "14-8084-0032-2026",
    "state_survey_no": "TS-SID-MUL-210",
    "survey_number": "TS-SID-MUL-210",
    "state": "Telangana",
    "district": "Siddipet",
    "mandal": "Mulug",
    "village": "Achaipally",
    "census_code": "573701",
    "dmv_code": "1745023",
    "owner_name": "Srinivas Narayana",
    "owner_masked": "S***s N***a",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 92209.2,
    "gis_area_sqm": 92209.2,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "A",
    "trust_num": 94,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Ryotwari Freehold",
    "tax_status": "Paid",
    "tax_amount": "\u20b98,284",
    "tax_last_paid": "2025-09-30",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved Patta / Dharani Integrated",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2022-08-14",
        "type": "Registered Dharani Patta Passbook",
        "details": "Dharani Digital Title Passbook #TS-SID-MUL-210",
        "status": "Clean"
      },
      {
        "date": "2025-06-10",
        "type": "Land Revenue Clearance",
        "details": "Annual land revenue assessed and cleared",
        "status": "Cleared"
      }
    ],
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
    "displayId": "14-8084-0032-2026",
    "surveyNumber": "TS-SID-MUL-210",
    "trustScore": 94,
    "trustGrade": "A",
    "location": {
      "state": "Telangana",
      "district": "Siddipet",
      "mandal": "Mulug",
      "village": "Achaipally"
    },
    "owner": {
      "name": "Srinivas Narayana",
      "maskedName": "S***s N***a",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 92209.2,
      "gis": 92209.2,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 110284.9
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-09-30",
      "amount": "\u20b98,284"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-33",
    "ulpin": "14-7799-0033-2026",
    "state_survey_no": "TS-SID-MUL-211/1",
    "survey_number": "TS-SID-MUL-211/1",
    "state": "Telangana",
    "district": "Siddipet",
    "mandal": "Mulug",
    "village": "Achaipally",
    "census_code": "573701",
    "dmv_code": "1745023",
    "owner_name": "Laxmi Goud",
    "owner_masked": "L***i G***d",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 523742.5,
    "gis_area_sqm": 523742.5,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "B",
    "trust_num": 88,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Ryotwari Freehold",
    "tax_status": "Paid",
    "tax_amount": "\u20b97,999",
    "tax_last_paid": "2025-09-30",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved Patta / Dharani Integrated",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2022-08-14",
        "type": "Registered Dharani Patta Passbook",
        "details": "Dharani Digital Title Passbook #TS-SID-MUL-211/1",
        "status": "Clean"
      },
      {
        "date": "2025-06-10",
        "type": "Land Revenue Clearance",
        "details": "Annual land revenue assessed and cleared",
        "status": "Cleared"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            78.5775272,
            17.704387
          ],
          [
            78.5768334,
            17.7046745
          ],
          [
            78.5767208,
            17.7045691
          ],
          [
            78.576754,
            17.7040498
          ],
          [
            78.576807,
            17.703961
          ],
          [
            78.5764956,
            17.7040227
          ],
          [
            78.5762755,
            17.7031899
          ],
          [
            78.5766338,
            17.7029142
          ],
          [
            78.5776606,
            17.7017931
          ],
          [
            78.5780827,
            17.7013761
          ],
          [
            78.5782064,
            17.7011489
          ],
          [
            78.5782558,
            17.7010966
          ],
          [
            78.5793695,
            17.69995
          ],
          [
            78.5807678,
            17.6982226
          ],
          [
            78.5811211,
            17.6981422
          ],
          [
            78.581427,
            17.6980783
          ],
          [
            78.5815332,
            17.6980427
          ],
          [
            78.5816194,
            17.6977797
          ],
          [
            78.5817187,
            17.6972728
          ],
          [
            78.5816192,
            17.697361
          ],
          [
            78.5816062,
            17.6973726
          ],
          [
            78.5812417,
            17.6976961
          ],
          [
            78.580482,
            17.6972712
          ],
          [
            78.5799139,
            17.6968429
          ],
          [
            78.5791781,
            17.6965934
          ],
          [
            78.5790428,
            17.697183
          ],
          [
            78.5788887,
            17.697705
          ],
          [
            78.5787325,
            17.6981232
          ],
          [
            78.578557,
            17.6985562
          ],
          [
            78.5778295,
            17.6983864
          ],
          [
            78.5772112,
            17.6980976
          ],
          [
            78.5772259,
            17.6977514
          ],
          [
            78.5764377,
            17.6976685
          ],
          [
            78.5762923,
            17.697677
          ],
          [
            78.5762236,
            17.6982272
          ],
          [
            78.5753092,
            17.6981021
          ],
          [
            78.5743948,
            17.6979922
          ],
          [
            78.5744594,
            17.6974649
          ],
          [
            78.5745515,
            17.6967948
          ],
          [
            78.5742626,
            17.6967815
          ],
          [
            78.5742704,
            17.6958684
          ],
          [
            78.5739183,
            17.69588
          ],
          [
            78.5734077,
            17.695931
          ],
          [
            78.5732427,
            17.6959444
          ],
          [
            78.5731522,
            17.6959561
          ],
          [
            78.5729021,
            17.6959682
          ],
          [
            78.572424,
            17.6959886
          ],
          [
            78.5718885,
            17.6960088
          ],
          [
            78.5717503,
            17.696017
          ],
          [
            78.5707795,
            17.6961517
          ],
          [
            78.5704665,
            17.6962211
          ],
          [
            78.5702717,
            17.6963636
          ],
          [
            78.5701656,
            17.696374
          ],
          [
            78.570061,
            17.6963878
          ],
          [
            78.5699019,
            17.6964097
          ],
          [
            78.5695942,
            17.6964511
          ],
          [
            78.5694984,
            17.696489
          ],
          [
            78.5695141,
            17.6992866
          ],
          [
            78.5700568,
            17.6992896
          ],
          [
            78.5698607,
            17.7001599
          ],
          [
            78.5701217,
            17.7000598
          ],
          [
            78.5701903,
            17.6994771
          ],
          [
            78.5705205,
            17.6992908
          ],
          [
            78.5709232,
            17.6990353
          ],
          [
            78.5711613,
            17.6997212
          ],
          [
            78.5714247,
            17.7005635
          ],
          [
            78.5707828,
            17.7006455
          ],
          [
            78.5703506,
            17.7008342
          ],
          [
            78.5697615,
            17.7011102
          ],
          [
            78.5696452,
            17.7002485
          ],
          [
            78.569507,
            17.7002661
          ],
          [
            78.5695035,
            17.7003846
          ],
          [
            78.5695218,
            17.7005893
          ],
          [
            78.5694517,
            17.7011929
          ],
          [
            78.5693833,
            17.7017034
          ],
          [
            78.57091,
            17.7023562
          ],
          [
            78.5721608,
            17.7019632
          ],
          [
            78.5725573,
            17.7031441
          ],
          [
            78.5726532,
            17.7031337
          ],
          [
            78.5729535,
            17.703022
          ],
          [
            78.5737418,
            17.7028099
          ],
          [
            78.5742312,
            17.7027194
          ],
          [
            78.5747993,
            17.7027879
          ],
          [
            78.5754536,
            17.70338
          ],
          [
            78.5761516,
            17.703344
          ],
          [
            78.5763962,
            17.7038023
          ],
          [
            78.5763068,
            17.7040205
          ],
          [
            78.5765314,
            17.7049395
          ],
          [
            78.5769894,
            17.705019
          ],
          [
            78.5775272,
            17.704387
          ]
        ]
      ]
    },
    "displayId": "14-7799-0033-2026",
    "surveyNumber": "TS-SID-MUL-211/1",
    "trustScore": 88,
    "trustGrade": "B",
    "location": {
      "state": "Telangana",
      "district": "Siddipet",
      "mandal": "Mulug",
      "village": "Achaipally"
    },
    "owner": {
      "name": "Laxmi Goud",
      "maskedName": "L***i G***d",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 523742.5,
      "gis": 523742.5,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 626411.3
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-09-30",
      "amount": "\u20b97,999"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-34",
    "ulpin": "14-1966-0034-2026",
    "state_survey_no": "TS-SID-MUL-212",
    "survey_number": "TS-SID-MUL-212",
    "state": "Telangana",
    "district": "Siddipet",
    "mandal": "Mulug",
    "village": "Achaipally",
    "census_code": "573701",
    "dmv_code": "1745023",
    "owner_name": "Prabhakar Venkatesh",
    "owner_masked": "P***r V***h",
    "owner_type": "Statutory Freehold",
    "legal_ror_area_sqm": 27320.1,
    "gis_area_sqm": 27320.1,
    "area_diff_sqm": 0.0,
    "area_diff_pct": 0.0,
    "status": "CLEAN",
    "trust_score": "A",
    "trust_num": 94,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Ryotwari Freehold",
    "tax_status": "Paid",
    "tax_amount": "\u20b92,166",
    "tax_last_paid": "2025-09-30",
    "dispute_tag": "CLEAN",
    "permit_status": "Approved Patta / Dharani Integrated",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2022-08-14",
        "type": "Registered Dharani Patta Passbook",
        "details": "Dharani Digital Title Passbook #TS-SID-MUL-212",
        "status": "Clean"
      },
      {
        "date": "2025-06-10",
        "type": "Land Revenue Clearance",
        "details": "Annual land revenue assessed and cleared",
        "status": "Cleared"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            78.5741763,
            17.7036015
          ],
          [
            78.5737418,
            17.7028099
          ],
          [
            78.5729535,
            17.703022
          ],
          [
            78.5726532,
            17.7031337
          ],
          [
            78.572938,
            17.7039475
          ],
          [
            78.5733127,
            17.7047401
          ],
          [
            78.5733796,
            17.7048128
          ],
          [
            78.5743295,
            17.7046442
          ],
          [
            78.5745112,
            17.7044976
          ],
          [
            78.5744803,
            17.7043186
          ],
          [
            78.5741763,
            17.7036015
          ]
        ]
      ]
    },
    "displayId": "14-1966-0034-2026",
    "surveyNumber": "TS-SID-MUL-212",
    "trustScore": 94,
    "trustGrade": "A",
    "location": {
      "state": "Telangana",
      "district": "Siddipet",
      "mandal": "Mulug",
      "village": "Achaipally"
    },
    "owner": {
      "name": "Prabhakar Venkatesh",
      "maskedName": "P***r V***h",
      "type": "Statutory Freehold"
    },
    "area": {
      "ror": 27320.1,
      "gis": 27320.1,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 32675.6
    },
    "tax": {
      "status": "Paid",
      "lastPaid": "2025-09-30",
      "amount": "\u20b92,166"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-35",
    "ulpin": "14-3797-0035-2026",
    "state_survey_no": "TS-SID-MUL-213",
    "survey_number": "TS-SID-MUL-213",
    "state": "Telangana",
    "district": "Siddipet",
    "mandal": "Mulug",
    "village": "Achaipally",
    "census_code": "573701",
    "dmv_code": "1745023",
    "owner_name": "Sudarshan Narayana",
    "owner_masked": "S***n N***a",
    "owner_type": "Contested Encroachment",
    "legal_ror_area_sqm": 27731.1,
    "gis_area_sqm": 29117.7,
    "area_diff_sqm": 1386.6,
    "area_diff_pct": 5.0,
    "status": "CRITICAL",
    "trust_score": "E",
    "trust_num": 22,
    "zoning": "Protected Forest Fringe / Govt Commons",
    "classification": "Government Assigned / Forest Buffer",
    "tax_status": "Defaulter / Disputed",
    "tax_amount": "\u20b912,997",
    "tax_last_paid": "2023-01-15",
    "dispute_tag": "CRITICAL_GOVT_LAND_ENCROACHMENT",
    "permit_status": "Unsanctioned Commercial Operation",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Unauthorized Structure",
        "height": 4.5,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [
      {
        "id": "V-035",
        "severity": "CRITICAL",
        "type": "GOVT_LAND_ENCROACHMENT",
        "description": "CRITICAL: Boundary extension into notified government land",
        "details": "GIS boundary extends 1386.6 m\u00b2 into contiguous government revenue land. Show-cause notice required.",
        "encroachment_area_sqm": 1386.6
      }
    ],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2025-02-01",
        "type": "Divisional Revenue Officer Notice",
        "details": "Section 7 Show-Cause Notice for unauthorized occupation",
        "status": "Active"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            78.5752341,
            17.7043069
          ],
          [
            78.5753311,
            17.7040765
          ],
          [
            78.5757852,
            17.7040738
          ],
          [
            78.5758754,
            17.7040076
          ],
          [
            78.5763068,
            17.7040205
          ],
          [
            78.5763962,
            17.7038023
          ],
          [
            78.5761516,
            17.703344
          ],
          [
            78.5754536,
            17.70338
          ],
          [
            78.5747993,
            17.7027879
          ],
          [
            78.5742312,
            17.7027194
          ],
          [
            78.5737418,
            17.7028099
          ],
          [
            78.5741763,
            17.7036015
          ],
          [
            78.5744803,
            17.7043186
          ],
          [
            78.5747627,
            17.7041695
          ],
          [
            78.5749442,
            17.7041917
          ],
          [
            78.5749791,
            17.7043698
          ],
          [
            78.5752341,
            17.7043069
          ]
        ]
      ]
    },
    "displayId": "14-3797-0035-2026",
    "surveyNumber": "TS-SID-MUL-213",
    "trustScore": 22,
    "trustGrade": "E",
    "location": {
      "state": "Telangana",
      "district": "Siddipet",
      "mandal": "Mulug",
      "village": "Achaipally"
    },
    "owner": {
      "name": "Sudarshan Narayana",
      "maskedName": "S***n N***a",
      "type": "Contested Encroachment"
    },
    "area": {
      "ror": 27731.1,
      "gis": 29117.7,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 33167.2
    },
    "tax": {
      "status": "Defaulter / Disputed",
      "lastPaid": "2023-01-15",
      "amount": "\u20b912,997"
    },
    "bufferZones": [],
    "buildingFootprint": null,
    "sanctionedFootprint": null
  },
  {
    "id": "parcel-36",
    "ulpin": "14-3481-0036-2026",
    "state_survey_no": "TS-SID-MUL-214",
    "survey_number": "TS-SID-MUL-214",
    "state": "Telangana",
    "district": "Siddipet",
    "mandal": "Mulug",
    "village": "Achaipally",
    "census_code": "573701",
    "dmv_code": "1745023",
    "owner_name": "Narasimha Goud",
    "owner_masked": "N***a G***d",
    "owner_type": "Individual Freehold (Succession Contested)",
    "legal_ror_area_sqm": 13546.1,
    "gis_area_sqm": 13884.8,
    "area_diff_sqm": 338.7,
    "area_diff_pct": 2.5,
    "status": "WARNING",
    "trust_score": "C",
    "trust_num": 58,
    "zoning": "Agricultural Zone AG-1",
    "classification": "Agricultural Freehold",
    "tax_status": "Overdue (3 Years Defaulter)",
    "tax_amount": "\u20b912,681",
    "tax_last_paid": "2023-01-15",
    "dispute_tag": "MUTATION_DISPUTE",
    "permit_status": "Agricultural Ryotwari",
    "building": {
      "sanctioned": null,
      "detected": {
        "type": "Agricultural / Farm Boundary",
        "height": 3.0,
        "floors": 1,
        "far": 0.0
      }
    },
    "violations": [
      {
        "id": "V-036",
        "severity": "WARNING",
        "type": "MUTATION_CONTESTED",
        "description": "SUCCESSION DISPUTE: Contested mutation application filed before Tahsildar",
        "details": "Succession transfer challenged by legal heirs. Revenue record locked pending DRO inquiry.",
        "encroachment_area_sqm": 0.0
      }
    ],
    "buffer_zones": [],
    "encumbrances": [
      {
        "date": "2024-11-15",
        "type": "Mutation Dispute Objection",
        "details": "Objection petition filed under ROR Act \u00a75",
        "status": "Active"
      },
      {
        "date": "2020-02-18",
        "type": "Primary Agriculture Co-op Loan",
        "details": "Crop loan hypothecation of \u20b91,80,000",
        "status": "Active"
      }
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            78.5763068,
            17.7040205
          ],
          [
            78.5758754,
            17.7040076
          ],
          [
            78.5757852,
            17.7040738
          ],
          [
            78.5753311,
            17.7040765
          ],
          [
            78.5752341,
            17.7043069
          ],
          [
            78.5749791,
            17.7043698
          ],
          [
            78.5755489,
            17.70517
          ],
          [
            78.5759553,
            17.7049378
          ],
          [
            78.5765314,
            17.7049395
          ],
          [
            78.5763068,
            17.7040205
          ]
        ]
      ]
    },
    "displayId": "14-3481-0036-2026",
    "surveyNumber": "TS-SID-MUL-214",
    "trustScore": 58,
    "trustGrade": "C",
    "location": {
      "state": "Telangana",
      "district": "Siddipet",
      "mandal": "Mulug",
      "village": "Achaipally"
    },
    "owner": {
      "name": "Narasimha Goud",
      "maskedName": "N***a G***d",
      "type": "Individual Freehold (Succession Contested)"
    },
    "area": {
      "ror": 13546.1,
      "gis": 13884.8,
      "regionalUnit": "SQ_YARD",
      "regionalValue": 16201.5
    },
    "tax": {
      "status": "Overdue (3 Years Defaulter)",
      "lastPaid": "2023-01-15",
      "amount": "\u20b912,681"
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
    getParcelBySurvey: function(survey) { return parcels.find(p => p.surveyNumber === survey || p.state_survey_no === survey) || null; },
    searchParcels: function(query) {
      if (!query) return [];
      const q = query.toLowerCase();
      return parcels.filter(p =>
        (p.id && p.id.toLowerCase().includes(q)) ||
        (p.ulpin && p.ulpin.toLowerCase().includes(q)) ||
        (p.state_survey_no && p.state_survey_no.toLowerCase().includes(q)) ||
        (p.surveyNumber && p.surveyNumber.toLowerCase().includes(q)) ||
        (p.owner_name && p.owner_name.toLowerCase().includes(q)) ||
        (p.owner_masked && p.owner_masked.toLowerCase().includes(q)) ||
        (p.village && p.village.toLowerCase().includes(q)) ||
        (p.mandal && p.mandal.toLowerCase().includes(q)) ||
        (p.district && p.district.toLowerCase().includes(q))
      );
    }
  };
})();
