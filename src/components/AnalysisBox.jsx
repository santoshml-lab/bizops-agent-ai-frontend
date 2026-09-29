import { useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  Loader2,
  Sparkles,
} from "lucide-react";

import { runAgent } from "../services/api";

function AnalysisBox({ onResult }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!query.trim()) {
      return;
    }

    try {
      setLoading(true);

      const result = await runAgent(query);

      console.log("BizOps Agent Result:", result);

      if (onResult) {
        onResult(result);
      }
    } catch (error) {
      console.error("BizOps Agent Error:", error);
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
          onChange={(event) => setQuery(event.target.value)}
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
                <Loader2 size={17} className="spin" />
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
      </div>
    </section>
  );
}

export default AnalysisBox;
