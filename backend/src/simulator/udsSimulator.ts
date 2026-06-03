export function handleUDS(
  command: string
) {

  switch (command) {

    case "22F190":

      return {
        service:
          "Read VIN",

        response:
          "WVWZZZAUZJP000001",
      };

    case "220100":

      return {
        service:
          "Read BCM",

        response:
          "BCM_MQB_HIGH",
      };

    default:

      return {
        error:
          "Unknown UDS command",
      };
  }
}