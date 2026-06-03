import type {
  LightType,
} from "./lighting";

export interface BCMChannel {

  id: string;

  label: string;

  light:
    | LightType
    | null;

  supportedEffects: string[];
}

export interface CodingValue {

  channelId: string;

  value: string;
}

export interface CodingProfile {

  vehicleId: string;

  bcm: string;

  values: CodingValue[];
}