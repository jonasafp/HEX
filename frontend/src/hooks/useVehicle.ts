import {
  useContext,
} from "react";

import {
  VehicleContext,
} from "../state/vehicleContext";

export function useVehicle() {

  return useContext(
    VehicleContext
  );
}