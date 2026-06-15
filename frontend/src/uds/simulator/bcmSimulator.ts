import type {
  UDSResponse,
} from "../../types/uds";

export function simulateUDS(
  request: string
): UDSResponse {

  const command =
    request.toUpperCase();

  switch (command) {

    case "22F190":

      return {

        success: true,

        service: "22",

        data:
          "VIN:WVWZZZAUZJP000001",

        timestamp:
          Date.now(),
      };

    case "221000":

      return {

        success: true,

        service: "22",

        data:
          "BCM_MQB_HIGH",

        timestamp:
          Date.now(),
      };

    case "22F187":

      return {

        success: true,

        service: "22",

        data:
          "5Q0937084CF",

        timestamp:
          Date.now(),
      };

    default:

      return {

        success: false,

        service: "7F",

        data:
          "Service Not Supported",

        timestamp:
          Date.now(),
      };
  }
}