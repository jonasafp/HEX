import type {
  VehicleProfile,
} from "../types/vehicle";

import {
  CustomDropdown,
} from "./ui/CustomDropdown";

interface Props {

  vehicles:
  VehicleProfile[];

  selectedVehicle:
  VehicleProfile;

  onSelect: (
    vehicle:
      VehicleProfile
  ) => void;
}

export function VehicleSelector({
  vehicles,
  selectedVehicle,
  onSelect,
}: Props) {

  return (
    <div
      style={{
        marginBottom: 24,

        display: "flex",

        gap: 16,
      }}
    >

      <CustomDropdown
        value={selectedVehicle.id}

        onChange={(value) => {

          const vehicle =
            vehicles.find(
              (v) =>
                v.id === value
            );

          if (vehicle) {

            onSelect(
              vehicle
            );
          }
        }}

        options={vehicles.map(
          (vehicle) => ({
            label:
              vehicle.model,

            value:
              vehicle.id,
          })
        )}
      />

      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems:
            "center",

          color: "#8c8c98",
        }}
      >
        <span>
          Plataforma:
        </span>

        <strong
          style={{
            color: "#f0b90b",
          }}
        >
          {
            selectedVehicle
              .platform
          }
        </strong>
      </div>

    </div>
  );
}