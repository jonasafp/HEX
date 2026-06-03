import { apiGet }
  from "./client";

import type {
  BCMValue,
} from "../types/backend";

export async function
getBCMChannels() {

  return apiGet<
    BCMValue[]
  >("/bcm");
}