import type { LightState } from "../types/lighting";
import "../styles/panel.css";
import { lightLabels } from "../data/lightLabels";

interface Props {
  lights: LightState[];
}

export function ConfigurationSummary({
  lights,
}: Props) {
  return (
    <div
      style={{
        marginTop: 30,
        background: "rgba(15,15,20,0.72)",
        border: "1px solid rgba(255,255,255,0.05)",
        backdropFilter: "blur(18px)",
        borderRadius: 24,
        padding: 28,
        boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
      }}
    >
      <h2
        style={{
          marginBottom: 20,
          fontSize: 18,
        }}
      >
        Resumo da configuração
      </h2>

      <div
        style={{
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        {lights.map((light) => (
          <div
            key={lightLabels[light.type]}
            style={{
              padding: 14,
              background: "#1b1b20",
              borderRadius: 12,
              minWidth: 120,
              border: "1px solid rgba(255,255,255,0.04)",
            }}
          >
            <div>{lightLabels[light.type]}</div>

            <div
              style={{
                marginTop: 8,
                color: light.config.enabled
                  ? "#52ff83"
                  : "#888",
              }}
            >
              {light.config.enabled
                ? "Ligado"
                : "Desligado"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}