export function identifyPlatform(
  vin: string
) {

  if (
    vin.startsWith("WVW")
  ) {
    return "MQB";
  }

  return "UNKNOWN";
}