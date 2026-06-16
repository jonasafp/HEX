import type {
  VehicleProfile,
} from "../types/vehicle";

export function detectPlatform(
  vehicle: VehicleProfile
) {
  return {
    platform:
      vehicle.platform,
  };
}