const c = {
  text: "mdi-text-short",
  textarea: "mdi-text",
  integer: "mdi-numeric-1-box-outline",
  number: "mdi-numeric-1-box-multiple-outline",
  boolean: "mdi-checkbox-marked-outline",
  date: "mdi-calendar",
  select: "mdi-playlist-check",
  multiselect: "mdi-playlist-check",
  "user-input": "mdi-account",
  "multi-user-input": "mdi-account-multiple",
  file: "mdi-file",
  switch: "mdi-toggle-switch",
  array: "mdi-format-list-bulleted-square",
  group: "mdi-crop-free",
  object: "mdi-view-module",
  objectGroup: "mdi-select-group",
  arrayObject: "mdi-view-list",
  markdown: "mdi-image-text",
  time: "mdi-clock-outline",
  optionalContainer: "mdi-border-none-variant",
  optionalContentItem: "mdi-border-none",
  const: "mdi-crosshairs-gps"
}, y = "mdi-text-short", x = "mdi-crop-free", m = {
  group: "mdi-crop-free",
  optionalContainer: "mdi-border-none-variant"
}, f = {
  type: "object",
  "x-display": "tabs",
  "x-props": {
    grow: !0
  },
  "x-options": {
    childrenClass: "pr-5 pl-0"
  },
  allOf: [
    {
      title: "Allgemein",
      description: "Ich bin eine Beschreibung, welche als Absatz am Anfang eines Abschnitts angezeigt wird.",
      type: "object",
      properties: {
        containerType: {
          type: "string",
          title: "Type",
          "x-display": "hidden",
          readOnly: !0
        },
        key: {
          type: "string",
          title: "Key",
          "x-display": "hidden",
          readOnly: !0
        },
        title: {
          type: "string",
          title: "Titel",
          "x-props": {
            outlined: !0,
            dense: !0
          },
          "x-rules": [
            "required"
          ]
        },
        description: {
          type: "string",
          title: "Beschreibung",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      title: "Optionen",
      description: "Ich bin eine Beschreibung, welche als Absatz am Anfang eines Abschnitts angezeigt wird.",
      type: "object",
      properties: {
        "x-options": {
          type: "object",
          properties: {
            childrenClass: {
              type: "string",
              title: "CSS Klassen f\xFCr Kindelemente",
              "x-props": {
                outlined: !0,
                dense: !0
              },
              "x-rules": [
                "required"
              ],
              "x-options": {
                fieldColProps: {
                  cols: 12,
                  sm: 6
                }
              }
            }
          },
          "x-props": {
            type: "object",
            description: "Ui",
            properties: {
              dense: {
                type: "boolean",
                title: "Dense",
                "x-props": {
                  outlined: !0,
                  dense: !0
                },
                "x-options": {
                  fieldColProps: {
                    cols: 12,
                    sm: 6
                  }
                }
              },
              outlined: {
                type: "boolean",
                title: "Outlined",
                "x-props": {
                  outlined: !0,
                  dense: !0
                },
                "x-options": {
                  fieldColProps: {
                    cols: 12,
                    sm: 6
                  }
                }
              }
            }
          }
        }
      }
    }
  ]
}, g = {
  type: "object",
  "x-display": "tabs",
  "x-props": {
    grow: !0
  },
  "x-options": {
    childrenClass: "pr-5 pl-0"
  },
  allOf: [
    {
      title: "General",
      type: "object",
      "x-options": {
        removeAdditionalProperties: !1
      },
      properties: {
        type: {
          const: "object"
        },
        key: {
          type: "string",
          title: "Key",
          "x-props": {
            outlined: !0,
            dense: !0
          },
          "x-rules": [
            "required"
          ]
        },
        containerType: {
          type: "string",
          "x-display": "hidden",
          title: "Type",
          readOnly: !0
        },
        fieldType: {
          type: "string",
          "x-display": "hidden",
          title: "Type",
          readOnly: !0
        },
        title: {
          type: "string",
          title: "Titel",
          "x-props": {
            outlined: !0,
            dense: !0
          },
          "x-rules": [
            "required"
          ]
        },
        description: {
          type: "string",
          title: "Description",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        },
        readOnly: {
          type: "boolean",
          title: "Readonly",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      title: "Options",
      type: "object",
      properties: {
        "x-options": {
          type: "object",
          properties: {
            sectionsTitlesClasses: {
              type: "array",
              title: "CSS classes for Section titels",
              items: {
                type: "string"
              },
              "x-props": {
                outlined: !0
              },
              "x-rules": [
                "required"
              ],
              "x-options": {
                fieldColProps: {
                  cols: 12,
                  sm: 6
                }
              }
            }
          }
        },
        "x-props": {
          type: "object",
          description: "Ui",
          properties: {
            dense: {
              type: "boolean",
              title: "Dense",
              default: !0,
              "x-props": {
                outlined: !0,
                dense: !0
              },
              "x-options": {
                fieldColProps: {
                  cols: 12,
                  sm: 6
                }
              }
            },
            outlined: {
              type: "boolean",
              title: "Outlined",
              default: !0,
              "x-props": {
                outlined: !0,
                dense: !0
              },
              "x-options": {
                fieldColProps: {
                  cols: 12,
                  sm: 6
                }
              }
            }
          }
        }
      }
    }
  ]
}, b = {
  type: "object",
  "x-display": "tabs",
  "x-props": {
    grow: !0
  },
  "x-options": {
    childrenClass: "pr-5 pl-0"
  },
  allOf: [
    {
      title: "Allgemein",
      type: "object",
      "x-options": {
        removeAdditionalProperties: !1
      },
      properties: {
        type: {
          const: "object"
        },
        key: {
          type: "string",
          "x-display": "hidden",
          "x-props": {
            outlined: !0,
            dense: !0
          },
          "x-rules": [
            "required"
          ],
          title: "Key",
          readOnly: !0
        },
        containerType: {
          type: "string",
          "x-display": "hidden",
          title: "Type",
          readOnly: !0
        },
        fieldType: {
          type: "string",
          "x-display": "hidden",
          title: "Type",
          readOnly: !0
        },
        title: {
          type: "string",
          title: "Titel",
          "x-props": {
            outlined: !0,
            dense: !0
          },
          "x-rules": [
            "required"
          ]
        },
        description: {
          type: "string",
          title: "Description",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        },
        readOnly: {
          type: "boolean",
          title: "Readonly",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      title: "Options",
      type: "object",
      properties: {
        "x-options": {
          type: "object",
          properties: {
            sectionsTitlesClasses: {
              type: "array",
              title: "CSS classes for Section titels",
              items: {
                type: "string"
              },
              "x-props": {
                outlined: !0
              },
              "x-rules": [
                "required"
              ],
              "x-options": {
                fieldColProps: {
                  cols: 12,
                  sm: 6
                }
              }
            }
          }
        },
        "x-props": {
          type: "object",
          description: "Ui",
          properties: {
            dense: {
              type: "boolean",
              title: "Dense",
              default: !0,
              "x-props": {
                outlined: !0,
                dense: !0
              },
              "x-options": {
                fieldColProps: {
                  cols: 12,
                  sm: 6
                }
              }
            },
            outlined: {
              type: "boolean",
              title: "Outlined",
              default: !0,
              "x-props": {
                outlined: !0,
                dense: !0
              },
              "x-options": {
                fieldColProps: {
                  cols: 12,
                  sm: 6
                }
              }
            }
          }
        }
      }
    }
  ]
}, h = {
  type: "object",
  "x-display": "tabs",
  "x-props": {
    grow: !0
  },
  "x-options": {
    childrenClass: "pl-0"
  },
  allOf: [
    {
      title: "Allgemein",
      description: "Ich bin eine Beschreibung, welche als Absatz am Anfang eines Abschnitts angezeigt wird.",
      type: "object",
      properties: {
        type: {
          const: "object"
        },
        key: {
          type: "string",
          title: "Key",
          "x-display": "hidden",
          readOnly: !0
        },
        title: {
          type: "string",
          title: "Titel",
          "x-props": {
            outlined: !0,
            dense: !0
          },
          "x-rules": [
            "required"
          ]
        },
        description: {
          type: "string",
          title: "Beschreibung",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      title: "Optionen",
      description: "Ich bin eine Beschreibung, welche als Absatz am Anfang eines Abschnitts angezeigt wird.",
      type: "object",
      properties: {
        "x-options": {
          type: "object",
          properties: {
            sectionsTitlesClasses: {
              type: "array",
              title: "CSS Klassen f\xFCr Section Titel",
              items: {
                type: "string"
              },
              "x-props": {
                outlined: !0
              },
              "x-rules": [
                "required"
              ],
              "x-options": {
                fieldColProps: {
                  cols: 12,
                  sm: 6
                }
              }
            }
          }
        }
      }
    }
  ]
}, s = {
  "x-options": {
    fieldColProps: {
      cols: 12,
      sm: 12
    }
  },
  "x-props": {
    outlined: !0,
    dense: !0
  }
}, j = [
  [
    "text",
    {
      ...s,
      fieldType: "text",
      title: "Textfeld",
      type: "string"
    }
  ],
  [
    "textarea",
    {
      ...s,
      fieldType: "textarea",
      title: "Textarea",
      "x-display": "textarea",
      type: "string"
    }
  ],
  [
    "integer",
    {
      ...s,
      fieldType: "integer",
      title: "Zahl",
      type: "integer"
    }
  ],
  [
    "number",
    {
      ...s,
      fieldType: "number",
      title: "Gleitkommazahl",
      type: "number"
    }
  ],
  [
    "boolean",
    {
      ...s,
      fieldType: "boolean",
      title: "Checkbox",
      type: "boolean",
      default: !1
    }
  ],
  [
    "date",
    {
      ...s,
      fieldType: "date",
      title: "Datum",
      "x-display": "custom-date-input",
      type: "string",
      format: "date"
    }
  ],
  [
    "time",
    {
      fieldType: "time",
      title: "Zeit",
      type: "string",
      format: "time",
      ...s,
      "x-options": {
        fieldColProps: {
          cols: 12,
          sm: 12
        },
        timePickerProps: {
          format: "24hr"
        }
      }
    }
  ],
  [
    "select",
    {
      ...s,
      fieldType: "select",
      title: "Auswahl",
      type: "string",
      anyOf: []
    }
  ],
  [
    "multiselect",
    {
      ...s,
      fieldType: "multiselect",
      title: "Mehrfachauswahl",
      type: "array",
      anyOf: []
    }
  ],
  [
    "file",
    {
      ...s,
      fieldType: "file",
      title: "Dateien",
      "x-display": "custom-multi-file-input",
      type: "object",
      properties: {
        key: {
          type: "string"
        },
        amount: {
          type: "integer"
        }
      }
    }
  ],
  [
    "benutzerauswahl",
    {
      ...s,
      fieldType: "user-input",
      title: "Benutzerauswahl",
      "x-display": "custom-user-input",
      type: "string"
    }
  ],
  [
    "multibenutzerauswahl",
    {
      ...s,
      fieldType: "multi-user-input",
      title: "Mehrfache Benutzerauswahl",
      "x-display": "custom-multi-user-input",
      type: "array",
      items: {
        type: "string"
      }
    }
  ],
  [
    "switch",
    {
      ...s,
      fieldType: "switch",
      title: "Schalter",
      "x-display": "switch",
      default: !1,
      type: "boolean"
    }
  ],
  [
    "array",
    {
      ...s,
      fieldType: "array",
      title: "Liste",
      type: "array",
      "x-props": {
        outlined: !0,
        dense: !1
      },
      items: {
        type: "string"
      }
    }
  ],
  [
    "markdown",
    {
      ...s,
      fieldType: "markdown",
      title: "Markdown",
      type: "string",
      "x-display": "markdown"
    }
  ]
], C = [
  [
    "objectType",
    {
      fieldType: "object",
      title: "Dynamisches Objekt",
      type: "object",
      ...s,
      properties: {}
    }
  ],
  [
    "arrayObject",
    {
      fieldType: "arrayObject",
      title: "Objekt-Liste",
      type: "array",
      ...s,
      "x-props": {
        outlined: !0,
        dense: !1
      },
      items: {
        type: "object",
        properties: {}
      }
    }
  ]
], O = [
  {
    containerType: "group",
    title: "Group",
    description: "",
    "x-options": {
      childrenClass: "pl-0"
    },
    properties: {}
  },
  {
    containerType: "optionalContainer",
    title: "Optional Container",
    type: "object",
    description: "",
    "x-options": {
      sectionsTitlesClasses: ["d-none"],
      fieldColProps: {
        cols: 12,
        sm: 12
      }
    },
    "x-props": {
      outlined: !0,
      dense: !0
    },
    allOf: []
  }
], T = [
  {
    title: "Abschnitt",
    description: "",
    type: "object",
    "x-options": {
      sectionsTitlesClasses: ["d-none"]
    },
    allOf: []
  }
], P = [
  {
    fieldType: "optionalContainer",
    title: "Optional Fields",
    type: "object",
    description: "",
    "x-options": {
      childrenClass: "pl-0",
      fieldColProps: {
        cols: 12,
        sm: 12
      }
    },
    "x-props": {
      outlined: !0,
      dense: !0
    },
    oneOf: []
  }
], S = [
  [
    "optionalProps",
    {
      fieldType: "optionalContainer",
      title: "Optional Group",
      type: "object",
      description: "",
      "x-options": {
        childrenClass: "pl-0",
        fieldColProps: {
          cols: 12,
          sm: 12
        }
      },
      "x-props": {
        outlined: !0,
        dense: !0
      },
      oneOf: []
    }
  ]
], w = [
  {
    fieldType: "optionalContentItem",
    title: "Optional Select Item",
    description: "",
    "x-options": {
      childrenClass: "pl-0"
    },
    properties: {
      selection: {
        fieldType: "const",
        type: "string",
        const: "selection1"
      }
    }
  }
], n = {
  type: "object",
  "x-display": "tabs",
  "x-props": {
    grow: !0
  },
  "x-options": {
    childrenClass: "pr-5 pl-0"
  }
}, e = {
  title: "Allgemein",
  type: "object",
  properties: {
    fieldType: {
      type: "string",
      title: "Type",
      readOnly: !0
    },
    type: {
      type: "string",
      "x-display": "hidden"
    },
    key: {
      type: "string",
      title: "Key",
      "x-props": {
        outlined: !0,
        dense: !0
      },
      "x-rules": [
        "required"
      ]
    },
    title: {
      type: "string",
      title: "Titel",
      "x-props": {
        outlined: !0,
        dense: !0
      },
      "x-rules": [
        "required"
      ]
    },
    description: {
      type: "string",
      title: "Beschreibung",
      "x-props": {
        outlined: !0,
        dense: !0
      }
    },
    readOnly: {
      type: "boolean",
      title: "Readonly",
      "x-props": {
        outlined: !0,
        dense: !0
      }
    }
  }
}, i = {
  title: "Optionen",
  type: "object",
  properties: {
    "x-props": {
      type: "object",
      description: "Ui",
      properties: {
        dense: {
          type: "boolean",
          title: "Dense",
          "x-props": {
            outlined: !0,
            dense: !0
          },
          "x-options": {
            fieldColProps: {
              cols: 12,
              sm: 6
            }
          }
        },
        outlined: {
          type: "boolean",
          title: "Outlined",
          "x-props": {
            outlined: !0,
            dense: !0
          },
          "x-options": {
            fieldColProps: {
              cols: 12,
              sm: 6
            }
          }
        }
      }
    },
    "x-options": {
      type: "object",
      properties: {
        fieldColProps: {
          description: "Gr\xF6\xDFe (max. 12)",
          type: "object",
          properties: {
            sm: {
              type: "integer",
              title: "Standardgr\xF6\xDFe",
              "x-props": {
                outlined: !0,
                dense: !0
              },
              "x-options": {
                fieldColProps: {
                  cols: 12,
                  sm: 6
                }
              }
            },
            cols: {
              type: "integer",
              title: "Gr\xF6\xDFe auf kleinen Ger\xE4ten",
              "x-props": {
                outlined: !0,
                dense: !0
              },
              "x-options": {
                fieldColProps: {
                  cols: 12,
                  sm: 6
                }
              }
            },
            messages: {
              type: "object",
              description: "Messages",
              properties: {
                pattern: {
                  type: "string",
                  title: "Pattern (Error Message)",
                  "x-props": {
                    outlined: !0,
                    dense: !0
                  }
                },
                minimum: {
                  type: "string",
                  title: "Minimum (Error Message)",
                  "x-props": {
                    outlined: !0,
                    dense: !0
                  }
                },
                maximum: {
                  type: "string",
                  title: "Maximum (Error Message)",
                  "x-props": {
                    outlined: !0,
                    dense: !0
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}, p = {
  title: "Validierung",
  type: "object",
  properties: {
    pattern: {
      type: "string",
      title: "Pattern (regex)",
      "x-props": {
        outlined: !0,
        dense: !0
      }
    },
    "x-rules": {
      type: "array",
      title: "Weitere Regeln",
      items: {
        type: "string",
        enum: [
          "required"
        ]
      },
      "x-display": "checkbox"
    }
  }
}, k = {
  ...n,
  allOf: [
    {
      ...e,
      properties: {
        ...e.properties,
        default: {
          type: "string",
          title: "Default",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      ...i
    },
    {
      ...p,
      properties: {
        ...p.properties,
        minLength: {
          type: "integer",
          title: "min. L\xE4nge",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        },
        maxLength: {
          type: "integer",
          title: "max. L\xE4nge",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    }
  ]
}, D = {
  ...n,
  allOf: [
    {
      ...e,
      properties: {
        ...e.properties,
        "x-display": {
          const: "markdown"
        },
        default: {
          type: "string",
          title: "Default",
          "x-display": "markdown",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      ...i
    },
    {
      ...p
    }
  ]
}, q = {
  ...n,
  allOf: [
    {
      ...e,
      properties: {
        ...e.properties,
        "x-display": {
          const: "textarea"
        },
        default: {
          type: "string",
          title: "Default",
          "x-display": "textarea",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      ...i
    },
    {
      ...p,
      properties: {
        ...p.properties,
        minLength: {
          type: "integer",
          title: "min. L\xE4nge",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        },
        maxLength: {
          type: "integer",
          title: "max. L\xE4nge",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    }
  ]
}, I = {
  ...n,
  allOf: [
    {
      ...e,
      properties: {
        ...e.properties,
        "x-display": {
          const: "switch"
        },
        default: {
          type: "boolean",
          title: "Default",
          default: !1,
          "x-display": "switch",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      ...i
    },
    {
      ...p
    }
  ]
}, $ = {
  ...n,
  allOf: [
    {
      ...e,
      properties: {
        ...e.properties,
        "x-display": {
          const: "custom-date-input"
        },
        default: {
          type: "string",
          format: "date",
          title: "Default",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      ...i,
      properties: {
        ...i.properties,
        "x-options": {
          ...i.properties["x-options"],
          properties: {
            ...i.properties["x-options"].properties,
            fieldColProps: {
              ...i.properties["x-options"].properties.fieldColProps,
              properties: {
                ...i.properties["x-options"].properties.fieldColProps.properties,
                messages: {}
              }
            }
          }
        }
      }
    },
    {
      ...p,
      properties: {
        "x-rules": p.properties["x-rules"]
      }
    }
  ]
}, M = {
  title: "General",
  type: "object",
  properties: {
    fieldType: {
      type: "string",
      title: "Type",
      readOnly: !0
    },
    type: {
      type: "string",
      "x-display": "hidden"
    },
    key: {
      type: "string",
      title: "Key",
      "x-props": {
        outlined: !0,
        dense: !0
      },
      "x-rules": [
        "required"
      ]
    },
    const: {
      type: "string",
      title: "Const",
      "x-props": {
        outlined: !0,
        dense: !0
      },
      "x-rules": [
        "required"
      ]
    }
  }
}, a = {
  ...n,
  allOf: [
    {
      ...e,
      properties: {
        ...e.properties,
        additionalProperties: {
          const: !1
        }
      }
    },
    {
      ...i
    }
  ]
}, F = {
  ...n,
  allOf: [
    {
      ...e,
      properties: {
        ...e.properties,
        format: {
          const: "time"
        },
        default: {
          type: "string",
          format: "time",
          title: "Default",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      ...i,
      properties: {
        ...i.properties,
        "x-options": {
          type: "object",
          properties: {
            timePickerProps: {
              type: "object",
              properties: {
                format: {
                  const: "24hr"
                }
              }
            },
            fieldColProps: {
              description: "Gr\xF6\xDFe (max. 12)",
              type: "object",
              properties: {
                sm: {
                  type: "integer",
                  title: "Standardgr\xF6\xDFe",
                  "x-props": {
                    outlined: !0,
                    dense: !0
                  },
                  "x-options": {
                    fieldColProps: {
                      cols: 12,
                      sm: 6
                    }
                  }
                },
                cols: {
                  type: "integer",
                  title: "Gr\xF6\xDFe auf kleinen Ger\xE4ten",
                  "x-props": {
                    outlined: !0,
                    dense: !0
                  },
                  "x-options": {
                    fieldColProps: {
                      cols: 12,
                      sm: 6
                    }
                  }
                },
                messages: {
                  type: "object",
                  description: "Messages",
                  properties: {
                    pattern: {
                      type: "string",
                      title: "Pattern (Error Message)",
                      "x-props": {
                        outlined: !0,
                        dense: !0
                      }
                    },
                    minimum: {
                      type: "string",
                      title: "Minimum (Error Message)",
                      "x-props": {
                        outlined: !0,
                        dense: !0
                      }
                    },
                    maximum: {
                      type: "string",
                      title: "Maximum (Error Message)",
                      "x-props": {
                        outlined: !0,
                        dense: !0
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    {
      ...p
    }
  ]
}, E = {
  ...n,
  allOf: [
    {
      ...e,
      properties: {
        ...e.properties,
        "x-display": {
          type: "string",
          title: "Anzeige",
          "x-props": {
            outlined: !0,
            dense: !0
          },
          "x-options": {
            fieldColProps: {
              cols: 12,
              sm: 6
            }
          }
        },
        default: {
          type: "boolean",
          title: "Default",
          default: !1,
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      ...i
    },
    {
      ...p
    }
  ]
}, A = {
  ...n,
  allOf: [
    {
      ...e,
      properties: {
        ...e.properties,
        "x-display": {
          type: "string",
          title: "Display",
          enum: [
            "radio",
            "select"
          ],
          "x-options": {
            fieldColProps: {
              cols: 12,
              sm: 6
            }
          },
          "x-props": {
            outlined: !0,
            dense: !0
          }
        },
        default: {
          type: "string",
          title: "Default",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      title: "Auswahl",
      type: "object",
      properties: {
        anyOf: {
          type: "array",
          title: "Eintr\xE4ge",
          "x-itemTitle": "title",
          items: {
            type: "object",
            properties: {
              title: {
                type: "string",
                title: "Titel",
                "x-rules": [
                  "required"
                ]
              },
              const: {
                type: "string",
                title: "Wert",
                "x-rules": [
                  "required"
                ]
              }
            }
          }
        }
      }
    },
    {
      ...i
    },
    {
      ...p
    }
  ]
}, G = {
  ...n,
  allOf: [
    {
      ...e,
      properties: {
        ...e.properties,
        "x-display": {
          type: "string",
          title: "Display",
          enum: [
            "checkbox",
            "select",
            "switch"
          ],
          "x-options": {
            fieldColProps: {
              cols: 12,
              sm: 6
            }
          },
          "x-props": {
            outlined: !0,
            dense: !0
          }
        },
        default: {
          type: "array",
          title: "default",
          items: {
            type: "string"
          },
          "x-props": {
            outlined: !0
          },
          "x-rules": [
            "required"
          ],
          "x-options": {
            fieldColProps: {
              cols: 12,
              sm: 12
            }
          }
        }
      }
    },
    {
      title: "Auswahl",
      type: "object",
      properties: {
        items: {
          type: "object",
          properties: {
            type: {
              const: "string"
            },
            anyOf: {
              type: "array",
              title: "Eintr\xE4ge",
              "x-itemTitle": "title",
              items: {
                type: "object",
                properties: {
                  title: {
                    type: "string",
                    title: "Titel",
                    "x-rules": [
                      "required"
                    ]
                  },
                  const: {
                    type: "string",
                    title: "Wert",
                    "x-rules": [
                      "required"
                    ]
                  }
                }
              }
            }
          }
        }
      }
    },
    {
      ...i
    },
    {
      ...p
    }
  ]
}, L = {
  ...n,
  allOf: [
    {
      ...e,
      properties: {
        ...e.properties,
        "x-display": {
          const: "custom-multi-file-input"
        },
        filePath: {
          type: "string",
          title: "Dateipfad",
          "x-props": {
            outlined: !0
          },
          "x-rules": [],
          "x-options": {
            fieldColProps: {
              cols: 12,
              sm: 12
            }
          }
        },
        properties: {
          const: { key: { type: "string" }, amount: { type: "integer" } }
        },
        uuidEnabled: {
          type: "boolean",
          title: "Eindeutiger Identifikator?",
          description: "Erzeugt einen eindeutigen Identifikator, der an den Dateipfad angeh\xE4ngt wird. Sollte in Objektlisten verwendet werden.",
          default: !1,
          "x-props": {
            outlined: !0
          },
          "x-options": {
            fieldColProps: {
              cols: 12,
              sm: 12
            }
          }
        }
      }
    },
    {
      ...i
    },
    {
      ...p,
      properties: {
        "x-rules": {
          type: "array",
          title: "Regeln",
          items: {
            type: "string",
            enum: [
              "requiredObject"
            ]
          },
          "x-display": "checkbox"
        }
      }
    }
  ]
}, z = {
  ...n,
  allOf: [
    {
      ...e,
      properties: {
        ...e.properties,
        "x-display": {
          const: "custom-user-input"
        },
        "ldap-groups": {
          type: "string",
          title: "Ldap Gruppen",
          "x-props": {
            outlined: !0,
            dense: !0
          },
          "x-options": {
            fieldColProps: {
              cols: 12,
              sm: 6
            }
          }
        },
        default: {
          type: "string",
          title: "Default",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      ...i
    },
    {
      ...p
    }
  ]
}, K = {
  ...n,
  allOf: [
    {
      ...e,
      properties: {
        ...e.properties,
        "x-display": {
          const: "custom-multi-user-input"
        },
        "ldap-groups": {
          type: "string",
          title: "Ldap Gruppen",
          "x-props": {
            outlined: !0,
            dense: !0
          },
          "x-options": {
            fieldColProps: {
              cols: 12,
              sm: 6
            }
          }
        },
        items: {
          type: "object",
          properties: {
            type: {
              const: "string"
            }
          }
        },
        default: {
          type: "array",
          title: "default",
          items: {
            type: "string"
          },
          "x-props": {
            outlined: !0
          },
          "x-rules": [
            "required"
          ],
          "x-options": {
            fieldColProps: {
              cols: 12,
              sm: 12
            }
          }
        }
      }
    },
    {
      ...i
    },
    {
      ...p,
      properties: {
        minItems: {
          type: "integer",
          title: "minimum",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        },
        maxItems: {
          type: "integer",
          title: "maximum",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    }
  ]
}, v = {
  ...n,
  allOf: [
    {
      ...e,
      properties: {
        ...e.properties,
        items: {
          type: "object",
          properties: {
            type: {
              type: "string",
              title: "Typ",
              enum: [
                "string",
                "integer"
              ],
              "x-props": {
                outlined: !0,
                dense: !0
              }
            }
          }
        },
        default: {
          type: "array",
          title: "default",
          items: {
            type: "string"
          },
          "x-props": {
            outlined: !0
          },
          "x-rules": [
            "required"
          ],
          "x-options": {
            fieldColProps: {
              cols: 12,
              sm: 12
            }
          }
        }
      }
    },
    {
      ...i
    }
  ]
}, B = {
  ...n,
  allOf: [
    {
      ...e,
      properties: {
        ...e.properties,
        items: {
          type: "object",
          properties: {
            type: {
              const: "object"
            },
            additionalProperties: {
              const: !1
            },
            properties: {
              type: "object"
            }
          }
        }
      }
    },
    {
      ...i
    },
    {
      ...p,
      properties: {
        minItems: {
          type: "integer",
          title: "minimum",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        },
        maxItems: {
          type: "integer",
          title: "maximum",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    }
  ]
}, U = {
  ...n,
  allOf: [
    {
      ...e,
      properties: {
        ...e.properties,
        default: {
          type: "string",
          title: "Default",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      ...i
    },
    {
      ...p
    }
  ]
}, R = {
  textarea: q,
  text: k,
  date: $,
  time: F,
  boolean: E,
  select: A,
  multiselect: G,
  file: L,
  "user-input": z,
  "multi-user-input": K,
  array: v,
  arrayObject: B,
  switch: I,
  markdown: D,
  const: M,
  object: a,
  objectType: a
}, Oe = {
  iconSettings: {
    iconMap: c,
    defaultIcon: y,
    containerIconMap: m,
    defaultContainerIcon: x
  },
  modelerPalette: {
    formFields: j,
    containers: O,
    objects: C,
    sections: T,
    optionalObject: P,
    optionalProperties: S,
    optionalItem: w
  },
  containerSchema: f,
  conditionalContainerSchema: b,
  conditionalObjectContainerSchema: g,
  sectionSchema: h,
  defaultFormFieldSchema: U,
  formFieldSchemas: R
}, V = {
  text: "mdi-text-short",
  textarea: "mdi-text",
  integer: "mdi-numeric-1-box-outline",
  number: "mdi-numeric-1-box-multiple-outline",
  boolean: "mdi-checkbox-marked-outline",
  date: "mdi-calendar",
  select: "mdi-playlist-check",
  multiselect: "mdi-playlist-check",
  "user-input": "mdi-account",
  "multi-user-input": "mdi-account-multiple",
  file: "mdi-file",
  switch: "mdi-toggle-switch",
  array: "mdi-format-list-bulleted-square",
  group: "mdi-crop-free",
  object: "mdi-view-module",
  objectGroup: "mdi-select-group",
  arrayObject: "mdi-view-list",
  markdown: "mdi-image-text",
  time: "mdi-clock-outline",
  optionalContainer: "mdi-border-none-variant",
  optionalContentItem: "mdi-border-none",
  const: "mdi-crosshairs-gps"
}, W = "mdi-text-short", N = "mdi-crop-free", Z = {
  group: "mdi-crop-free",
  optionalContainer: "mdi-border-none-variant"
}, H = {
  type: "object",
  "x-display": "tabs",
  "x-props": {
    grow: !0
  },
  "x-options": {
    childrenClass: "pl-0"
  },
  allOf: [
    {
      title: "General",
      description: "I'm a description shown as a paragraph on top of section.",
      type: "object",
      properties: {
        containerType: {
          type: "string",
          title: "Type",
          "x-display": "hidden",
          readOnly: !0
        },
        key: {
          type: "string",
          title: "Key",
          "x-display": "hidden",
          readOnly: !0
        },
        title: {
          type: "string",
          title: "Titel",
          "x-props": {
            outlined: !0,
            dense: !0
          },
          "x-rules": [
            "required"
          ]
        },
        description: {
          type: "string",
          title: "Description",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      title: "Options",
      description: "I'm a description shown as a paragraph on top of section",
      type: "object",
      properties: {
        "x-options": {
          type: "object",
          properties: {
            childrenClass: {
              type: "string",
              title: "CSS classes for child elements",
              "x-props": {
                outlined: !0,
                dense: !0
              },
              "x-rules": [
                "required"
              ],
              "x-options": {
                fieldColProps: {
                  cols: 12,
                  sm: 6
                }
              }
            }
          },
          "x-props": {
            type: "object",
            description: "Ui",
            properties: {
              dense: {
                type: "boolean",
                title: "Dense",
                "x-props": {
                  outlined: !0,
                  dense: !0
                },
                "x-options": {
                  fieldColProps: {
                    cols: 12,
                    sm: 6
                  }
                }
              },
              outlined: {
                type: "boolean",
                title: "Outlined",
                "x-props": {
                  outlined: !0,
                  dense: !0
                },
                "x-options": {
                  fieldColProps: {
                    cols: 12,
                    sm: 6
                  }
                }
              }
            }
          }
        }
      }
    }
  ]
}, J = {
  type: "object",
  "x-display": "tabs",
  "x-props": {
    grow: !0
  },
  "x-options": {
    childrenClass: "pr-5 pl-0"
  },
  allOf: [
    {
      title: "General",
      type: "object",
      "x-options": {
        removeAdditionalProperties: !1
      },
      properties: {
        type: {
          const: "object"
        },
        key: {
          type: "string",
          title: "Key",
          "x-props": {
            outlined: !0,
            dense: !0
          },
          "x-rules": [
            "required"
          ]
        },
        containerType: {
          type: "string",
          "x-display": "hidden",
          title: "Type",
          readOnly: !0
        },
        fieldType: {
          type: "string",
          "x-display": "hidden",
          title: "Type",
          readOnly: !0
        },
        title: {
          type: "string",
          title: "Titel",
          "x-props": {
            outlined: !0,
            dense: !0
          },
          "x-rules": [
            "required"
          ]
        },
        description: {
          type: "string",
          title: "Description",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        },
        readOnly: {
          type: "boolean",
          title: "Readonly",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      title: "Options",
      type: "object",
      properties: {
        "x-options": {
          type: "object",
          properties: {
            sectionsTitlesClasses: {
              type: "array",
              title: "CSS classes for Section titels",
              items: {
                type: "string"
              },
              "x-props": {
                outlined: !0
              },
              "x-rules": [
                "required"
              ],
              "x-options": {
                fieldColProps: {
                  cols: 12,
                  sm: 6
                }
              }
            }
          }
        },
        "x-props": {
          type: "object",
          description: "Ui",
          properties: {
            dense: {
              type: "boolean",
              title: "Dense",
              default: !0,
              "x-props": {
                outlined: !0,
                dense: !0
              },
              "x-options": {
                fieldColProps: {
                  cols: 12,
                  sm: 6
                }
              }
            },
            outlined: {
              type: "boolean",
              title: "Outlined",
              default: !0,
              "x-props": {
                outlined: !0,
                dense: !0
              },
              "x-options": {
                fieldColProps: {
                  cols: 12,
                  sm: 6
                }
              }
            }
          }
        }
      }
    }
  ]
}, Q = {
  type: "object",
  "x-display": "tabs",
  "x-props": {
    grow: !0
  },
  "x-options": {
    childrenClass: "pl-0"
  },
  allOf: [
    {
      title: "General",
      type: "object",
      "x-options": {
        removeAdditionalProperties: !1
      },
      properties: {
        type: {
          const: "object"
        },
        key: {
          type: "string",
          "x-display": "hidden",
          title: "Key",
          "x-props": {
            outlined: !0,
            dense: !0
          },
          "x-rules": [
            "required"
          ],
          readOnly: !1
        },
        containerType: {
          type: "string",
          "x-display": "hidden",
          title: "Type",
          readOnly: !0
        },
        fieldType: {
          type: "string",
          "x-display": "hidden",
          title: "Type",
          readOnly: !0
        },
        title: {
          type: "string",
          title: "Titel",
          "x-props": {
            outlined: !0,
            dense: !0
          },
          "x-rules": [
            "required"
          ]
        },
        description: {
          type: "string",
          title: "Description",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        },
        readOnly: {
          type: "boolean",
          title: "Readonly",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      title: "Options",
      type: "object",
      properties: {
        "x-options": {
          type: "object",
          properties: {
            sectionsTitlesClasses: {
              type: "array",
              title: "CSS classes for Section titels",
              items: {
                type: "string"
              },
              "x-props": {
                outlined: !0
              },
              "x-rules": [
                "required"
              ],
              "x-options": {
                fieldColProps: {
                  cols: 12,
                  sm: 6
                }
              }
            }
          }
        },
        "x-props": {
          type: "object",
          description: "Ui",
          properties: {
            dense: {
              type: "boolean",
              title: "Dense",
              default: !0,
              "x-props": {
                outlined: !0,
                dense: !0
              },
              "x-options": {
                fieldColProps: {
                  cols: 12,
                  sm: 6
                }
              }
            },
            outlined: {
              type: "boolean",
              title: "Outlined",
              default: !0,
              "x-props": {
                outlined: !0,
                dense: !0
              },
              "x-options": {
                fieldColProps: {
                  cols: 12,
                  sm: 6
                }
              }
            }
          }
        }
      }
    }
  ]
}, X = {
  type: "object",
  "x-display": "tabs",
  "x-props": {
    grow: !0
  },
  "x-options": {
    childrenClass: "pl-0"
  },
  allOf: [
    {
      title: "General",
      type: "object",
      description: "I'm a description shown as a paragraph on top of section.",
      properties: {
        type: {
          const: "object"
        },
        key: {
          type: "string",
          title: "Key",
          "x-display": "hidden",
          readOnly: !0
        },
        title: {
          type: "string",
          title: "Titel",
          "x-props": {
            outlined: !0,
            dense: !0
          },
          "x-rules": [
            "required"
          ]
        },
        description: {
          type: "string",
          title: "Description",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      title: "Options",
      type: "object",
      description: "I'm a description shown as a paragraph on top of section.",
      properties: {
        "x-options": {
          type: "object",
          properties: {
            sectionsTitlesClasses: {
              type: "array",
              title: "CSS classes for Section titels",
              items: {
                type: "string"
              },
              "x-props": {
                outlined: !0
              },
              "x-rules": [
                "required"
              ],
              "x-options": {
                fieldColProps: {
                  cols: 12,
                  sm: 6
                }
              }
            }
          }
        }
      }
    }
  ]
}, o = {
  "x-options": {
    fieldColProps: {
      cols: 12,
      sm: 12
    }
  },
  "x-props": {
    outlined: !0,
    dense: !0
  }
}, Y = [
  [
    "text",
    {
      ...o,
      fieldType: "text",
      title: "Textfield",
      type: "string"
    }
  ],
  [
    "textarea",
    {
      ...o,
      fieldType: "textarea",
      title: "Textarea",
      "x-display": "textarea",
      type: "string"
    }
  ],
  [
    "integer",
    {
      ...o,
      fieldType: "integer",
      title: "Number",
      type: "integer"
    }
  ],
  [
    "number",
    {
      ...o,
      fieldType: "number",
      title: "Floating Number",
      type: "number"
    }
  ],
  [
    "boolean",
    {
      ...o,
      fieldType: "boolean",
      title: "Checkbox",
      default: !1,
      type: "boolean"
    }
  ],
  [
    "date",
    {
      ...o,
      fieldType: "date",
      title: "Date",
      "x-display": "custom-date-input",
      type: "string",
      format: "date"
    }
  ],
  [
    "time",
    {
      fieldType: "time",
      title: "Time",
      type: "string",
      format: "time",
      ...o,
      "x-options": {
        fieldColProps: {
          cols: 12,
          sm: 12
        },
        timePickerProps: {
          format: "24hr"
        }
      }
    }
  ],
  [
    "select",
    {
      ...o,
      fieldType: "select",
      title: "Select",
      type: "string",
      anyOf: []
    }
  ],
  [
    "multiselect",
    {
      ...o,
      fieldType: "multiselect",
      title: "Multiselect",
      type: "array",
      anyOf: []
    }
  ],
  [
    "file",
    {
      ...o,
      fieldType: "file",
      title: "Files",
      "x-display": "file",
      type: "object",
      properties: {
        key: {
          type: "string"
        },
        amount: {
          type: "integer"
        }
      }
    }
  ],
  [
    "benutzerauswahl",
    {
      ...o,
      fieldType: "user-input",
      title: "Benutzerauswahl",
      "x-display": "custom-user-input",
      type: "string"
    }
  ],
  [
    "multibenutzerauswahl",
    {
      ...o,
      fieldType: "multi-user-input",
      title: "Mehrfache Benutzerauswahl",
      "x-display": "custom-multi-user-input",
      type: "array",
      items: {
        type: "string"
      }
    }
  ],
  [
    "switch",
    {
      ...o,
      fieldType: "switch",
      title: "Switch",
      "x-display": "switch",
      default: !1,
      type: "boolean"
    }
  ],
  [
    "array",
    {
      ...o,
      fieldType: "array",
      title: "List",
      type: "array",
      "x-props": {
        outlined: !0,
        dense: !1
      },
      items: {
        type: "string"
      }
    }
  ],
  [
    "markdown",
    {
      ...o,
      fieldType: "markdown",
      title: "Markdown",
      type: "string",
      "x-display": "markdown"
    }
  ]
], _ = [
  [
    "objectType",
    {
      fieldType: "object",
      title: "Object",
      type: "object",
      ...o,
      properties: {}
    }
  ],
  [
    "arrayObject",
    {
      fieldType: "arrayObject",
      title: "Object List",
      type: "array",
      ...o,
      "x-props": {
        outlined: !0,
        dense: !1
      },
      items: {
        type: "object",
        properties: {}
      }
    }
  ]
], ee = [
  {
    fieldType: "optionalContainer",
    title: "Optional Fields",
    type: "object",
    description: "",
    "x-options": {
      childrenClass: "pl-0",
      fieldColProps: {
        cols: 12,
        sm: 12
      }
    },
    "x-props": {
      outlined: !0,
      dense: !0
    },
    oneOf: []
  }
], te = [
  [
    "optionalProps",
    {
      fieldType: "optionalContainer",
      title: "Optional Group",
      type: "object",
      description: "",
      "x-options": {
        childrenClass: "pl-0",
        fieldColProps: {
          cols: 12,
          sm: 12
        }
      },
      "x-props": {
        outlined: !0,
        dense: !0
      },
      oneOf: []
    }
  ]
], ie = [
  {
    fieldType: "optionalContentItem",
    title: "Optional Select Item",
    description: "",
    "x-options": {
      childrenClass: "pl-0"
    },
    properties: {
      selection: {
        fieldType: "const",
        type: "string",
        const: "selection1"
      }
    }
  }
], re = [
  {
    containerType: "group",
    title: "Group",
    description: "",
    "x-options": {
      childrenClass: "pl-0"
    },
    properties: {}
  },
  {
    containerType: "optionalContainer",
    title: "Optional Object",
    type: "object",
    description: "",
    "x-options": {
      sectionsTitlesClasses: ["d-none"],
      fieldColProps: {
        cols: 12,
        sm: 12
      }
    },
    "x-props": {
      outlined: !0,
      dense: !0
    },
    allOf: []
  }
], se = [
  {
    title: "Section",
    description: "",
    type: "object",
    "x-options": {
      sectionsTitlesClasses: ["d-none"]
    },
    allOf: []
  }
], d = {
  type: "object",
  "x-display": "tabs",
  "x-props": {
    grow: !0
  },
  "x-options": {
    childrenClass: "pr-5 pl-0"
  }
}, t = {
  title: "General",
  type: "object",
  properties: {
    fieldType: {
      type: "string",
      title: "Type",
      readOnly: !0
    },
    type: {
      type: "string",
      "x-display": "hidden"
    },
    key: {
      type: "string",
      title: "Key",
      "x-props": {
        outlined: !0,
        dense: !0
      },
      "x-rules": [
        "required"
      ]
    },
    title: {
      type: "string",
      title: "Titel",
      "x-props": {
        outlined: !0,
        dense: !0
      },
      "x-rules": [
        "required"
      ]
    },
    description: {
      type: "string",
      title: "Beschreibung",
      "x-props": {
        outlined: !0,
        dense: !0
      }
    },
    readOnly: {
      type: "boolean",
      title: "Readonly",
      "x-props": {
        outlined: !0,
        dense: !0
      }
    }
  }
}, r = {
  title: "Optionen",
  type: "object",
  properties: {
    "x-props": {
      type: "object",
      description: "Ui",
      properties: {
        dense: {
          type: "boolean",
          title: "Dense",
          "x-props": {
            outlined: !0,
            dense: !0
          },
          "x-options": {
            fieldColProps: {
              cols: 12,
              sm: 6
            }
          }
        },
        outlined: {
          type: "boolean",
          title: "Outlined",
          "x-props": {
            outlined: !0,
            dense: !0
          },
          "x-options": {
            fieldColProps: {
              cols: 12,
              sm: 6
            }
          }
        }
      }
    },
    "x-options": {
      type: "object",
      properties: {
        fieldColProps: {
          description: "Gr\xF6\xDFe (max. 12)",
          type: "object",
          properties: {
            sm: {
              type: "integer",
              title: "Standardgr\xF6\xDFe",
              "x-props": {
                outlined: !0,
                dense: !0
              },
              "x-options": {
                fieldColProps: {
                  cols: 12,
                  sm: 6
                }
              }
            },
            cols: {
              type: "integer",
              title: "Gr\xF6\xDFe auf kleinen Ger\xE4ten",
              "x-props": {
                outlined: !0,
                dense: !0
              },
              "x-options": {
                fieldColProps: {
                  cols: 12,
                  sm: 6
                }
              }
            },
            messages: {
              type: "object",
              description: "Messages",
              properties: {
                pattern: {
                  type: "string",
                  title: "Pattern (Error Message)",
                  "x-props": {
                    outlined: !0,
                    dense: !0
                  }
                },
                minimum: {
                  type: "string",
                  title: "Minimum (Error Message)",
                  "x-props": {
                    outlined: !0,
                    dense: !0
                  }
                },
                maximum: {
                  type: "string",
                  title: "Maximum (Error Message)",
                  "x-props": {
                    outlined: !0,
                    dense: !0
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}, l = {
  title: "Validierung",
  type: "object",
  properties: {
    pattern: {
      type: "string",
      title: "Pattern (regex)",
      "x-props": {
        outlined: !0,
        dense: !0
      }
    },
    "x-rules": {
      type: "array",
      title: "Weitere Regeln",
      items: {
        type: "string",
        enum: [
          "required"
        ]
      },
      "x-display": "checkbox"
    }
  }
}, oe = {
  ...d,
  allOf: [
    {
      ...t,
      properties: {
        ...t.properties,
        default: {
          type: "string",
          title: "Default",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      ...r
    },
    {
      ...l,
      properties: {
        ...l.properties,
        minLength: {
          type: "integer",
          title: "min. L\xE4nge",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        },
        maxLength: {
          type: "integer",
          title: "max. L\xE4nge",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    }
  ]
}, pe = {
  ...d,
  allOf: [
    {
      ...t,
      properties: {
        ...t.properties,
        "x-display": {
          const: "markdown"
        },
        default: {
          type: "string",
          title: "Default",
          "x-display": "markdown",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      ...r
    },
    {
      ...l
    }
  ]
}, le = {
  ...d,
  allOf: [
    {
      ...t,
      properties: {
        ...t.properties,
        "x-display": {
          const: "textarea"
        },
        default: {
          type: "string",
          title: "Default",
          "x-display": "textarea",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      ...r
    },
    {
      ...l,
      properties: {
        ...l.properties,
        minLength: {
          type: "integer",
          title: "min. L\xE4nge",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        },
        maxLength: {
          type: "integer",
          title: "max. L\xE4nge",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    }
  ]
}, ne = {
  ...d,
  allOf: [
    {
      ...t,
      properties: {
        ...t.properties,
        "x-display": {
          const: "switch"
        },
        default: {
          type: "boolean",
          title: "Default",
          default: !1,
          "x-display": "switch",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      ...r
    },
    {
      ...l
    }
  ]
}, de = {
  ...d,
  allOf: [
    {
      ...t,
      properties: {
        ...t.properties,
        "x-display": {
          const: "custom-date-input"
        },
        default: {
          type: "string",
          format: "date",
          title: "Default",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      ...r,
      properties: {
        ...r.properties,
        "x-options": {
          ...r.properties["x-options"],
          properties: {
            ...r.properties["x-options"].properties,
            fieldColProps: {
              ...r.properties["x-options"].properties.fieldColProps,
              properties: {
                ...r.properties["x-options"].properties.fieldColProps.properties,
                messages: {}
              }
            }
          }
        }
      }
    },
    {
      ...l,
      properties: {
        "x-rules": l.properties["x-rules"]
      }
    }
  ]
}, ae = {
  title: "General",
  type: "object",
  properties: {
    fieldType: {
      type: "string",
      title: "Type",
      readOnly: !0
    },
    type: {
      type: "string",
      "x-display": "hidden"
    },
    key: {
      type: "string",
      title: "Key",
      "x-props": {
        outlined: !0,
        dense: !0
      },
      "x-rules": [
        "required"
      ]
    },
    const: {
      type: "string",
      title: "Const",
      "x-props": {
        outlined: !0,
        dense: !0
      },
      "x-rules": [
        "required"
      ]
    }
  }
}, u = {
  ...d,
  allOf: [
    {
      ...t,
      properties: {
        ...t.properties,
        additionalProperties: {
          const: !1
        }
      }
    },
    {
      ...r
    }
  ]
}, ue = {
  ...d,
  allOf: [
    {
      ...t,
      properties: {
        ...t.properties,
        format: {
          const: "time"
        },
        default: {
          type: "string",
          format: "time",
          title: "Default",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      ...r,
      properties: {
        ...r.properties,
        "x-options": {
          type: "object",
          properties: {
            timePickerProps: {
              type: "object",
              properties: {
                format: {
                  const: "24hr"
                }
              }
            },
            fieldColProps: {
              description: "Size (max. 12)",
              type: "object",
              properties: {
                sm: {
                  type: "integer",
                  title: "default size",
                  "x-props": {
                    outlined: !0,
                    dense: !0
                  },
                  "x-options": {
                    fieldColProps: {
                      cols: 12,
                      sm: 6
                    }
                  }
                },
                cols: {
                  type: "integer",
                  title: "Size on small devices",
                  "x-props": {
                    outlined: !0,
                    dense: !0
                  },
                  "x-options": {
                    fieldColProps: {
                      cols: 12,
                      sm: 6
                    }
                  }
                },
                messages: {
                  type: "object",
                  description: "Messages",
                  properties: {
                    pattern: {
                      type: "string",
                      title: "Pattern (Error Message)",
                      "x-props": {
                        outlined: !0,
                        dense: !0
                      }
                    },
                    minimum: {
                      type: "string",
                      title: "Minimum (Error Message)",
                      "x-props": {
                        outlined: !0,
                        dense: !0
                      }
                    },
                    maximum: {
                      type: "string",
                      title: "Maximum (Error Message)",
                      "x-props": {
                        outlined: !0,
                        dense: !0
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    {
      ...l
    }
  ]
}, ce = {
  ...d,
  allOf: [
    {
      ...t,
      properties: {
        ...t.properties,
        "x-display": {
          type: "string",
          title: "Display",
          "x-props": {
            outlined: !0,
            dense: !0
          },
          "x-options": {
            fieldColProps: {
              cols: 12,
              sm: 6
            }
          }
        },
        default: {
          type: "boolean",
          title: "Default",
          default: !1,
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      ...r
    },
    {
      ...l
    }
  ]
}, ye = {
  ...d,
  allOf: [
    {
      ...t,
      properties: {
        ...t.properties,
        "x-display": {
          type: "string",
          title: "Display",
          enum: [
            "radio",
            "select"
          ],
          "x-options": {
            fieldColProps: {
              cols: 12,
              sm: 6
            }
          },
          "x-props": {
            outlined: !0,
            dense: !0
          }
        },
        default: {
          type: "string",
          title: "Default",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      title: "Select",
      type: "object",
      properties: {
        anyOf: {
          type: "array",
          title: "Entries",
          "x-itemTitle": "title",
          items: {
            type: "object",
            properties: {
              title: {
                type: "string",
                title: "Titel",
                "x-rules": [
                  "required"
                ]
              },
              const: {
                type: "string",
                title: "Value",
                "x-rules": [
                  "required"
                ]
              }
            }
          }
        }
      }
    },
    {
      ...r
    },
    {
      ...l
    }
  ]
}, xe = {
  ...d,
  allOf: [
    {
      ...t,
      properties: {
        ...t.properties,
        "x-display": {
          type: "string",
          title: "Display",
          enum: [
            "checkbox",
            "select",
            "switch"
          ],
          "x-options": {
            fieldColProps: {
              cols: 12,
              sm: 6
            }
          },
          "x-props": {
            outlined: !0,
            dense: !0
          }
        },
        default: {
          type: "array",
          title: "default",
          items: {
            type: "string"
          },
          "x-props": {
            outlined: !0
          },
          "x-rules": [
            "required"
          ],
          "x-options": {
            fieldColProps: {
              cols: 12,
              sm: 12
            }
          }
        }
      }
    },
    {
      title: "Select",
      type: "object",
      properties: {
        items: {
          type: "object",
          properties: {
            type: {
              const: "string"
            },
            anyOf: {
              type: "array",
              title: "Entries",
              "x-itemTitle": "title",
              items: {
                type: "object",
                properties: {
                  title: {
                    type: "string",
                    title: "Titel",
                    "x-rules": [
                      "required"
                    ]
                  },
                  const: {
                    type: "string",
                    title: "Value",
                    "x-rules": [
                      "required"
                    ]
                  }
                }
              }
            }
          }
        }
      }
    },
    {
      ...r
    },
    {
      ...l
    }
  ]
}, me = {
  ...d,
  allOf: [
    {
      ...t,
      properties: {
        ...t.properties,
        "x-display": {
          const: "custom-multi-file-input"
        },
        filePath: {
          type: "string",
          title: "Filepath",
          "x-props": {
            outlined: !0
          },
          "x-rules": [],
          "x-options": {
            fieldColProps: {
              cols: 12,
              sm: 12
            }
          }
        },
        properties: {
          const: { key: { type: "string" }, amount: { type: "integer" } }
        },
        uuidEnabled: {
          type: "boolean",
          title: "Unique identifier?",
          description: "Creates an unique, which will add to the the directory path. It should be used in object lists.",
          default: !1,
          "x-props": {
            outlined: !0
          },
          "x-options": {
            fieldColProps: {
              cols: 12,
              sm: 12
            }
          }
        }
      }
    },
    {
      ...r
    },
    {
      ...l,
      properties: {
        "x-rules": {
          type: "array",
          title: "Regeln",
          items: {
            type: "string",
            enum: [
              "requiredObject"
            ]
          },
          "x-display": "checkbox"
        }
      }
    }
  ]
}, fe = {
  ...d,
  allOf: [
    {
      ...t,
      properties: {
        ...t.properties,
        "x-display": {
          const: "custom-user-input"
        },
        "ldap-groups": {
          type: "string",
          title: "Ldap Gruppen",
          "x-props": {
            outlined: !0,
            dense: !0
          },
          "x-options": {
            fieldColProps: {
              cols: 12,
              sm: 6
            }
          }
        },
        default: {
          type: "string",
          title: "Default",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      ...r
    },
    {
      ...l
    }
  ]
}, ge = {
  ...d,
  allOf: [
    {
      ...t,
      properties: {
        ...t.properties,
        "x-display": {
          const: "custom-multi-user-input"
        },
        "ldap-groups": {
          type: "string",
          title: "Ldap Gruppen",
          "x-props": {
            outlined: !0,
            dense: !0
          },
          "x-options": {
            fieldColProps: {
              cols: 12,
              sm: 6
            }
          }
        },
        items: {
          type: "object",
          properties: {
            type: {
              const: "string"
            }
          }
        },
        default: {
          type: "array",
          title: "default",
          items: {
            type: "string"
          },
          "x-props": {
            outlined: !0
          },
          "x-rules": [
            "required"
          ],
          "x-options": {
            fieldColProps: {
              cols: 12,
              sm: 12
            }
          }
        }
      }
    },
    {
      ...r
    },
    {
      ...l,
      properties: {
        minItems: {
          type: "integer",
          title: "minimum",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        },
        maxItems: {
          type: "integer",
          title: "maximum",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    }
  ]
}, be = {
  ...d,
  allOf: [
    {
      ...t,
      properties: {
        ...t.properties,
        items: {
          type: "object",
          properties: {
            type: {
              type: "string",
              title: "Typ",
              enum: [
                "string",
                "integer"
              ],
              "x-props": {
                outlined: !0,
                dense: !0
              }
            }
          }
        },
        default: {
          type: "array",
          title: "default",
          items: {
            type: "string"
          },
          "x-props": {
            outlined: !0
          },
          "x-rules": [
            "required"
          ],
          "x-options": {
            fieldColProps: {
              cols: 12,
              sm: 12
            }
          }
        }
      }
    },
    {
      ...r
    }
  ]
}, he = {
  ...d,
  allOf: [
    {
      ...t,
      properties: {
        ...t.properties,
        items: {
          type: "object",
          properties: {
            type: {
              const: "object"
            },
            additionalProperties: {
              const: !1
            },
            properties: {
              type: "object"
            }
          }
        }
      }
    },
    {
      ...r
    },
    {
      ...l,
      properties: {
        minItems: {
          type: "integer",
          title: "minimum",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        },
        maxItems: {
          type: "integer",
          title: "maximum",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    }
  ]
}, je = {
  ...d,
  allOf: [
    {
      ...t,
      properties: {
        ...t.properties,
        default: {
          type: "string",
          title: "Default",
          "x-props": {
            outlined: !0,
            dense: !0
          }
        }
      }
    },
    {
      ...r
    },
    {
      ...l
    }
  ]
}, Ce = {
  textarea: le,
  text: oe,
  date: de,
  time: ue,
  boolean: ce,
  select: ye,
  multiselect: xe,
  file: me,
  "user-input": fe,
  "multi-user-input": ge,
  array: be,
  arrayObject: he,
  switch: ne,
  markdown: pe,
  const: ae,
  object: u,
  objectType: u
}, Te = {
  iconSettings: {
    containerIconMap: Z,
    iconMap: V,
    defaultIcon: W,
    defaultContainerIcon: N
  },
  modelerPalette: {
    formFields: Y,
    containers: re,
    objects: _,
    sections: se,
    optionalObject: ee,
    optionalProperties: te,
    optionalItem: ie
  },
  containerSchema: H,
  conditionalContainerSchema: Q,
  conditionalObjectContainerSchema: J,
  sectionSchema: X,
  defaultFormFieldSchema: je,
  formFieldSchemas: Ce
};
export {
  Oe as SettingsDE,
  Te as SettingsEN
};
