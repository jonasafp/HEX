import type {
  BCMModule,
} from "../../types/bcm";

export const mqbHigh: BCMModule = {

  id: "BCM_MQB_HIGH",

  name: "MQB High BCM",

  platform: "MQB",

  partNumber:
    "5Q0937084CF",

  supportsLeuchte: true,

  supportsLongCoding: true,

  supportsAdaptation: true,

  channels: [

    "Leuchte2SL VLB10",
    "Leuchte3SL VRB21",
    "Leuchte12NL LB45",
    "Leuchte20BR LA71",
    "Leuchte21BR RC8",

  ],
};