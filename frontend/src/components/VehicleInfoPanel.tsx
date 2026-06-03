import type {
  BackendVehicle,
} from "../types/backend";

interface Props {

  vehicle:
    BackendVehicle
    | null;
}

export function
VehicleInfoPanel({
  vehicle,
}: Props) {

  if (!vehicle) {

    return null;
  }

  return (

    <div
      style={{
        marginBottom: 24,

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
        Veículo Detectado
      </h2>

      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(3, 1fr)",

          gap: 16,
        }}
      >

        <Info
          label="Marca"
          value={vehicle.brand}
        />

        <Info
          label="Modelo"
          value={vehicle.model}
        />

        <Info
          label="Plataforma"
          value={vehicle.platform}
        />

        <Info
          label="BCM"
          value={vehicle.bcm}
        />

        <Info
          label="Ano"
          value={
            String(
              vehicle.year
            )
          }
        />

        <Info
          label="VIN"
          value={vehicle.vin}
        />

      </div>

    </div>
  );
}

function Info({
  label,
  value,
}: {
  label: string;

  value: string;
}) {

  return (

    <div
      style={{
        background:
          "rgba(255,255,255,0.03)",

        padding: 16,

        borderRadius: 14,
      }}
    >

      <div
        style={{
          color: "#888",

          fontSize: 13,

          marginBottom: 8,
        }}
      >
        {label}
      </div>

      <strong>
        {value}
      </strong>

    </div>
  );
}