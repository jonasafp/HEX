import type {
  BCMModule,
} from "../../types/bcm";

export const bcmMQBLow:
  BCMModule = {

  id:
    "MQB_LOW_5Q0937084AA",

  name:
    "BCM MQB Low",

  platform:
    "MQB",

  partNumber:
    "5Q0937084AA",

  supportsLeuchte:
    true,

  supportsLongCoding:
    true,

  supportsAdaptation:
    true,

  channels: [
    "Leuchte2SL",
    "Leuchte3SL",
    "Leuchte20BR",
  ],
};