import type {
  VehicleState,
} from "../state/vehicleState";

interface Props {

  state: VehicleState;

  updateState: (
    key: keyof VehicleState
  ) => void;
}

export function
VehicleStatePanel({
  state,
  updateState,
}: Props) {

  const items = [

    {
      key: "locked",
      label: "Travado",
    },

    {
      key: "doorOpen",
      label: "Porta aberta",
    },

    {
      key: "acc",
      label: "ACC",
    },

    {
      key: "ignition",
      label: "Ignição",
    },

    {
      key: "nightMode",
      label: "Modo noturno",
    },
  ] as const;

  return (

    <div
      style={{
        marginTop: 24,

        background:
          "rgba(10,10,14,0.75)",

        border:
          "1px solid rgba(255,255,255,0.05)",

        borderRadius: 24,

        padding: 22,
      }}
    >

      <h2
        style={{
          marginBottom: 18,
        }}
      >
        Estado do veículo
      </h2>

      <div
        style={{
          display: "flex",

          gap: 14,

          flexWrap: "wrap",
        }}
      >

        {items.map((item) => {

          const active =
            state[item.key];

          return (

            <button
              key={item.key}

              onClick={() =>
                updateState(
                  item.key
                )
              }

              style={{
                padding:
                  "14px 18px",

                borderRadius: 14,

                border:
                  active

                    ? "1px solid rgba(240,185,11,0.5)"

                    : "1px solid rgba(255,255,255,0.06)",

                background:
                  active

                    ? "rgba(240,185,11,0.14)"

                    : "rgba(255,255,255,0.03)",

                color: "white",

                cursor: "pointer",

                transition:
                  "0.25s",
              }}
            >

              {item.label}

            </button>
          );
        })}
      </div>

    </div>
  );
}