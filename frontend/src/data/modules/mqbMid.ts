import type {
  BCMModule,
} from "../../types/bcm";

export const mqbMid: BCMModule = {

  id: "BCM_MQB_LOW",

  name: "MQB Mid BCM",

  platform: "MQB",

  partNumber:
    "5Q0937084BD",

  supportsLeuchte: true,

  supportsLongCoding: true,

  supportsAdaptation: true,

  channels: [

    "Leuchte2SL VLB10",

    "Leuchte3SL VRB21",

  ],
};