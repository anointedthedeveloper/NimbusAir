import { ArrowRight, PlaneTakeoff, ShieldCheck, Sparkles, Ticket, TimerReset } from "lucide-react";
import { ButtonLink, FeatureCard, MetricCard, RouteCard, SectionHeading, StackItem } from "@/components/ui";
import { featureCards, featuredRoutes, metrics, stackItems } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="section hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <PlaneTakeoff size={16} />
            Full-stack airline booking platform concept
          </div>

          <h1>NimbusAir turns flight booking into a premium digital journey.</h1>

          <p>
            Built to showcase modern product design, clear information architecture, and a flight-focused
            interface that feels ready for real users, admin operations, and future API integrations.
          </p>

          <div className="hero-actions">
            <ButtonLink href="/search">Start searching flights</ButtonLink>
            <ButtonLink href="/dashboard" variant="secondary">
              View passenger dashboard
            </ButtonLink>
          </div>

          <div className="trusted-line">
            <span>
              <Sparkles size={16} />
              Created by anointedthedeveloper
            </span>
            <span>
              <ShieldCheck size={16} />
              Powered by anobyte
            </span>
            <span>
              <Ticket size={16} />
              Designed for portfolio impact
            </span>
          </div>
        </div>

        <div className="hero-panel">
          <div className="glass-card search-card">
            <div className="search-card__head">
              <div>
                <h3>Quick flight search</h3>
                <p>Elegant search controls for routes, dates, passengers, and travel class.</p>
              </div>
              <span className="pill pill--accent">Live prototype</span>
            </div>

            <div className="search-fields">
              <div className="field">
                <label htmlFor="from">From</label>
                <input className="input" id="from" placeholder="Lagos (LOS)" />
              </div>
              <div className="field">
                <label htmlFor="to">To</label>
                <input className="input" id="to" placeholder="London (LHR)" />
              </div>
              <div className="field">
                <label htmlFor="depart">Departure</label>
                <input className="input" id="depart" placeholder="12 Apr 2026" />
              </div>
              <div className="field">
                <label htmlFor="passengers">Passengers</label>
                <input className="input" id="passengers" placeholder="2 adults" />
              </div>
            </div>

            <div className="search-card__footer">
              <span className="pill">Round trip</span>
              <ButtonLink href="/search">Search flights</ButtonLink>
            </div>
          </div>

          <div className="metric-grid">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="What the experience covers"
          title="Every major airline workflow in one polished demo."
          description="The layout is intentionally structured like a real booking product so your portfolio shows product thinking, not just pretty screens."
          action={<ButtonLink href="/admin">Inspect admin tools</ButtonLink>}
        />

        <div className="feature-grid">
          {featureCards.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Featured routes"
          title="Styled like a premium airline route map."
          description="These sample routes power the visual story for the UI and can later be replaced with real API data."
        />

        <div className="route-grid">
          {featuredRoutes.map((route) => (
            <RouteCard key={route.code} {...route} />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Tech stack"
          title="Designed to fit the stack you outlined."
          description="The pages are prepared for Next.js routing, reusable components, SEO metadata, and a backend integration path with FastAPI, PostgreSQL, and JWT auth."
          action={<ButtonLink href="/book">See the booking flow</ButtonLink>}
        />

        <div className="split-panel">
          <div className="card">
            <h3>Architecture highlights</h3>
            <p style={{ marginTop: 10 }}>
              The product structure follows the same mental model as a real airline platform while staying
              portfolio-friendly and easy to expand.
            </p>
            <ul className="stack-list" style={{ marginTop: 18 }}>
              {stackItems.map((item) => (
                <StackItem key={item.label} {...item} />
              ))}
            </ul>
          </div>

          <div className="card">
            <div className="badge badge--gold">
              <TimerReset size={16} />
              Built for future growth
            </div>
            <h3 style={{ marginTop: 14 }}>Features ready for later expansion</h3>
            <ul className="bullet-list" style={{ marginTop: 18 }}>
              <li>
                <ArrowRight size={16} />
                Live flight tracking, price prediction, and AI trip assistance
              </li>
              <li>
                <ArrowRight size={16} />
                Payment integrations for Stripe, Paystack, or Flutterwave
              </li>
              <li>
                <ArrowRight size={16} />
                Boarding pass PDF export, email confirmation, and PWA support
              </li>
              <li>
                <ArrowRight size={16} />
                Authentication, protected dashboards, and admin permission layers
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
