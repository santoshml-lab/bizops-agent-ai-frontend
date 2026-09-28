import {
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

const icons = {
  positive: TrendingUp,
  warning: AlertTriangle,
  success: CheckCircle2,
  default: Lightbulb,
};

function InsightCard({
  type = "default",
  title,
  description,
}) {
  const Icon = icons[type] || icons.default;

  return (
    <article className={`insight-card ${type}`}>
      <div className="insight-icon">
        <Icon size={19} />
      </div>

      <div className="insight-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default InsightCard;
