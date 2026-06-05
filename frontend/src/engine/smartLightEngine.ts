import type {
  EventConfig,
  LightState,
} from "../types/lighting";

import type {
  VehicleState,
} from "../state/vehicleState";

function enableLight(
  lights: LightState[],
  type: string
) {

  const light =
    lights.find(
      (l) =>
        l.type === type
    );

  if (!light) {
    return;
  }

  light.config.enabled = true;
}

function disableAll(
  lights: LightState[]
) {

  lights.forEach((light) => {

    light.config.enabled = false;
  });
}

export function applyVehicleLogic(
  profile: EventConfig,
  state: VehicleState
): EventConfig {

  const clonedLights =
    structuredClone(
      profile.lights
    );

  disableAll(
    clonedLights
  );

  /*
    VEÍCULO TRAVADO
  */

  if (state.locked) {

    return {
      ...profile,

      lights:
        clonedLights,
    };
  }

  /*
    ACC
  */

  if (state.acc) {

    enableLight(
      clonedLights,
      "drl"
    );
  }

  /*
    IGNIÇÃO
  */

  if (
    state.ignition
  ) {

    enableLight(
      clonedLights,
      "low_beam"
    );
  }

  /*
    MODO NOTURNO
  */

  if (
    state.nightMode
  ) {

    enableLight(
      clonedLights,
      "fog_light"
    );
  }

  /*
    PORTA ABERTA
  */

  if (
    state.doorOpen
  ) {

    enableLight(
      clonedLights,
      "left_indicator"
    );

    enableLight(
      clonedLights,
      "right_indicator"
    );
  }

  return {

    ...profile,

    lights:
      clonedLights,
  };
}