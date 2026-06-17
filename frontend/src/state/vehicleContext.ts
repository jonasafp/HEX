import {
  createContext,
} from "react";

import type {
  VehicleProfile,
} from "../types/vehicle";

export interface VehicleContextType {

  vehicle:
    VehicleProfile | null;

  setVehicle:
    (
      vehicle:
        VehicleProfile
    ) => void;
}

export const VehicleContext =
  createContext<
    VehicleContextType
  >(
    {} as VehicleContextType
  );