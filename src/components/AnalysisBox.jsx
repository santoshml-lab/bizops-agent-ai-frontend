import { useState } from "react";
import { ArrowRight, BrainCircuit } from "lucide-react";
import { runAgent } from "../services/api";

function AnalysisBox({ onResult }) {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  const handleAnalyze = () => {
    console.log("ANALYZE BUTTON CLICKED");
    console.log("QUERY:", query);

    if (!query.trim()) {
      setMessage("Please enter a question first.");
      return;
    }

    setMessage("Button is working ✅");

    if (onResult) {
      onResult({
        status: "success",
        test: true,
        message: "Frontend button is working.",
        query: query,
      });
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
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Type your business question..."
          rows="4"
        />

        <div className="query-footer">
          <span>
            Frontend connection test
          </span>

          <button
            type="button"
            className="analyze-button"
            onClick={handleAnalyze}
          >
            Analyze
            <ArrowRight size={17} />
          </button>
        </div>

        {message && (
          <div
            style={{
              marginTop: "14px",
              padding: "12px",
              borderRadius: "10px",
              background: "rgba(34, 197, 94, 0.1)",
              color: "#86efac",
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
