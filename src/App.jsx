import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import AnalysisBox from "./components/AnalysisBox";
import AgentPipeline from "./components/AgentPipeline";
import InsightCard from "./components/InsightCard";
import RecommendationCard from "./components/RecommendationCard";
import SourceCard from "./components/SourceCard";

function App() {
  const [agentResult, setAgentResult] = useState(null);

  return (
    <div className="app-shell">
      <Sidebar />

      <div className="main-area">
        <Header />

        <main className="dashboard">
          <section className="welcome-section">
            <div>
              <span className="eyebrow">
                AI BUSINESS OPERATIONS
              </span>

              <h1>
                Understand your business.
                <br />
                <span>Act with intelligence.</span>
              </h1>

              <p>
                BizOps Agent AI analyzes your business data,
                investigates deeper patterns, validates evidence,
                and turns findings into actionable decisions.
              </p>
            </div>
          </section>

          <section className="stats-grid">
            <StatCard
              type="revenue"
              title="Total Revenue"
              value="₹11.17L"
              subtitle="Jan – Jun 2026"
            />

            <StatCard
              type="trend"
              title="Latest MoM"
              value="+2.41%"
              subtitle="June vs May"
              trend="+2.41%"
              positive={true}
            />

            <StatCard
              type="product"
              title="Top Product"
              value="Product A"
              subtitle="₹4.68L total revenue"
            />

            <StatCard
              type="region"
              title="Top Region"
              value="North"
              subtitle="₹3.25L total revenue"
            />
          </section>

          <AnalysisBox
            onResult={(result) => {
              setAgentResult(result);
            }}
          />

          <AgentPipeline />

          <section className="results-section">
            <div className="section-heading">
              <div>
                <span className="eyebrow">AI OUTPUT</span>

                <h2>Business Intelligence</h2>

                <p>
                  Insights generated from validated business evidence.
                </p>
              </div>

              <span className="result-count">
                {agentResult?.insights?.length || 11} Insights
              </span>
            </div>

            <div className="insights-grid">
              <InsightCard
                type="positive"
                title="Latest revenue increased"
                description="Revenue increased 2.41% in June 2026 compared with May."
              />

              <InsightCard
                type="warning"
                title="Historical declines detected"
                description="Revenue declined in April and May before recovering in June."
              />

              <InsightCard
                type="success"
                title="Product A leads revenue"
                description="Product A generated ₹4.68L in total revenue."
              />

              <InsightCard
                type="warning"
                title="Product C needs attention"
                description="Product C generated the lowest total product revenue."
              />

              <InsightCard
                type="default"
                title="North leads regional revenue"
                description="North generated the highest regional revenue at ₹3.25L."
              />

              <InsightCard
                type="warning"
                title="East is the weakest region"
                description="East generated ₹2.35L and requires deeper regional analysis."
              />
            </div>
          </section>

          <section className="recommendations-section">
            <div className="section-heading">
              <div>
                <span className="eyebrow">
                  AI DECISION SUPPORT
                </span>

                <h2>Recommended Actions</h2>

                <p>
                  Suggested next steps based on the current evidence.
                </p>
              </div>

              <span className="result-count">
                3 Actions
              </span>
            </div>

            <div className="recommendations-grid">
              <RecommendationCard
                number={1}
                title="Investigate historical revenue declines"
                description="Compare product and regional movement across the declining months and the latest recovery."
              />

              <RecommendationCard
                number={2}
                title="Review product and regional drivers"
                description="Examine pricing, units, discounts and regional contribution to identify internal drivers."
              />

              <RecommendationCard
                number={3}
                title="Monitor business signals together"
                description="Track revenue, units, pricing, discounts and market signals for earlier detection."
              />
            </div>
          </section>

          <section className="sources-section">
            <div className="section-heading">
              <div>
                <span className="eyebrow">
                  EXTERNAL RESEARCH
                </span>

                <h2>Evidence & Sources</h2>

                <p>
                  External sources used to provide market context.
                </p>
              </div>

              <span className="result-count">
                5 Sources
              </span>
            </div>

            <div className="sources-grid">
              <SourceCard
                domain="Canidium"
                title="Pricing Strategy in a Tough Market"
              />

              <SourceCard
                domain="That Agency"
                title="Consumer Behavior Trends 2026"
              />

              <SourceCard
                domain="Euromonitor"
                title="Ways to Identify Market Opportunities"
              />

              <SourceCard
                domain="Harvard Business School"
                title="Eight Trends for 2026"
              />

              <SourceCard
                domain="Indeed"
                title="External Environmental Factors"
              />
            </div>
          </section>

          {agentResult && (
            <section className="results-section">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">
                    LIVE AGENT RESPONSE
                  </span>

                  <h2>Latest Analysis Result</h2>

                  <p>
                    This result was returned by the BizOps Agent backend.
                  </p>
                </div>
              </div>

              <pre
                style={{
                  padding: "20px",
                  borderRadius: "14px",
                  background: "rgba(12, 18, 31, 0.9)",
                  border:
                    "1px solid rgba(148, 163, 184, 0.08)",
                  color: "#9fb8e8",
                  fontSize: "11px",
                  lineHeight: "1.6",
                  overflowX: "auto",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}
              >
                {JSON.stringify(agentResult, null, 2)}
              </pre>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
