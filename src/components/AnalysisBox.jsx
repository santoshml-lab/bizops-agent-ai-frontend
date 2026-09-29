import { useState } from "react";
import { ArrowRight, BrainCircuit, Loader2 } from "lucide-react";
import { runAgent } from "../services/api";

function AnalysisBox({ onResult }) {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    console.log("ANALYZE BUTTON CLICKED");
    console.log("QUERY:", query);

    if (!query.trim()) {
      setMessage("Please enter a question first.");
      return;
    }

    setLoading(true);
    setMessage("Calling BizOps Agent...");

    try {
      const result = await runAgent(query);

      console.log("FINAL AGENT RESULT:", result);

      setMessage("Backend response received ✅");
      console.log(
      "FULL BACKEND RESPONSE:",
      JSON.stringify(result, null, 2)
);

      if (onResult) {
        onResult(result);
      }
    } catch (error) {
      console.error("AGENT ERROR:", error);

      setMessage(
        `Backend request failed: ${error.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="analysis-box">
      <div className="analysis-header">
        <div className="analysis-title">
          <div className="analysis-icon">
            <BrainCircuit size={21} />
          </div>

          <div>
            <h2>Ask BizOps Agent</h2>

            <p>
              Ask a business question and let the AI investigate it.
            </p>
          </div>
        </div>
      </div>

      <div className="query-area">
        <textarea
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setMessage("");
          }}
          placeholder="Type your business question..."
          rows="4"
          disabled={loading}
        />

        <div className="query-footer">
          <span>
            Ask about revenue, products, regions, trends or business risks.
          </span>

          <button
            type="button"
            className="analyze-button"
            onClick={handleAnalyze}
            disabled={loading || !query.trim()}
          >
            {loading ? (
              <>
                <Loader2
                  size={17}
                  className="spin"
                />
                Analyzing...
              </>
            ) : (
              <>
                Analyze
                <ArrowRight size={17} />
              </>
            )}
          </button>
        </div>

        {message && (
          <div
            style={{
              marginTop: "14px",
              padding: "12px 14px",
              borderRadius: "10px",
              background:
                message.includes("failed")
                  ? "rgba(239, 68, 68, 0.1)"
                  : "rgba(34, 197, 94, 0.1)",
              color:
                message.includes("failed")
                  ? "#ff9b9b"
                  : "#86efac",
              border:
                message.includes("failed")
                  ? "1px solid rgba(239, 68, 68, 0.18)"
                  : "1px solid rgba(34, 197, 94, 0.18)",
              fontSize: "13px",
            }}
          >
            {message}
          </div>
        )}
      </div>
    </section>
  );
}

export default AnalysisBox;
