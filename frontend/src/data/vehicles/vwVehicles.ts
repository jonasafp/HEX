import type {
  VehicleProfile,
} from "../../types/vehicle";

import {
  vwModules,
} from "../modules/vwModules";

export const vwVehicles:
  VehicleProfile[] = [

  {
    id: "golf_mk7",

    brand: "Volkswagen",

    model: "Golf MK7",

    yearStart: 2013,

    yearEnd: 2020,

    platform: "MQB",

    bcm: "MQB_HIGH_5Q0937084CF",

    supportedLights: [
      "drl",
      "low_beam",
      "high_beam",
      "fog_light",
      "left_indicator",
      "right_indicator",
    ],

    modules: vwModules,
  },

  {
    id: "jetta_mk6",

    brand: "Volkswagen",

    model: "Jetta MK6",

    yearStart: 2011,

    yearEnd: 2018,

    platform: "PQ",

    bcm: "PQ35_7H0937087",

    supportedLights: [
      "drl",
      "low_beam",
      "fog_light",
      "left_indicator",
      "right_indicator",
    ],

    modules: vwModules,
  },

  {
    id: "tiguan_mk2",

    brand: "Volkswagen",

    model: "Tiguan MK2",

    yearStart: 2017,

    yearEnd: 2024,

    platform: "MQB",

    bcm: "MQB_HIGH_5Q0937084CF",

    supportedLights: [
      "drl",
      "low_beam",
      "high_beam",
      "fog_light",
      "left_indicator",
      "right_indicator",
    ],

    modules: vwModules,
  },
];