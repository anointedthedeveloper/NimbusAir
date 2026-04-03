import { CircleGauge, Clock3, PlaneTakeoff, Radar, Ticket } from "lucide-react";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { statusUpdates } from "@/lib/data";

export const metadata = {
  title: "Flight Status",
  description: "Track flight status, boarding updates, and departure changes with a premium travel UI.",
};

export default function StatusPage() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">
          <Radar size={16} />
          Flight status
        </div>
        <h1 className="page-title">Track departures and updates with an airline-style status board.</h1>
        <p className="page-subtitle">
          The status experience helps the project feel complete by surfacing the kind of real-time travel data a
          passenger would expect in a polished booking platform.
        </p>
      </section>

      <section className="section">
        <div className="status-grid">
          {[
            { label: "On time", value: "2", icon: CircleGauge },
            { label: "Boarding", value: "1", icon: Ticket },
            { label: "Departed", value: "1", icon: PlaneTakeoff },
            { label: "Updated today", value: "3", icon: Clock3 },
          ].map((item) => (
            <article key={item.label} className="card metric">
              <div className="badge">
                <item.icon size={16} />
                {item.label}
              </div>
              <div className="metric__value">{item.value}</div>
              <div className="metric__label">Live travel snapshot</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          title="Latest flight updates"
          description="Each update is designed to feel like a real operations feed with clear states and timestamps."
          action={<ButtonLink href="/search">Search another route</ButtonLink>}
        />

        <div className="timeline">
          {statusUpdates.map((update) => (
            <article key={update.route} className="timeline-item card">
              <div className="timeline-item__meta">
                <span className="pill pill--accent">{update.route}</span>
                <span>{update.time}</span>
                <span className="pill">{update.state}</span>
              </div>
              <h4>{update.detail}</h4>
              <p>
                This area can connect to live flight data later, while the current version demonstrates the
                interface clearly.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Status details"
          title="A good flight status screen should be calm and informative."
          description="The layout emphasizes legibility so passengers can quickly scan what changed, when it changed, and what they should do next."
        />

        <div className="three-column-grid">
          <article className="mini-card">
            <div className="badge badge--success">Boarding</div>
            <h4 style={{ marginTop: 14 }}>Gate visibility</h4>
            <p style={{ marginTop: 10 }}>Gate numbers and boarding alerts remain easy to read on smaller screens.</p>
          </article>
          <article className="mini-card">
            <div className="badge badge--gold">Delay alerts</div>
            <h4 style={{ marginTop: 14 }}>Weather and timing</h4>
            <p style={{ marginTop: 10 }}>Useful for quick operational updates without overwhelming the user.</p>
          </article>
          <article className="mini-card">
            <div className="badge">Support route</div>
            <h4 style={{ marginTop: 14 }}>Passenger assistance</h4>
            <p style={{ marginTop: 10 }}>Easy escalation to support if the user needs rebooking or confirmation help.</p>
          </article>
        </div>
      </section>
    </>
  );
}
