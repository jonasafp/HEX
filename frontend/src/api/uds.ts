import { apiGet } from "./client";

export interface UDSResponse {
  service?: string;

  response?: string;

  error?: string;
}

export async function sendUDSCommand(
  command: string
): Promise<UDSResponse> {

  return apiGet<UDSResponse>(
    `/uds/${command}`
  );
}