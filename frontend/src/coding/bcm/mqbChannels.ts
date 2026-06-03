import type {
  BCMChannel,
} from "../../types/coding";

export const mqbChannels:
  BCMChannel[] = [

  {
    id:
      "Leuchte2SL VLB10",

    label:
      "DRL esquerdo",

    light: "drl",

    supportedEffects: [
      "steady",
      "fade",
    ],
  },

  {
    id:
      "Leuchte3SL VRB21",

    label:
      "DRL direito",

    light: "drl",

    supportedEffects: [
      "steady",
      "fade",
    ],
  },

  {
    id:
      "Leuchte20BR LA71",

    label:
      "Seta esquerda",

    light:
      "left_indicator",

    supportedEffects: [
      "blink",
      "sequential",
    ],
  },

  {
    id:
      "Leuchte21BR RC8",

    label:
      "Seta direita",

    light:
      "right_indicator",

    supportedEffects: [
      "blink",
      "sequential",
    ],
  },

  {
    id:
      "Leuchte12NL LB45",

    label:
      "Farol baixo",

    light:
      "low_beam",

    supportedEffects: [
      "steady",
      "fade",
    ],
  },
];