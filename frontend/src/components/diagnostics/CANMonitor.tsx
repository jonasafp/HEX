import type {
  CANFrame,
} from "../../types/backend";

interface Props {

  frames:
    CANFrame[];
}

export function
CANMonitor({
  frames,
}: Props) {

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
          marginBottom: 20,
        }}
      >
        CAN Monitor
      </h2>

      <div
        style={{
          display: "flex",

          flexDirection:
            "column",

          gap: 12,
        }}
      >

        {frames.map(
          (frame) => (

            <div
              key={frame.id}

              style={{
                display: "flex",

                justifyContent:
                  "space-between",

                background:
                  "rgba(255,255,255,0.03)",

                padding:
                  "12px 16px",

                borderRadius: 12,
              }}
            >

              <strong>
                {frame.id}
              </strong>

              <span>
                {frame.module}
              </span>

              <span>
                {frame.data}
              </span>

            </div>
          )
        )}

      </div>

    </div>
  );
}