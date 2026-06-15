import type {
  LightState,
} from "../../types/lighting";

import type {
  LongCodingProfile,
} from "../../types/longCoding";

export function generateMQBLongCoding(
  lights: LightState[]
): LongCodingProfile {

  const bytes = Array.from(
    { length: 30 },
    (_, index) => ({
      byte: index,
      bits: Array(8).fill(false),
    })
  );

  const drl =
    lights.find(
      (l) => l.type === "drl"
    );

  const fog =
    lights.find(
      (l) => l.type === "fog_light"
    );

  const low =
    lights.find(
      (l) => l.type === "low_beam"
    );

  if (drl?.config.enabled) {
    bytes[14].bits[2] = true;
  }

  if (fog?.config.enabled) {
    bytes[18].bits[4] = true;
  }

  if (low?.config.enabled) {
    bytes[20].bits[1] = true;
  }

  return {

    bcm: "MQB",

    bytes,
  };
}