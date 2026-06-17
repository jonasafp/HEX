export function identifyBCM(
  platform: string
) {

  switch (
    platform
  ) {

    case "MQB":
      return "BCM_MQB_HIGH";

    case "PQ":
      return "BCM_PQ";

    case "MLB":
      return "BCM_MLB";

    default:
      return "UNKNOWN";
  }
}