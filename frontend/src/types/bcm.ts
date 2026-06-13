export interface BCMModule {

  id: string;

  name: string;

  platform:
    | "PQ25"
    | "PQ35"
    | "MQB"
    | "MQB_EVO";

  partNumber: string;

  supportsLeuchte: boolean;

  supportsLongCoding: boolean;

  supportsAdaptation: boolean;

  channels: string[];
}