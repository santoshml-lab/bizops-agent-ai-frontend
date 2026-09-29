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

  const insights = agentResult?.insights || [];

  const recommendations =
    agentResult?.recommendations || [];

  const sources =
    agentResult?.external_sources || [];

  const finalResponse =
    agentResult?.final_response || "";

  return (
    <div className="app-shell">
      <Sidebar />

      <div className="main-area">
        <Header />

        <main className="dashboard">
          {/* HERO */}
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

          {/* STATS */}
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

          {/* ANALYSIS */}
          <AnalysisBox
            onResult={(result) => {
              setAgentResult(result);
            }}
          />

          {/* PIPELINE */}
          <AgentPipeline />

          {/* AI RESULT */}
          {agentResult && (
            <>
              {/* FINAL AI RESPONSE */}
              {finalResponse && (
                <section className="results-section">
                  <div className="section-heading">
                    <div>
                      <span className="eyebrow">
                        AI EXECUTIVE SUMMARY
                      </span>

                      <h2>Business Analysis</h2>

                      <p>
                        Final response generated from validated
                        business evidence.
                      </p>
                    </div>

                    <span className="result-count">
                      AI Result
                    </span>
                  </div>

                  <div className="analysis-box">
                    <div className="analysis-header">
                      <div className="analysis-title">
                        <div className="analysis-icon">
                          🧠
                        </div>

                        <div>
                          <h2>BizOps Agent Decision Support</h2>

                          <p>
                            Evidence-backed business interpretation
                          </p>
                        </div>
                      </div>

                      <span className="ai-badge">
                        ✓ Validated
                      </span>
                    </div>

                    <div className="query-area">
                      <p
                        style={{
                          color: "#cbd5e1",
                          fontSize: "14px",
                          lineHeight: "1.8",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        {finalResponse}
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {/* INSIGHTS */}
              <section className="results-section">
                <div className="section-heading">
                  <div>
                    <span className="eyebrow">
                      AI OUTPUT
                    </span>

                    <h2>Business Intelligence</h2>

                    <p>
                      Insights generated from validated business
                      evidence.
                    </p>
                  </div>

                  <span className="result-count">
                    {insights.length} Insights
                  </span>
                </div>

                <div className="insights-grid">
                  {insights.length > 0 ? (
                    insights.map((insight, index) => {
                      const text =
                        typeof insight === "string"
                          ? insight
                          : insight?.message ||
                            insight?.insight ||
                            insight?.description ||
                            JSON.stringify(insight);

                      let type = "default";

                      const lowerText =
                        text.toLowerCase();

                      if (
                        lowerText.includes("increase") ||
                        lowerText.includes("strongest") ||
                        lowerText.includes("highest")
                      ) {
                        type = "positive";
                      }

                      if (
                        lowerText.includes("decline") ||
                        lowerText.includes("decrease") ||
                        lowerText.includes("weakest") ||
                        lowerText.includes("risk")
                      ) {
                        type = "warning";
                      }

                      if (
                        lowerText.includes("recommend") ||
                        lowerText.includes("opportunity")
                      ) {
                        type = "success";
                      }

                      return (
                        <InsightCard
                          key={index}
                          type={type}
                          title={`Insight ${index + 1}`}
                          description={text}
                        />
                      );
                    })
                  ) : (
                    <InsightCard
                      type="default"
                      title="No insights available"
                      description="Run an analysis to generate business insights."
                    />
                  )}
                </div>
              </section>

              {/* RECOMMENDATIONS */}
              <section className="recommendations-section">
                <div className="section-heading">
                  <div>
                    <span className="eyebrow">
                      AI DECISION SUPPORT
                    </span>

                    <h2>Recommended Actions</h2>

                    <p>
                      Suggested next steps based on the current
                      evidence.
                    </p>
                  </div>

                  <span className="result-count">
                    {recommend
