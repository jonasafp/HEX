import type {
  VehicleProfile,
} from "../types/vehicle";

export function detectModules(
  vehicle: VehicleProfile
) {
  return vehicle.modules;
}