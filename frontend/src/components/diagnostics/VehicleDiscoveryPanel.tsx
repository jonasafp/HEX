import {
  useState,
} from "react";

import {
  readVIN,
} from "../../api/elm327";

import {
  discoverVehicle,
} from "../../discovery/discoverVehicle";

import {
  useVehicle,
} from "../../hooks/useVehicle";

export function VehicleDiscoveryPanel() {

  const [
    result,
    setResult,
  ] =
    useState<any>(
      null
    );

  const {
    setVehicle,
  } = useVehicle();

  async function scan() {

    const vin =
      await readVIN();

    const vehicle =
      discoverVehicle(vin);

    setResult(vehicle);

    if (
      vehicle.vehicle
    ) {
      setVehicle(
        vehicle.vehicle
      );
    }
  }

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
        Vehicle Discovery
      </h2>

      <button
        onClick={scan}
        style={{
          padding:
            "12px 20px",
          borderRadius: 12,
          cursor: "pointer",
        }}
      >
        Escanear Veículo
      </button>

      {result && (
        <div
          style={{
            marginTop: 16,
          }}
        >
          <div>
            VIN:
            {" "}
            {result.vin}
          </div>

          <div>
            Plataforma:
            {" "}
            {
              result.vinInfo
                .platform
            }
          </div>

          <div>
            BCM:
            {" "}
            {
              result.bcm
            }
          </div>

          <div>
            Modelo:
            {" "}
            {
              result.vehicle
                ?.model
            }
          </div>
        </div>
      )}
    </div>
  );
}