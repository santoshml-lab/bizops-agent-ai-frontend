const API_BASE_URL =
  "https://bizops-agent-ai-backend.onrender.com";

export async function runAgent(query) {
  const response = await fetch(
    `${API_BASE_URL}/agent/run`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        query,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      `Agent request failed: ${response.status}`
    );
  }

  return response.json();
}
