export type VWPlatform =
  | "PQ"
  | "MQB"
  | "MLB";

export type BCMType =
  | "BCM_PQ"
  | "BCM_MQB_LOW"
  | "BCM_MQB_HIGH"
  | "BCM_MLB";

export interface VehicleModule {

  id: string;

  name: string;

  bcm: BCMType;

  channels: string[];
}

export interface VehicleProfile {

  id: string;

  brand: string;

  model: string;

  yearStart: number;

  yearEnd: number;

  platform: VWPlatform;

  bcm: BCMType;

  supportedLights: string[];

  modules: VehicleModule[];
}