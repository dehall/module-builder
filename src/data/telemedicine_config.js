export default {
  "start_year": 2020,
  "high_emergency_use_insurance_names": ["Medicaid", "Dual Eligible", "NO_INSURANCE"],
  "pre_telemedicine": {
    "high_emergency_distribution": {
      "ambulatory": 0.6,
      "emergency": 0.4
    },
    "typical_emergency_distribution": {
      "ambulatory": 0.9,
      "emergency": 0.1
    }
  },
  "during_telemedicine": {
    "high_emergency_distribution": {
      "ambulatory": 0.5,
      "emergency": 0.4,
      "telemedicine": 0.1
    },
    "typical_emergency_distribution": {
      "ambulatory": 0.6,
      "emergency": 0.1,
      "telemedicine": 0.3
    }
  }
}