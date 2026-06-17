export interface VINInfo {

  vin: string;

  manufacturer: string;

  platform: string;
}

export function decodeVIN(
  vin: string
): VINInfo {

  if (
    vin.startsWith("WVW")
  ) {
    return {
      vin,
      manufacturer:
        "Volkswagen",
      platform:
        "MQB",
    };
  }

  return {
    vin,
    manufacturer:
      "Unknown",
    platform:
      "Unknown",
  };
}