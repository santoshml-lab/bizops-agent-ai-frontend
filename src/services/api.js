const API_BASE_URL =
  "https://bizops-agent-ai-backend.onrender.com";

export async function runAgent(query) {
  try {
    // TEMPORARY CORS TEST
    const response = await fetch(
      `${API_BASE_URL}/`
    );

    if (!response.ok) {
      throw new Error(
        `Backend returned ${response.status}`
      );
    }

    const data = await response.json();

    console.log("BACKEND CONNECTION TEST:", data);

    return {
      status: "success",
      test: true,
      backend: data,
      insights: [],
    };
  } catch (error) {
    console.error(
      "BACKEND CONNECTION ERROR:",
      error
    );

    throw new Error(
      `Backend connection failed: ${error.message}`
    );
  }
}
