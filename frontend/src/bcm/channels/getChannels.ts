import {
  mqbHighChannels,
} from "./mqbHighChannels";

export function getChannels(
  bcmId: string
) {

  switch (bcmId) {

    case
      "MQB_HIGH_5Q0937084CF":

      return mqbHighChannels;

    default:

      return [];
  }
}