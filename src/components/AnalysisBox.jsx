import { useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  Loader2,
  Sparkles,
  AlertCircle,
} from "lucide-react";

import { runAgent } from "../services/api";

function AnalysisBox({ onResult }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!query.trim()) {
      return;
    }

    setError("");
    setLoading(true);

    try {
      const result = await runAgent(query);

      console.log("BizOps Agent Result:", result);

      if (onResult) {
        onResult(result);
      }
    } catch (err) {
      console.error("BizOps Agent Error:", err);

      setError(
        err?.message ||
          "Unable to connect to the BizOps Agent backend."
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

        <span className="ai-badge">
          <Sparkles size={14} />
          AI Powered
        </span>
      </div>

      <div className="query-area">
        <textarea
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setError("");
          }}
          placeholder="Example: Analyze why our sales dropped this month and suggest 3 actions..."
          rows="4"
          aria-label="Business analysis question"
          disabled={loading}
        />

        <div className="query-footer">
          <span>
            Ask about revenue, products, regions, trends or business risks.
          </span>

          <button
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

        {error && (
          <div
            style={{
              marginTop: "14px",
              padding: "12px 14px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              gap: "9px",
              color: "#ff9b9b",
              background: "rgba(239, 68, 68, 0.08)",
              border:
                "1px solid rgba(239, 68, 68, 0.18)",
              fontSize: "13px",
            }}
          >
            <AlertCircle size={17} />
            <span>{error}</span>
          </div>
        )}
      </div>
    </section>
  );
}

export default AnalysisBox;
