import type {
  LightState,
} from "../types/lighting";

export const defaultLighting:
  LightState[] = [

  {
    type: "drl",

    config: {
      enabled: false,
      animation: "steady",
    },
  },

  {
    type: "low_beam",

    config: {
      enabled: false,
      animation: "steady",
    },
  },

  {
    type: "high_beam",

    config: {
      enabled: false,
      animation: "steady",
    },
  },

  {
    type: "fog_light",

    config: {
      enabled: false,
      animation: "steady",
    },
  },

  {
    type: "left_indicator",

    config: {
      enabled: false,
      animation: "steady",
    },
  },

  {
    type: "right_indicator",

    config: {
      enabled: false,
      animation: "steady",
    },
  },
];