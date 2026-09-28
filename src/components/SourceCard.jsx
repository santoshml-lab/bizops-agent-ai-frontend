import { ExternalLink, Globe2 } from "lucide-react";

function SourceCard({
  title,
  domain,
  description = "External research source used for business context.",
}) {
  return (
    <article className="source-card">
      <div className="source-icon">
        <Globe2 size={18} />
      </div>

      <div className="source-content">
        <div className="source-meta">
          <span>{domain}</span>
          <ExternalLink size={14} />
        </div>

        <h3>{title}</h3>

        <p>{description}</p>
      </div>
    </article>
  );
}

export default SourceCard;
