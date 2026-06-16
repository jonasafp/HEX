import {
  detectPlatform,
} from "./platformDetector";

import {
  detectBCM,
} from "./bcmDetector";

import {
  detectModules,
} from "./moduleDetector";

import type {
  VehicleProfile,
} from "../types/vehicle";

export function scanVehicle(
  vehicle: VehicleProfile
) {
  return {

    platform:
      detectPlatform(vehicle),

    bcm:
      detectBCM(vehicle),

    modules:
      detectModules(vehicle),
  };
}