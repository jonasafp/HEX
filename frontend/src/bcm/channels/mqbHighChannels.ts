export interface BCMChannel {

  id: string;

  label: string;

  values: string[];
}

export const mqbHighChannels:
  BCMChannel[] = [

  {
    id:
      "Leuchte20BR LA71-Lichtfunktion A",

    label:
      "Brake Light Function A",

    values: [
      "not active",
      "Bremslicht",
      "Standlicht allgemein",
      "Tagfahrlicht",
    ],
  },

  {
    id:
      "Leuchte20BR LA71-Dimmwert AB",

    label:
      "Brake Light Brightness",

    values: [
      "0",
      "25",
      "50",
      "75",
      "100",
      "127",
    ],
  },

  {
    id:
      "Leuchte2SL VLB10-Lichtfunktion A",

    label:
      "DRL Function",

    values: [
      "not active",
      "Tagfahrlicht",
      "Standlicht allgemein",
    ],
  },

  {
    id:
      "Leuchte2SL VLB10-Dimmwert AB",

    label:
      "DRL Brightness",

    values: [
      "0",
      "25",
      "50",
      "75",
      "100",
      "127",
    ],
  },
];