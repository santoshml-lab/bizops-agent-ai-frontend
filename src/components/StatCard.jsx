import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  MapPin,
  Package,
  TrendingUp,
} from "lucide-react";

const icons = {
  revenue: TrendingUp,
  product: Package,
  region: MapPin,
  trend: BarChart3,
};

function StatCard({
  type = "revenue",
  title,
  value,
  subtitle,
  trend,
  positive = true,
}) {
  const Icon = icons[type] || BarChart3;

  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <div className={`stat-icon ${type}`}>
          <Icon size={20} />
        </div>

        {trend && (
          <span
            className={`stat-trend ${
              positive ? "positive" : "negative"
            }`}
          >
            {positive ? (
              <ArrowUpRight size={15} />
            ) : (
              <ArrowDownRight size={15} />
            )}

            {trend}
          </span>
        )}
      </div>

      <div className="stat-content">
        <span className="stat-title">{title}</span>

        <h3>{value}</h3>

        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default StatCard;
