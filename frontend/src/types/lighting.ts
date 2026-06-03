export type VehicleEvent =
  | "unlock_vehicle"
  | "lock_vehicle"
  | "coming_home"
  | "leaving_home";

export type LightType =
  | "drl"
  | "low_beam"
  | "high_beam"
  | "fog_light"
  | "left_indicator"
  | "right_indicator";

export interface LightEffect {

  enabled: boolean;

  intensity?: number;

  animation?:
  | "steady"
  | "blink"
  | "fade"
  | "sequential";

  durationMs?: number;
}

export interface LightState {

  type: LightType;

  config: LightEffect;
}

export interface EventConfig {
  event: VehicleEvent;
  lights: LightState[];
}