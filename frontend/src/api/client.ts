const API_URL =
  "http://localhost:3001";

export async function
apiGet<T>(
  endpoint: string
): Promise<T> {

  const response =
    await fetch(
      `${API_URL}${endpoint}`
    );

  if (!response.ok) {

    throw new Error(
      "API Error"
    );
  }

  return response.json();
}