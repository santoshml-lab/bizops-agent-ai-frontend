const API_BASE_URL =
  "https://bizops-agent-ai-backend.onrender.com";

export async function runAgent(query) {
  console.log("=================================");
  console.log("BIZOPS API TEST START");
  console.log("URL:", `${API_BASE_URL}/agent/run`);
  console.log("QUERY:", query);
  console.log("=================================");

  try {
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

    console.log("POST RESPONSE RECEIVED");
    console.log("STATUS:", response.status);
    console.log("OK:", response.ok);

    const responseText = await response.text();

    console.log("RESPONSE BODY:", responseText);

    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status}: ${responseText}`
      );
    }

    try {
      return JSON.parse(responseText);
    } catch {
      throw new Error(
        `Backend returned invalid JSON: ${responseText}`
      );
    }

  } catch (error) {
    console.error(
      "================================="
    );

    console.error(
      "BIZOPS POST REQUEST FAILED"
    );

    console.error(
      "ERROR NAME:",
      error.name
    );

    console.error(
      "ERROR MESSAGE:",
      error.message
    );

    console.error(
      "================================="
    );

    throw new Error(
      `Failed to fetch: ${error.message}`
    );
  }
}
