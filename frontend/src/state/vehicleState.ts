export interface VehicleState {

  ignition: boolean;

  locked: boolean;

  doorOpen: boolean;

  nightMode: boolean;

  acc: boolean;
}

export const defaultVehicleState:
  VehicleState = {

  ignition: false,

  locked: true,

  doorOpen: false,

  nightMode: false,

  acc: false,
};