import {
  BrainCircuit,
  CheckCircle2,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    title: "Planning",
    description: "Breaks the business question into tasks.",
    icon: BrainCircuit,
  },
  {
    title: "Analysis",
    description: "Analyzes business data and trends.",
    icon: Sparkles,
  },
  {
    title: "Investigation",
    description: "Finds deeper product and regional evidence.",
    icon: Search,
  },
  {
    title: "Validation",
    description: "Checks whether evidence supports the findings.",
    icon: ShieldCheck,
  },
  {
    title: "Reasoning",
    description: "Converts evidence into business actions.",
    icon: CheckCircle2,
  },
];

function AgentPipeline() {
  return (
    <section className="pipeline-card">
      <div className="section-heading">
        <div>
          <h2>Agent Intelligence Pipeline</h2>
          <p>
            Watch how BizOps Agent processes a business question.
          </p>
        </div>

        <span className="pipeline-status">
          <span className="status-dot"></span>
          Ready
        </span>
      </div>

      <div className="pipeline">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div className="pipeline-step" key={step.title}>
              <div className="pipeline-icon">
                <Icon size={19} />
              </div>

              <div className="pipeline-content">
                <strong>{step.title}</strong>
                <span>{step.description}</span>
              </div>

              {index < steps.length - 1 && (
                <div className="pipeline-line"></div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AgentPipeline;
