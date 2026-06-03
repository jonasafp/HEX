import type {
  LightState,
  LightType,
} from "../types/lighting";

import "../styles/panel.css";

import { lightLabels } from "../data/lightLabels";

interface Props {

  lights: LightState[];

  supportedLights: string[];

  toggleLight: (
    type: LightType
  ) => void;
}

export function LightsPanel({
  lights,
  supportedLights,
  toggleLight,
}: Props) {

  return (
    <div
      style={{
        width: 340,

        padding: 24,

        borderLeft:
          "1px solid rgba(255,255,255,0.05)",

        background:
          "rgba(10,10,14,0.72)",

        backdropFilter:
          "blur(18px)",
      }}
    >

      <h2
        style={{
          marginBottom: 24,
          fontSize: 18,
        }}
      >
        Luzes disponíveis
      </h2>

      <div
        style={{
          display: "flex",

          flexDirection:
            "column",

          gap: 14,
        }}
      >

        {lights
          .filter((light) =>
            supportedLights.includes(
              light.type
            )
          )
          .map((light) => (

            <button
              key={light.type}

              onClick={() =>
                toggleLight(
                  light.type
                )
              }

              style={{

                background:
                  light.config.enabled
                    ? "rgba(240,185,11,0.10)"
                    : "rgba(255,255,255,0.03)",

                border:
                  light.config.enabled
                    ? "1px solid rgba(240,185,11,0.5)"
                    : "1px solid rgba(255,255,255,0.05)",

                transition:
                  "0.25s",

                color: "white",

                padding: "16px",

                borderRadius: 12,

                cursor: "pointer",

                textAlign: "left",
              }}
            >

              <div
                style={{
                  fontSize: 16,
                  marginBottom: 6,
                  fontWeight: 500,
                }}
              >
                {
                  lightLabels[
                    light.type
                  ]
                }
              </div>

              <div
                style={{
                  fontSize: 13,
                  color: "#888",
                }}
              >
                {
                  light.config
                    .enabled
                    ? "Ligado"
                    : "Desligado"
                }
              </div>

            </button>
          ))}

      </div>

    </div>
  );
}