import type {
  BCMModule,
} from "../../types/bcm";

export const bcmMQBHigh: BCMModule = {

  id: "MQB_HIGH_5Q0937084CF",

  name:
    "BCM MQB High",

  platform:
    "MQB",

  partNumber:
    "5Q0937084CF",

  supportsLeuchte:
    true,

  supportsLongCoding:
    true,

  supportsAdaptation:
    true,

  channels: [
    "Leuchte2SL VLB10",
    "Leuchte3SL VRB21",
    "Leuchte20BR LA71",
    "Leuchte21BR RC8",
    "Leuchte23SL HLC10",
    "Leuchte24SL HRA65",
  ],
};