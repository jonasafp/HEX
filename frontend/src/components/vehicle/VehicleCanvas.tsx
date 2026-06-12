import "./VehicleCanvas.css";

import type {
  LightState,
  LightType,
} from "../../types/lighting";

interface Props {
  lights: LightState[];

  toggleLight: (
    type: LightType
  ) => void;
}

export function VehicleCanvas({
  lights,
  toggleLight,
}: Props) {
  const getLight = (
    type: LightType
  ) =>
    lights.find(
      (light) =>
        light.type === type
    );

  const getClasses = (
    type: LightType
  ) => {

    const light =
      getLight(type);

    if (!light) {
      return "";
    }

    if (
      !light.config.enabled
    ) {
      return "";
    }

    return `
    active
    ${light.config.animation}
  `;
  };

  return (
    <div className="canvas-wrapper">
      <div className="car-shell">

        {/* DRL */}

        <div
          className={`light-layer drl-left ${getClasses(
            "drl"
          )}`}
          onClick={() =>
            toggleLight("drl")
          }
        />

        <div
          className={`light-layer drl-right ${getClasses(
            "drl"
          )}`}
          onClick={() =>
            toggleLight("drl")
          }
        />

        {/* SETAS */}

        <div
          className={`light-layer indicator-left ${getClasses(
            "left_indicator"
          )}`}
          onClick={() =>
            toggleLight(
              "left_indicator"
            )
          }
        />

        <div
          className={`light-layer indicator-right ${getClasses(
            "right_indicator"
          )}`}
          onClick={() =>
            toggleLight(
              "right_indicator"
            )
          }
        />

        {/* FAROL BAIXO */}

        <div
          className={`light-layer low-left ${getClasses(
            "low_beam"
          )}`}
          onClick={() =>
            toggleLight(
              "low_beam"
            )
          }
        />

        <div
          className={`light-layer low-right ${getClasses(
            "low_beam"
          )}`}
          onClick={() =>
            toggleLight(
              "low_beam"
            )
          }
        />

      </div>
    </div>
  );
}