import {
  scanVehicle,
} from "../../scanner/vehicleScanner";

import type {
  VehicleProfile,
} from "../../types/vehicle";

interface Props {
  vehicle: VehicleProfile | null;
}

export function VehicleScannerPanel({
  vehicle,
}: Props) {

  if (!vehicle) {
    return null;
  }

  const result =
    scanVehicle(vehicle);

  return (

    <div
      style={{
        marginTop: 24,
        padding: 24,
        borderRadius: 20,
        background:
          "rgba(255,255,255,0.03)",
      }}
    >
      <h2>
        Vehicle Scanner
      </h2>

      <p>
        Plataforma:
        {" "}
        {result.platform.platform}
      </p>

      <p>
        BCM:
        {" "}
        {result.bcm.bcm}
      </p>

      <p>
        Módulos:
        {" "}
        {result.modules.length}
      </p>
    </div>
  );
}