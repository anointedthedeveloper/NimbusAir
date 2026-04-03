import Link from "next/link";
import type { LucideIcon, LucideProps } from "lucide-react";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, action }: SectionHeadingProps) {
  return (
    <div className="section-header">
      <div>
        {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {action}
    </div>
  );
}

type MetricCardProps = {
  label: string;
  value: string;
  note: string;
  icon: LucideIcon;
};

export function MetricCard({ label, value, note, icon: Icon }: MetricCardProps) {
  return (
    <article className="card metric">
      <div className="metric__top">
        <div className="badge">
          <Icon size={16} />
          {label}
        </div>
      </div>
      <div className="metric__value">{value}</div>
      <div className="metric__label">{note}</div>
    </article>
  );
}

type CardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function FeatureCard({ title, description, icon: Icon }: CardProps) {
  return (
    <article className="card">
      <div className="badge badge--gold">
        <Icon size={16} />
        {title}
      </div>
      <h3 style={{ marginTop: 14 }}>{title}</h3>
      <p style={{ marginTop: 10 }}>{description}</p>
    </article>
  );
}

type StackItemProps = {
  label: string;
  detail: string;
  icon: LucideIcon;
};

export function StackItem({ label, detail, icon: Icon }: StackItemProps) {
  return (
    <li>
      <Icon size={18} />
      <div>
        <strong style={{ display: "block", marginBottom: 4 }}>{label}</strong>
        <span>{detail}</span>
      </div>
    </li>
  );
}

type RouteCardProps = {
  route: string;
  code: string;
  duration: string;
  stops: string;
  price: string;
  tag: string;
};

export function RouteCard({ route, code, duration, stops, price, tag }: RouteCardProps) {
  return (
    <article className="card route-card">
      <div className="route-card__top">
        <div className="route-path">
          <ArrowRight size={18} />
          <div>
            <strong>{route}</strong>
            <div style={{ color: "var(--muted)", marginTop: 4 }}>{code}</div>
          </div>
        </div>
        <div className="price">{price}</div>
      </div>
      <div className="flight-meta">
        <span className="pill">{duration}</span>
        <span className="pill">{stops}</span>
        <span className="pill pill--accent">{tag}</span>
      </div>
    </article>
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const className = variant === "primary" ? "button" : "button-secondary";

  return (
    <Link href={href} className={className}>
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}

type BadgeProps = {
  children: ReactNode;
  tone?: "default" | "success" | "gold" | "danger";
  icon?: LucideIcon | ((props: LucideProps) => ReactNode);
};

export function Badge({ children, tone = "default", icon: Icon }: BadgeProps) {
  const className =
    tone === "success"
      ? "badge badge--success"
      : tone === "gold"
        ? "badge badge--gold"
        : tone === "danger"
          ? "badge pill--danger"
          : "badge";

  return (
    <span className={className}>
      {Icon ? <Icon size={16} /> : null}
      {children}
    </span>
  );
}
