import type {
  VehicleProfile,
} from "../types/vehicle";

export function detectBCM(
  vehicle: VehicleProfile
) {
  return {
    bcm:
      vehicle.bcm,
  };
}