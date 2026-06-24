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

    // DRL
    "Leuchte2SL VLB10",
    "Leuchte2SL VLB10-Lichtfunktion A",
    "Leuchte2SL VLB10-Dimmwert AB",

    // DRL Direito
    "Leuchte3SL VRB21",
    "Leuchte3SL VRB21-Lichtfunktion A",
    "Leuchte3SL VRB21-Dimmwert AB",

    // Freio Esquerdo
    "Leuchte20BR LA71",
    "Leuchte20BR LA71-Lichtfunktion A",
    "Leuchte20BR LA71-Lichtfunktion B",
    "Leuchte20BR LA71-Dimmwert AB",

    // Freio Direito
    "Leuchte21BR RC8",
    "Leuchte21BR RC8-Lichtfunktion A",
    "Leuchte21BR RC8-Lichtfunktion B",
    "Leuchte21BR RC8-Dimmwert AB",

    // Lanterna Traseira Esquerda
    "Leuchte23SL HLC10",
    "Leuchte23SL HLC10-Lichtfunktion A",
    "Leuchte23SL HLC10-Dimmwert AB",

    // Lanterna Traseira Direita
    "Leuchte24SL HRA65",
    "Leuchte24SL HRA65-Lichtfunktion A",
    "Leuchte24SL HRA65-Dimmwert AB",
  ],
};