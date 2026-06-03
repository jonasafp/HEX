import "./VehiclePreview.css";

import type {
  LightState,
  LightType,
} from "../types/lighting";

interface Props {
  lights: LightState[];

  toggleLight: (
    type: LightType
  ) => void;
}

export function VehiclePreview({
  lights,
  toggleLight,
}: Props) {
  const isEnabled = (
    type: LightType
  ) =>
    lights.find(
      (light) =>
        light.type === type
    )?.enabled;

  return (
    <div className="vehicle-container">
      <div className="car-body">

        <div
          className={`light drl left ${
            isEnabled("drl")
              ? "active"
              : ""
          }`}
          onClick={() =>
            toggleLight("drl")
          }
        />

        <div
          className={`light drl right ${
            isEnabled("drl")
              ? "active"
              : ""
          }`}
          onClick={() =>
            toggleLight("drl")
          }
        />

        <div
          className={`light indicator left ${
            isEnabled(
              "left_indicator"
            )
              ? "active"
              : ""
          }`}
          onClick={() =>
            toggleLight(
              "left_indicator"
            )
          }
        />

        <div
          className={`light indicator right ${
            isEnabled(
              "right_indicator"
            )
              ? "active"
              : ""
          }`}
          onClick={() =>
            toggleLight(
              "right_indicator"
            )
          }
        />

      </div>
    </div>
  );
}