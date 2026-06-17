import {
  vwVehicles,
} from "../data/vehicles/vwVehicles";

import {
  decodeVIN,
} from "./vinDecoder";

import {
  identifyBCM,
} from "./bcmIdentifier";

export function discoverVehicle(
  vin: string
) {

  const vinInfo =
    decodeVIN(vin);

  const bcm =
    identifyBCM(
      vinInfo.platform
    );

  const vehicle =
    vwVehicles.find(
      (v) =>
        v.bcm === bcm
    );

  return {

    vin,

    vinInfo,

    bcm,

    vehicle,
  };
}