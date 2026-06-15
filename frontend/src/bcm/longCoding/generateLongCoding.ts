import type {
  VehicleProfile,
} from "../../types/vehicle";

import type {
  EventConfig,
} from "../../types/lighting";

import {
  generateMQBLongCoding,
} from "./mqbLongCoding";

export function generateLongCoding(
  vehicle: VehicleProfile,
  profile: EventConfig
) {

  switch (vehicle.platform) {

    case "MQB":
      return generateMQBLongCoding(
        profile.lights
      );

    default:
      return generateMQBLongCoding(
        profile.lights
      );
  }
}