export interface CodingByte {

  byte: number;

  bits: boolean[];
}

export interface LongCodingProfile {

  bcm: string;

  bytes: CodingByte[];
}