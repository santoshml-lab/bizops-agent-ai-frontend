import { ArrowUpRight, CheckCircle2, Target } from "lucide-react";

function RecommendationCard({
  number,
  title,
  description,
  priority = "Recommended",
}) {
  return (
    <article className="recommendation-card">
      <div className="recommendation-number">
        {String(number).padStart(2, "0")}
      </div>

      <div className="recommendation-content">
        <div className="recommendation-top">
          <span className="recommendation-label">
            <Target size={14} />
            {priority}
          </span>

          <CheckCircle2 size={18} />
        </div>

        <h3>{title}</h3>

        <p>{description}</p>

        <button className="action-link">
          View action
          <ArrowUpRight size={15} />
        </button>
      </div>
    </article>
  );
}

export default RecommendationCard;
