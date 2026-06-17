import {
  useVehicle,
} from "../../hooks/useVehicle";

export function VehicleInfoPanel() {

  const {
    vehicle,
  } = useVehicle();

  if (!vehicle) {
    return null;
  }

  return (
    <div
      style={{
        marginTop: 24,
        padding: 22,
        borderRadius: 24,
        background:
          "rgba(10,10,14,0.75)",
        border:
          "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <h2
        style={{
          marginBottom: 16,
        }}
      >
        Veículo Detectado
      </h2>

      <div>
        Modelo:
        {" "}
        <strong>
          {vehicle.model}
        </strong>
      </div>

      <div>
        Plataforma:
        {" "}
        <strong>
          {vehicle.platform}
        </strong>
      </div>

      <div>
        BCM:
        {" "}
        <strong>
          {vehicle.bcm}
        </strong>
      </div>

      <div>
        Ano:
        {" "}
        <strong>
          {vehicle.yearStart}
          {" - "}
          {vehicle.yearEnd}
        </strong>
      </div>
    </div>
  );
}