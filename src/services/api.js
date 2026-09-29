const API_BASE_URL =
  "https://bizops-agent-ai-backend.onrender.com";

export async function runAgent(query) {
  console.log("Sending request to:", `${API_BASE_URL}/agent/run`);
  console.log("Query:", query);

  const response = await fetch(
    `${API_BASE_URL}/agent/run`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
    }
  );

  console.log("Response status:", response.status);

  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(
      `Backend error ${response.status}: ${errorText}`
    );
  }

  const data = await response.json();

  console.log("Agent response:", data);

  return data;
}
