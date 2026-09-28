import { ArrowRight, BrainCircuit, Sparkles } from "lucide-react";

function AnalysisBox() {
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
          placeholder="Example: Analyze why our sales dropped this month and suggest 3 actions..."
          rows="4"
          aria-label="Business analysis question"
        />

        <div className="query-footer">
          <span>
            Ask about revenue, products, regions, trends or business risks.
          </span>

          <button className="analyze-button">
            Analyze
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default AnalysisBox;
