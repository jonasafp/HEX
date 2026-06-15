export interface UDSRequest {

  service: string;

  payload: string;
}

export interface UDSResponse {

  success: boolean;

  service: string;

  data: string;

  timestamp: number;
}