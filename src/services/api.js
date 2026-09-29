const API_BASE_URL =
  "https://bizops-agent-ai-backend.onrender.com";

export async function runAgent(query) {
  const response = await fetch(
    `${API_BASE_URL}/test-post`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      `HTTP ${response.status}`
    );
  }

  return response.json();
}
