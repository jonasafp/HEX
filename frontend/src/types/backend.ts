export interface BackendStatus {

  online: boolean;

  protocol: string;

  vehicle: string | null;
}

export interface BackendVehicle {

  vin: string;

  brand: string;

  model: string;

  platform: string;

  bcm: string;

  year: number;

  modules: {

    id: string;

    name: string;

  }[];
}

export interface BCMValue {

  id: string;

  label: string;

  value: string;
}

export interface CANFrame {

  id: string;

  module: string;

  data: string;
}