import type {
  LightType,
} from "../types/lighting";

export const lightLabels:
  Record<LightType, string> = {

  drl: "DRL",

  low_beam: "Farol baixo",

  high_beam: "Farol alto",

  fog_light: "Farol de neblina",

  left_indicator:
    "Seta esquerda",

  right_indicator:
    "Seta direita",
};