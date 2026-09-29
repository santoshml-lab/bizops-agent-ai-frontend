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

  const insights = Array.isArray(agentResult?.insights)
    ? agentResult.insights
    : [];

  const recommendations = Array.isArray(
    agentResult?.recommendations
  )
    ? agentResult.recommendations
    : [];

  const sources = Array.isArray(
    agentResult?.external_sources
  )
    ? agentResult.external_sources
    : [];

  const finalResponse =
    typeof agentResult?.final_response === "string"
      ? agentResult.final_response
      : "";

  const getText = (item) => {
    if (typeof item === "string") {
      return item;
    }

    if (!item || typeof item !== "object") {
      return String(item || "");
    }

    return (
      item.message ||
      item.insight ||
      item.description ||
      item.text ||
      item.content ||
      item.action ||
      item.recommendation ||
      item.title ||
      JSON.stringify(item)
    );
  };

  const getInsightType = (text) => {
    const lowerText = text.toLowerCase();

    if (
      lowerText.includes("decline") ||
      lowerText.includes("declined") ||
      lowerText.includes("decrease") ||
      lowerText.includes("decreased") ||
      lowerText.includes("weakest") ||
      lowerText.includes("risk") ||
      lowerText.includes("drop") ||
      lowerText.includes("lower")
    ) {
      return "warning";
    }

    if (
      lowerText.includes("increase") ||
      lowerText.includes("increased") ||
      lowerText.includes("strongest") ||
      lowerText.includes("highest") ||
      lowerText.includes("growth") ||
      lowerText.includes("positive") ||
      lowerText.includes("top")
    ) {
      return "positive";
    }

    if (
      lowerText.includes("opportunity") ||
      lowerText.includes("recommend")
    ) {
      return "success";
    }

    return "default";
  };

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


          {/* BUSINESS STATS */}

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


          {/* ASK BIZOPS AGENT */}

          <AnalysisBox
            onResult={(result) => {
              console.log(
                "APP RECEIVED AGENT RESULT:",
                result
              );

              setAgentResult(result);
            }}
          />


          {/* AGENT PIPELINE */}

          <AgentPipeline />


          {/* LIVE RESULTS */}

          {agentResult && (
            <>

              {/* EXECUTIVE SUMMARY */}

              {finalResponse && (
                <section className="results-section">

                  <div className="section-heading">

                    <div>
                      <span className="eyebrow">
                        AI EXECUTIVE SUMMARY
                      </span>

                      <h2>
                        Business Analysis
                      </h2>

                      <p>
                        Final response generated from
                        validated business evidence.
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
                          <h2>
                            BizOps Agent Decision Support
                          </h2>

                          <p>
                            Evidence-backed business
                            interpretation
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
                          margin: 0,
                        }}
                      >
                        {finalResponse}
                      </p>

                    </div>

                  </div>

                </section>
              )}


              {/* BUSINESS INSIGHTS */}

              <section className="results-section">

                <div className="section-heading">

                  <div>

                    <span className="eyebrow">
                      AI OUTPUT
                    </span>

                    <h2>
                      Business Intelligence
                    </h2>

                    <p>
                      Insights generated from validated
                      business evidence.
                    </p>

                  </div>

                  <span className="result-count">
                    {insights.length} Insights
                  </span>

                </div>


                <div className="insights-grid">

                  {insights.length > 0 ? (

                    insights.map((insight, index) => {

                      const text = getText(insight);

                      const type = getInsightType(text);

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

                    <h2>
                      Recommended Actions
                    </h2>

                    <p>
                      Suggested next steps based on
                      the current evidence.
                    </p>

                  </div>

                  <span className="result-count">
                    {recommendations.length} Actions
                  </span>

                </div>


                <div className="recommendations-grid">

                  {recommendations.length > 0 ? (

                    recommendations.map(
                      (recommendation, index) => {

                        const text =
                          getText(recommendation);

                        return (
                          <RecommendationCard
                            key={index}
                            number={index + 1}
                            title={`Recommended Action ${
                              index + 1
                            }`}
                            description={text}
                          />
                        );

                      }
                    )

                  ) : (

                    <RecommendationCard
                      number={1}
                      title="No recommendations available"
                      description="Run a business analysis to generate evidence-backed recommendations."
                    />

                  )}

                </div>

              </section>


              {/* EXTERNAL SOURCES */}

              <section className="sources-section">

                <div className="section-heading">

                  <div>

                    <span className="eyebrow">
                      EXTERNAL RESEARCH
                    </span>

                    <h2>
                      Evidence & Sources
                    </h2>

                    <p>
                      External sources used to provide
                      market context.
                    </p>

                  </div>

                  <span className="result-count">
                    {sources.length} Sources
                  </span>

                </div>


                <div className="sources-grid">

                  {sources.length > 0 ? (

                    sources.map((source, index) => {

                      const title =
                        source?.title ||
                        source?.name ||
                        source?.headline ||
                        `External Research Source ${
                          index + 1
                        }`;

                      const domain =
                        source?.domain ||
                        source?.source ||
                        source?.website ||
                        "External Source";

                      const description =
                        source?.description ||
                        source?.snippet ||
                        source?.summary ||
                        "External research source used for business context.";

                      return (
                        <SourceCard
                          key={index}
                          domain={domain}
                          title={title}
                          description={description}
                        />
                      );

                    })

                  ) : (

                    <SourceCard
                      domain="BizOps Agent"
                      title="No external sources"
                      description="This analysis did not require external market research."
                    />

                  )}

                </div>

              </section>


              {/* AGENT STATUS */}

              <section className="results-section">

                <div className="section-heading">

                  <div>

                    <span className="eyebrow">
                      AGENT STATUS
                    </span>

                    <h2>
                      Analysis Completed
                    </h2>

                    <p>
                      BizOps Agent successfully processed
                      the business request.
                    </p>

                  </div>

                  <span className="result-count">
                    {agentResult?.status === "success"
                      ? "Success"
                      : "Completed"}
                  </span>

                </div>


                <div
                  className="analysis-box"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "20px",
                    flexWrap: "wrap",
                  }}
                >

                  <div>

                    <h3
                      style={{
                        marginBottom: "6px",
                        color: "#e8eefc",
                      }}
                    >
                      Agent execution successful
                    </h3>

                    <p
                      style={{
                        margin: 0,
                        color: "#7f8ba3",
                        fontSize: "13px",
                      }}
                    >
                      Planning, execution, investigation,
                      validation and reasoning completed.
                    </p>

                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "9px 14px",
                      borderRadius: "999px",
                      background:
                        "rgba(34, 197, 94, 0.08)",
                      border:
                        "1px solid rgba(34, 197, 94, 0.18)",
                      color: "#86efac",
                      fontSize: "12px",
                      fontWeight: 700,
                    }}
                  >

                    <span
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        background: "#4ade80",
                        boxShadow:
                          "0 0 10px rgba(74, 222, 128, 0.7)",
                      }}
                    />

                    Agent Online

                  </div>

                </div>

              </section>

            </>
          )}

        </main>
      </div>
    </div>
  );
}

export default App;
