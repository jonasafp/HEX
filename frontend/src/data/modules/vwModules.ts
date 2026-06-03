import type {
  VehicleModule,
} from "../../types/vehicle";

export const vwModules:
  VehicleModule[] = [

  {
    id: "09",

    name:
      "Central elétrica BCM",

    bcm: "BCM_MQB_HIGH",

    channels: [
      "Leuchte2SL VLB10",
      "Leuchte3SL VRB21",
      "ComingHome",
      "LeavingHome",
      "Tagfahrlicht",
    ],
  },

  {
    id: "19",

    name:
      "Gateway CAN",

    bcm: "BCM_MQB_HIGH",

    channels: [
      "InstallationList",
      "CANRouting",
    ],
  },

  {
    id: "5F",

    name:
      "Infotainment",

    bcm: "BCM_MQB_HIGH",

    channels: [
      "AmbientLighting",
      "DrivingProfiles",
    ],
  },
];