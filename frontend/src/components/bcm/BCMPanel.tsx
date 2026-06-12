import type {
  CodingProfile,
} from "../../types/coding";

interface Props {

  coding:
    CodingProfile;
}

export function BCMPanel({
  coding,
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
        BCM Coding
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection:
            "column",

          gap: 12,
        }}
      >

        {coding.values.map(
          (value) => (

            <div
              key={
                value.channelId
              }

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

              <span>
                {
                  value.channelId
                }
              </span>

              <strong
                style={{
                  color:
                    "#f0b90b",
                }}
              >
                {value.value}
              </strong>

            </div>
          )
        )}

      </div>

    </div>
  );
}