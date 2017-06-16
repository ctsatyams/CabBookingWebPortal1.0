
var simple_chart_config2 = {
  chart: {
    container: "#tree-preview",
    node: {
      stackChildren: true,
      collapsable: true
    },
    connectors: {
      type: "step",
      style: {
        "stroke-width": 2,
        "arrow-end": "block-wide-midium",
        "stroke": "#797979"
      }
    },
    scrollbar: "fancy",
    rootOrientation: "NORTH",
    animation: {
      nodeAnimation: "jswing",
      nodeSpeed: 0,
      connectorsAnimation: "jswing",
      connectorsSpeed: 0
    }
  },
  nodeStructure:
  {
    "text": {
      "name": "1. Age >=18 at start of measurement period"
    },
    "collapsable": true,
    "children": [
      {
        "text": {
          "name": "True"
        },
        "collapsable": false,
        "children": [
          {
            "text": {
              "name": "2. Deceased (BY DOB) during measurement period"
            },
            "collapsable": true,
            "children": [
              {
                "text": {
                  "name": "False"
                },
                "collapsable": false,
                "children": [
                  {
                    "text": {
                      "name": "3. Deceased (BY DIPOSITION) during measurement period"
                    },
                    "collapsable": true,
                    "children": [
                      {
                        "text": {
                          "name": "False"
                        },
                        "collapsable": false,
                        "children": [
                          {
                            "text": {
                              "name": "4. Discharged to hospice during measurement period"
                            },
                            "collapsable": true,
                            "children": [
                              {
                                "text": {
                                  "name": "False"
                                },
                                "collapsable": false,
                                "children": [
                                  {
                                    "text": {
                                      "name": "5. Procedure during measurement period"
                                    },
                                    "collapsable": true,
                                    "children": [
                                      {
                                        "text": {
                                          "name": "False"
                                        },
                                        "collapsable": false,
                                        "children": [
                                          {
                                            "text": {
                                              "name": "6. Diagnosis during measurement period"
                                            },
                                            "collapsable": true,
                                            "children": [
                                              {
                                                "text": {
                                                  "name": "False"
                                                },
                                                "collapsable": false,
                                                "children": [
                                                  {
                                                    "text": {
                                                      "name": "7. Enrollment in HMO during measurement period"
                                                    },
                                                    "collapsable": true,
                                                    "children": [
                                                      {
                                                        "text": {
                                                          "name": "False"
                                                        },
                                                        "collapsable": false,
                                                        "children": [
                                                          {
                                                            "text": {
                                                              "name": "8. Enrollment in HMO during measurement period"
                                                            },
                                                            "collapsable": true,
                                                            "children": [
                                                              {
                                                                "text": {
                                                                  "name": "False"
                                                                },
                                                                "collapsable": false,
                                                                "children": [
                                                                  {
                                                                    "text": {
                                                                      "name": "9. Medical record (Procedure code not found)"
                                                                    },
                                                                    "collapsable": true,
                                                                    "children": [
                                                                      {
                                                                        "text": {
                                                                          "name": "True"
                                                                        },
                                                                        "collapsable": false,
                                                                        "children": [
                                                                          {
                                                                            "text": {
                                                                              "name": "13. Medical record during measurement period"
                                                                            },
                                                                            "collapsable": false,
                                                                            "children": [],
                                                                            "htmlclass": "node-condition"
                                                                          }
                                                                        ],
                                                                        "htmlclass": "true-condition"
                                                                      },
                                                                      {
                                                                        "text": {
                                                                          "name": "False"
                                                                        },
                                                                        "collapsable": false,
                                                                        "children": [
                                                                          {
                                                                            "text": {
                                                                              "name": "10. Medical record (Diagnosis code not found)"
                                                                            },
                                                                            "collapsable": true,
                                                                            "children": [
                                                                              {
                                                                                "text": {
                                                                                  "name": "True"
                                                                                },
                                                                                "collapsable": false,
                                                                                "children": [
                                                                                  {
                                                                                    "text": {
                                                                                      "name": "13. Medical record during measurement period"
                                                                                    },
                                                                                    "collapsable": false,
                                                                                    "children": [],
                                                                                    "htmlclass": "node-condition"
                                                                                  }
                                                                                ],
                                                                                "htmlclass": "true-condition"
                                                                              },
                                                                              {
                                                                                "text": {
                                                                                  "name": "False"
                                                                                },
                                                                                "collapsable": false,
                                                                                "children": [
                                                                                  {
                                                                                    "text": {
                                                                                      "name": "11. Medical record (Observation code not found)"
                                                                                    },
                                                                                    "collapsable": true,
                                                                                    "children": [
                                                                                      {
                                                                                        "text": {
                                                                                          "name": "True"
                                                                                        },
                                                                                        "collapsable": false,
                                                                                        "children": [
                                                                                          {
                                                                                            "text": {
                                                                                              "name": "13. Medical record during measurement period"
                                                                                            },
                                                                                            "collapsable": false,
                                                                                            "children": [],
                                                                                            "htmlclass": "node-condition"
                                                                                          }
                                                                                        ],
                                                                                        "htmlclass": "true-condition"
                                                                                      },
                                                                                      {
                                                                                        "text": {
                                                                                          "name": "False"
                                                                                        },
                                                                                        "collapsable": false,
                                                                                        "children": [
                                                                                          {
                                                                                            "text": {
                                                                                              "name": "12. Medical record (Medication code not found)"
                                                                                            },
                                                                                            "collapsable": true,
                                                                                            "children": [
                                                                                              {
                                                                                                "text": {
                                                                                                  "name": "True"
                                                                                                },
                                                                                                "collapsable": false,
                                                                                                "children": [
                                                                                                  {
                                                                                                    "text": {
                                                                                                      "name": "13. Medical record during measurement period"
                                                                                                    },
                                                                                                    "collapsable": true,
                                                                                                    "children": [
                                                                                                      {
                                                                                                        "text": {
                                                                                                          "name": "True"
                                                                                                        },
                                                                                                        "collapsable": false,
                                                                                                        "children": [
                                                                                                          {
                                                                                                            "text": {
                                                                                                              "name": "14. Encounter during measurement period"
                                                                                                            },
                                                                                                            "collapsable": true,
                                                                                                            "children": [
                                                                                                              {
                                                                                                                "text": {
                                                                                                                  "name": "True"
                                                                                                                },
                                                                                                                "collapsable": false,
                                                                                                                "children": [
                                                                                                                  {
                                                                                                                    "text": {
                                                                                                                      "name": "15. Most recent visit during measurement period"
                                                                                                                    },
                                                                                                                    "collapsable": true,
                                                                                                                    "children": [
                                                                                                                      {
                                                                                                                        "text": {
                                                                                                                          "name": "True"
                                                                                                                        },
                                                                                                                        "collapsable": false,
                                                                                                                        "children": [
                                                                                                                          {
                                                                                                                            "text": {
                                                                                                                              "name": "16. Pregnancy code during measurement period"
                                                                                                                            },
                                                                                                                            "collapsable": true,
                                                                                                                            "children": [
                                                                                                                              {
                                                                                                                                "text": {
                                                                                                                                  "name": "False"
                                                                                                                                },
                                                                                                                                "collapsable": false,
                                                                                                                                "children": [
                                                                                                                                  {
                                                                                                                                    "text": {
                                                                                                                                      "name": "17. Pragnancy code in history till 30/9/2015"
                                                                                                                                    },
                                                                                                                                    "collapsable": true,
                                                                                                                                    "children": [
                                                                                                                                      {
                                                                                                                                        "text": {
                                                                                                                                          "name": "False"
                                                                                                                                        },
                                                                                                                                        "collapsable": false,
                                                                                                                                        "children": [
                                                                                                                                          {
                                                                                                                                            "text": {
                                                                                                                                              "name": "18. Pragnancy code in history till 30/9/2015"
                                                                                                                                            },
                                                                                                                                            "collapsable": true,
                                                                                                                                            "children": [
                                                                                                                                              {
                                                                                                                                                "text": {
                                                                                                                                                  "name": "False"
                                                                                                                                                },
                                                                                                                                                "collapsable": false,
                                                                                                                                                "children": [
                                                                                                                                                  {
                                                                                                                                                    "text": {
                                                                                                                                                      "name": "19. Pragnancy code from 1/10/2015 till measurement period end"
                                                                                                                                                    },
                                                                                                                                                    "collapsable": true,
                                                                                                                                                    "children": [
                                                                                                                                                      {
                                                                                                                                                        "text": {
                                                                                                                                                          "name": "False"
                                                                                                                                                        },
                                                                                                                                                        "collapsable": false,
                                                                                                                                                        "children": [
                                                                                                                                                          {
                                                                                                                                                            "text": {
                                                                                                                                                              "name": "20. Pragnancy code from 1/10/2015 till measurement period end"
                                                                                                                                                            },
                                                                                                                                                            "collapsable": true,
                                                                                                                                                            "children": [
                                                                                                                                                              {
                                                                                                                                                                "text": {
                                                                                                                                                                  "name": "False"
                                                                                                                                                                },
                                                                                                                                                                "collapsable": false,
                                                                                                                                                                "children": [
                                                                                                                                                                  {
                                                                                                                                                                    "text": {
                                                                                                                                                                      "name": "21. ICD 9 Codes during most recent/last 6 months prior to visit"
                                                                                                                                                                    },
                                                                                                                                                                    "collapsable": true,
                                                                                                                                                                    "children": [
                                                                                                                                                                      {
                                                                                                                                                                        "text": {
                                                                                                                                                                          "name": "False"
                                                                                                                                                                        },
                                                                                                                                                                        "collapsable": false,
                                                                                                                                                                        "children": [
                                                                                                                                                                          {
                                                                                                                                                                            "text": {
                                                                                                                                                                              "name": "22. ICD 10 Codes during most recent/last 6 months prior to visit"
                                                                                                                                                                            },
                                                                                                                                                                            "collapsable": true,
                                                                                                                                                                            "children": [
                                                                                                                                                                              {
                                                                                                                                                                                "text": {
                                                                                                                                                                                  "name": "False"
                                                                                                                                                                                },
                                                                                                                                                                                "collapsable": false,
                                                                                                                                                                                "children": [
                                                                                                                                                                                  {
                                                                                                                                                                                    "text": {
                                                                                                                                                                                      "name": "23. SNOMED Codes during most recent/last 6 months prior to visit"
                                                                                                                                                                                    },
                                                                                                                                                                                    "collapsable": true,
                                                                                                                                                                                    "children": [
                                                                                                                                                                                      {
                                                                                                                                                                                        "text": {
                                                                                                                                                                                          "name": "False"
                                                                                                                                                                                        },
                                                                                                                                                                                        "collapsable": false,
                                                                                                                                                                                        "children": [
                                                                                                                                                                                          {
                                                                                                                                                                                            "text": {
                                                                                                                                                                                              "name": "24. SNOMED codes due to medical reason"
                                                                                                                                                                                            },
                                                                                                                                                                                            "collapsable": true,
                                                                                                                                                                                            "children": [
                                                                                                                                                                                              {
                                                                                                                                                                                                "text": {
                                                                                                                                                                                                  "name": "False"
                                                                                                                                                                                                },
                                                                                                                                                                                                "collapsable": false,
                                                                                                                                                                                                "children": [
                                                                                                                                                                                                  {
                                                                                                                                                                                                    "text": {
                                                                                                                                                                                                      "name": "25. SNOMED codes due to patient reason"
                                                                                                                                                                                                    },
                                                                                                                                                                                                    "collapsable": true,
                                                                                                                                                                                                    "children": [
                                                                                                                                                                                                      {
                                                                                                                                                                                                        "text": {
                                                                                                                                                                                                          "name": "False"
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "collapsable": false,
                                                                                                                                                                                                        "children": [
                                                                                                                                                                                                          {
                                                                                                                                                                                                            "text": {
                                                                                                                                                                                                              "name": "26. LOINC Codes within past 6 months/current visit"
                                                                                                                                                                                                            },
                                                                                                                                                                                                            "collapsable": true,
                                                                                                                                                                                                            "children": [
                                                                                                                                                                                                              {
                                                                                                                                                                                                                "text": {
                                                                                                                                                                                                                  "name": "True"
                                                                                                                                                                                                                },
                                                                                                                                                                                                                "collapsable": false,
                                                                                                                                                                                                                "children": [
                                                                                                                                                                                                                  {
                                                                                                                                                                                                                    "text": {
                                                                                                                                                                                                                      "name": "29. Age >=65 at start of measurement period"
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    "collapsable": false,
                                                                                                                                                                                                                    "children": [],
                                                                                                                                                                                                                    "htmlclass": "node-condition"
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                ],
                                                                                                                                                                                                                "htmlclass": "true-condition"
                                                                                                                                                                                                              },
                                                                                                                                                                                                              {
                                                                                                                                                                                                                "text": {
                                                                                                                                                                                                                  "name": "False"
                                                                                                                                                                                                                },
                                                                                                                                                                                                                "collapsable": false,
                                                                                                                                                                                                                "children": [
                                                                                                                                                                                                                  {
                                                                                                                                                                                                                    "text": {
                                                                                                                                                                                                                      "name": "27. SNOMED Codes within past 6 months/current visit"
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    "collapsable": true,
                                                                                                                                                                                                                    "children": [
                                                                                                                                                                                                                      {
                                                                                                                                                                                                                        "text": {
                                                                                                                                                                                                                          "name": "True"
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        "collapsable": false,
                                                                                                                                                                                                                        "children": [
                                                                                                                                                                                                                          {
                                                                                                                                                                                                                            "text": {
                                                                                                                                                                                                                              "name": "29. Age >=65 at start of measurement period"
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                            "collapsable": false,
                                                                                                                                                                                                                            "children": [],
                                                                                                                                                                                                                            "htmlclass": "node-condition"
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                        "htmlclass": "true-condition"
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                      {
                                                                                                                                                                                                                        "text": {
                                                                                                                                                                                                                          "name": "False"
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        "collapsable": false,
                                                                                                                                                                                                                        "children": [
                                                                                                                                                                                                                          {
                                                                                                                                                                                                                            "text": {
                                                                                                                                                                                                                              "name": "28. HCPCS Codes within past 6 months/current visit"
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                            "collapsable": true,
                                                                                                                                                                                                                            "children": [
                                                                                                                                                                                                                              {
                                                                                                                                                                                                                                "text": {
                                                                                                                                                                                                                                  "name": "True"
                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                "collapsable": false,
                                                                                                                                                                                                                                "children": [
                                                                                                                                                                                                                                  {
                                                                                                                                                                                                                                    "text": {
                                                                                                                                                                                                                                      "name": "29. Age >=65 at start of measurement period"
                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                    "collapsable": true,
                                                                                                                                                                                                                                    "children": [
                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                        "text": {
                                                                                                                                                                                                                                          "name": "True"
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        "collapsable": false,
                                                                                                                                                                                                                                        "children": [
                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                            "text": {
                                                                                                                                                                                                                                              "name": "30. BMI < 30 within the past 6 months/current visit"
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                            "collapsable": true,
                                                                                                                                                                                                                                            "children": [
                                                                                                                                                                                                                                              {
                                                                                                                                                                                                                                                "text": {
                                                                                                                                                                                                                                                  "name": "True"
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                "collapsable": false,
                                                                                                                                                                                                                                                "children": [
                                                                                                                                                                                                                                                  {
                                                                                                                                                                                                                                                    "text": {
                                                                                                                                                                                                                                                      "name": "32. BMI >= 23 within the past 6 months/current visit"
                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                    "collapsable": true,
                                                                                                                                                                                                                                                    "children": [
                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                        "text": {
                                                                                                                                                                                                                                                          "name": "False"
                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                        "collapsable": false,
                                                                                                                                                                                                                                                        "children": [
                                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                                            "text": {
                                                                                                                                                                                                                                                              "name": "38. Documented RxNorm codes for weight gain"
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                            "collapsable": false,
                                                                                                                                                                                                                                                            "children": [],
                                                                                                                                                                                                                                                            "htmlclass": "node-condition"
                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                                        "htmlclass": "false-condition"
                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                    "htmlclass": "node-condition"
                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                                "htmlclass": "true-condition"
                                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                              {
                                                                                                                                                                                                                                                "text": {
                                                                                                                                                                                                                                                  "name": "False"
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                "collapsable": false,
                                                                                                                                                                                                                                                "children": [
                                                                                                                                                                                                                                                  {
                                                                                                                                                                                                                                                    "text": {
                                                                                                                                                                                                                                                      "name": "31. BMI >= 30 within the past 6 months/current visit"
                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                    "collapsable": true,
                                                                                                                                                                                                                                                    "children": [
                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                        "text": {
                                                                                                                                                                                                                                                          "name": "True"
                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                        "collapsable": false,
                                                                                                                                                                                                                                                        "children": [
                                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                                            "text": {
                                                                                                                                                                                                                                                              "name": "36. Documented RxNorm codes for weight loss"
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                            "collapsable": false,
                                                                                                                                                                                                                                                            "children": [],
                                                                                                                                                                                                                                                            "htmlclass": "node-condition"
                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                                        "htmlclass": "true-condition"
                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                    "htmlclass": "node-condition"
                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                                "htmlclass": "false-condition"
                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                                            "htmlclass": "node-condition"
                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                        "htmlclass": "true-condition"
                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                        "text": {
                                                                                                                                                                                                                                          "name": "False"
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        "collapsable": false,
                                                                                                                                                                                                                                        "children": [
                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                            "text": {
                                                                                                                                                                                                                                              "name": "33.  Age 18-64 years with BMI < 25"
                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                            "collapsable": true,
                                                                                                                                                                                                                                            "children": [
                                                                                                                                                                                                                                              {
                                                                                                                                                                                                                                                "text": {
                                                                                                                                                                                                                                                  "name": "True"
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                "collapsable": false,
                                                                                                                                                                                                                                                "children": [
                                                                                                                                                                                                                                                  {
                                                                                                                                                                                                                                                    "text": {
                                                                                                                                                                                                                                                      "name": "35. Age18-64 years with BMI >=18.5"
                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                    "collapsable": true,
                                                                                                                                                                                                                                                    "children": [
                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                        "text": {
                                                                                                                                                                                                                                                          "name": "False"
                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                        "collapsable": false,
                                                                                                                                                                                                                                                        "children": [
                                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                                            "text": {
                                                                                                                                                                                                                                                              "name": "38. Documented RxNorm codes for weight gain"
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                            "collapsable": true,
                                                                                                                                                                                                                                                            "children": [
                                                                                                                                                                                                                                                              {
                                                                                                                                                                                                                                                                "text": {
                                                                                                                                                                                                                                                                  "name": "False"
                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                "collapsable": false,
                                                                                                                                                                                                                                                                "children": [
                                                                                                                                                                                                                                                                  {
                                                                                                                                                                                                                                                                    "text": {
                                                                                                                                                                                                                                                                      "name": "39. Documented HCPCS codes for follow-up plan"
                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                    "collapsable": true,
                                                                                                                                                                                                                                                                    "children": [
                                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                                        "text": {
                                                                                                                                                                                                                                                                          "name": "False"
                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                        "collapsable": false,
                                                                                                                                                                                                                                                                        "children": [
                                                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                                                            "text": {
                                                                                                                                                                                                                                                                              "name": "40. Documented ICD9 codes for follow-up plan"
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            "collapsable": true,
                                                                                                                                                                                                                                                                            "children": [
                                                                                                                                                                                                                                                                              {
                                                                                                                                                                                                                                                                                "text": {
                                                                                                                                                                                                                                                                                  "name": "False"
                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                "collapsable": false,
                                                                                                                                                                                                                                                                                "children": [
                                                                                                                                                                                                                                                                                  {
                                                                                                                                                                                                                                                                                    "text": {
                                                                                                                                                                                                                                                                                      "name": "41. Documented ICD10 codes for follow-up plan"
                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                    "collapsable": true,
                                                                                                                                                                                                                                                                                    "children": [
                                                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                                                        "text": {
                                                                                                                                                                                                                                                                                          "name": "False"
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        "collapsable": false,
                                                                                                                                                                                                                                                                                        "children": [
                                                                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                                                                            "text": {
                                                                                                                                                                                                                                                                                              "name": "42. Documented SNOMED or CPT4 or HCPCS codes for follow-up plan"
                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                            "collapsable": false,
                                                                                                                                                                                                                                                                                            "children": [],
                                                                                                                                                                                                                                                                                            "htmlclass": "node-condition"
                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                                                                        "htmlclass": "false-condition"
                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                                                    "htmlclass": "node-condition"
                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                                                                "htmlclass": "false-condition"
                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                                                                            "htmlclass": "node-condition"
                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                                                        "htmlclass": "false-condition"
                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                                    "htmlclass": "node-condition"
                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                                                "htmlclass": "false-condition"
                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                                                            "htmlclass": "node-condition"
                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                                        "htmlclass": "false-condition"
                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                    "htmlclass": "node-condition"
                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                                "htmlclass": "true-condition"
                                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                              {
                                                                                                                                                                                                                                                "text": {
                                                                                                                                                                                                                                                  "name": "False"
                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                "collapsable": false,
                                                                                                                                                                                                                                                "children": [
                                                                                                                                                                                                                                                  {
                                                                                                                                                                                                                                                    "text": {
                                                                                                                                                                                                                                                      "name": "34. Age 18-64 years with BMI >= 25"
                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                    "collapsable": true,
                                                                                                                                                                                                                                                    "children": [
                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                        "text": {
                                                                                                                                                                                                                                                          "name": "True"
                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                        "collapsable": false,
                                                                                                                                                                                                                                                        "children": [
                                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                                            "text": {
                                                                                                                                                                                                                                                              "name": "36. Documented RxNorm codes for weight loss"
                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                            "collapsable": true,
                                                                                                                                                                                                                                                            "children": [
                                                                                                                                                                                                                                                              {
                                                                                                                                                                                                                                                                "text": {
                                                                                                                                                                                                                                                                  "name": "False"
                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                "collapsable": false,
                                                                                                                                                                                                                                                                "children": [
                                                                                                                                                                                                                                                                  {
                                                                                                                                                                                                                                                                    "text": {
                                                                                                                                                                                                                                                                      "name": "37. Documented HCPCS codes for follow-up plan"
                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                    "collapsable": true,
                                                                                                                                                                                                                                                                    "children": [
                                                                                                                                                                                                                                                                      {
                                                                                                                                                                                                                                                                        "text": {
                                                                                                                                                                                                                                                                          "name": "False"
                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                        "collapsable": false,
                                                                                                                                                                                                                                                                        "children": [
                                                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                                                            "text": {
                                                                                                                                                                                                                                                                              "name": "40. Documented ICD9 codes for follow-up plan"
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            "collapsable": false,
                                                                                                                                                                                                                                                                            "children": [],
                                                                                                                                                                                                                                                                            "htmlclass": "node-condition"
                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                                                        "htmlclass": "false-condition"
                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                                    "htmlclass": "node-condition"
                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                                                "htmlclass": "false-condition"
                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                                                            "htmlclass": "node-condition"
                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                                        "htmlclass": "true-condition"
                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                    "htmlclass": "node-condition"
                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                                "htmlclass": "false-condition"
                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                                            "htmlclass": "node-condition"
                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                        "htmlclass": "false-condition"
                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                    "htmlclass": "node-condition"
                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                "htmlclass": "true-condition"
                                                                                                                                                                                                                              }
                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                            "htmlclass": "node-condition"
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                        "htmlclass": "false-condition"
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                    "htmlclass": "node-condition"
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                ],
                                                                                                                                                                                                                "htmlclass": "false-condition"
                                                                                                                                                                                                              }
                                                                                                                                                                                                            ],
                                                                                                                                                                                                            "htmlclass": "node-condition"
                                                                                                                                                                                                          }
                                                                                                                                                                                                        ],
                                                                                                                                                                                                        "htmlclass": "false-condition"
                                                                                                                                                                                                      }
                                                                                                                                                                                                    ],
                                                                                                                                                                                                    "htmlclass": "node-condition"
                                                                                                                                                                                                  }
                                                                                                                                                                                                ],
                                                                                                                                                                                                "htmlclass": "false-condition"
                                                                                                                                                                                              }
                                                                                                                                                                                            ],
                                                                                                                                                                                            "htmlclass": "node-condition"
                                                                                                                                                                                          }
                                                                                                                                                                                        ],
                                                                                                                                                                                        "htmlclass": "false-condition"
                                                                                                                                                                                      }
                                                                                                                                                                                    ],
                                                                                                                                                                                    "htmlclass": "node-condition"
                                                                                                                                                                                  }
                                                                                                                                                                                ],
                                                                                                                                                                                "htmlclass": "false-condition"
                                                                                                                                                                              }
                                                                                                                                                                            ],
                                                                                                                                                                            "htmlclass": "node-condition"
                                                                                                                                                                          }
                                                                                                                                                                        ],
                                                                                                                                                                        "htmlclass": "false-condition"
                                                                                                                                                                      }
                                                                                                                                                                    ],
                                                                                                                                                                    "htmlclass": "node-condition"
                                                                                                                                                                  }
                                                                                                                                                                ],
                                                                                                                                                                "htmlclass": "false-condition"
                                                                                                                                                              }
                                                                                                                                                            ],
                                                                                                                                                            "htmlclass": "node-condition"
                                                                                                                                                          }
                                                                                                                                                        ],
                                                                                                                                                        "htmlclass": "false-condition"
                                                                                                                                                      }
                                                                                                                                                    ],
                                                                                                                                                    "htmlclass": "node-condition"
                                                                                                                                                  }
                                                                                                                                                ],
                                                                                                                                                "htmlclass": "false-condition"
                                                                                                                                              }
                                                                                                                                            ],
                                                                                                                                            "htmlclass": "node-condition"
                                                                                                                                          }
                                                                                                                                        ],
                                                                                                                                        "htmlclass": "false-condition"
                                                                                                                                      }
                                                                                                                                    ],
                                                                                                                                    "htmlclass": "node-condition"
                                                                                                                                  }
                                                                                                                                ],
                                                                                                                                "htmlclass": "false-condition"
                                                                                                                              }
                                                                                                                            ],
                                                                                                                            "htmlclass": "node-condition"
                                                                                                                          }
                                                                                                                        ],
                                                                                                                        "htmlclass": "true-condition"
                                                                                                                      }
                                                                                                                    ],
                                                                                                                    "htmlclass": "node-condition"
                                                                                                                  }
                                                                                                                ],
                                                                                                                "htmlclass": "true-condition"
                                                                                                              }
                                                                                                            ],
                                                                                                            "htmlclass": "node-condition"
                                                                                                          }
                                                                                                        ],
                                                                                                        "htmlclass": "true-condition"
                                                                                                      }
                                                                                                    ],
                                                                                                    "htmlclass": "node-condition"
                                                                                                  }
                                                                                                ],
                                                                                                "htmlclass": "true-condition"
                                                                                              }
                                                                                            ],
                                                                                            "htmlclass": "node-condition"
                                                                                          }
                                                                                        ],
                                                                                        "htmlclass": "false-condition"
                                                                                      }
                                                                                    ],
                                                                                    "htmlclass": "node-condition"
                                                                                  }
                                                                                ],
                                                                                "htmlclass": "false-condition"
                                                                              }
                                                                            ],
                                                                            "htmlclass": "node-condition"
                                                                          }
                                                                        ],
                                                                        "htmlclass": "false-condition"
                                                                      }
                                                                    ],
                                                                    "htmlclass": "node-condition"
                                                                  }
                                                                ],
                                                                "htmlclass": "false-condition"
                                                              }
                                                            ],
                                                            "htmlclass": "node-condition"
                                                          }
                                                        ],
                                                        "htmlclass": "false-condition"
                                                      }
                                                    ],
                                                    "htmlclass": "node-condition"
                                                  }
                                                ],
                                                "htmlclass": "false-condition"
                                              }
                                            ],
                                            "htmlclass": "node-condition"
                                          }
                                        ],
                                        "htmlclass": "false-condition"
                                      }
                                    ],
                                    "htmlclass": "node-condition"
                                  }
                                ],
                                "htmlclass": "false-condition"
                              }
                            ],
                            "htmlclass": "node-condition"
                          }
                        ],
                        "htmlclass": "false-condition"
                      }
                    ],
                    "htmlclass": "node-condition"
                  }
                ],
                "htmlclass": "false-condition"
              }
            ],
            "htmlclass": "node-condition"
          }
        ],
        "htmlclass": "true-condition"
      }
    ],
    "htmlclass": "node-condition"
  }

};