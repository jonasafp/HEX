import type { LightState } from "../types/lighting";

export const defaultLights: LightState[] = [
  { type: "drl", enabled: false },
  { type: "low_beam", enabled: false },
  { type: "high_beam", enabled: false },
  { type: "fog_light", enabled: false },
  { type: "left_indicator", enabled: false },
  { type: "right_indicator", enabled: false },
];