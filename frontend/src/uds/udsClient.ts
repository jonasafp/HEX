import {
  simulateUDS,
} from "./simulator/bcmSimulator";

import type {
  UDSResponse,
} from "../types/uds";

export async function sendUDS(
  command: string
): Promise<UDSResponse> {

  await new Promise(
    (resolve) =>
      setTimeout(
        resolve,
        150
      )
  );

  return simulateUDS(
    command
  );
}