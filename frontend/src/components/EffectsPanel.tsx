import type {
  LightState,
} from "../types/lighting";

interface Props {
  selectedLight:
    | LightState
    | null;

  updateAnimation: (
    animation:
      | "steady"
      | "blink"
      | "fade"
      | "sequential"
  ) => void;
}

export function EffectsPanel({
  selectedLight,
  updateAnimation,
}: Props) {

  if (!selectedLight) {
    return null;
  }

  const animations = [
    "steady",
    "blink",
    "fade",
    "sequential",
  ];

  return (
    <div
      style={{
        marginTop: 24,

        background:
          "rgba(15,15,20,0.72)",

        border:
          "1px solid rgba(255,255,255,0.05)",

        borderRadius: 24,

        padding: 24,
      }}
    >
      <h2
        style={{
          marginBottom: 18,
        }}
      >
        Efeito da luz
      </h2>

      <div
        style={{
          display: "flex",
          gap: 12,
        }}
      >
        {animations.map((anim) => {

          const active =
            selectedLight.config
              .animation === anim;

          return (
            <button
              key={anim}

              onClick={() =>
                updateAnimation(
                  anim as any
                )
              }

              style={{
                padding:
                  "12px 18px",

                borderRadius: 14,

                border: active
                  ? "1px solid rgba(240,185,11,0.5)"
                  : "1px solid rgba(255,255,255,0.05)",

                background: active
                  ? "rgba(240,185,11,0.12)"
                  : "rgba(255,255,255,0.03)",

                color: "white",

                cursor: "pointer",
              }}
            >
              {anim}
            </button>
          );
        })}
      </div>
    </div>
  );
}