import { ArrowRight, Filter, PlaneTakeoff, ShieldCheck, TimerReset } from "lucide-react";
import { ButtonLink, RouteCard, SectionHeading } from "@/components/ui";
import { featuredRoutes } from "@/lib/data";

export const metadata = {
  title: "Search Flights",
  description: "Search flights with polished filters, premium route cards, and clean booking discovery UI.",
};

export default function SearchPage() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">
          <Filter size={16} />
          Flight search experience
        </div>
        <h1 className="page-title">Search flights with a clean, premium booking flow.</h1>
        <p className="page-subtitle">
          This page mirrors the moment a traveler chooses origin, destination, schedule, and pricing. It is
          designed to look credible for a product demo, a portfolio case study, or a startup pitch.
        </p>
      </section>

      <section className="section section--tight">
        <div className="filters-row">
          <span className="pill pill--accent">
            <PlaneTakeoff size={14} />
            Non-stop
          </span>
          <span className="pill">
            <ShieldCheck size={14} />
            Best value
          </span>
          <span className="pill">
            <TimerReset size={14} />
            Flexible dates
          </span>
          <span className="pill">Business class</span>
        </div>

        <div className="split-panel">
          <div className="card">
            <SectionHeading
              title="Filter the route map"
              description="Use the form below as a visual search experience. It keeps the UI lightweight while still feeling product-ready."
            />

            <div className="form-grid">
              <div className="form-grid form-grid--two">
                <div className="field">
                  <label htmlFor="search-from">From</label>
                  <input className="input" id="search-from" placeholder="Lagos (LOS)" />
                </div>
                <div className="field">
                  <label htmlFor="search-to">To</label>
                  <input className="input" id="search-to" placeholder="London (LHR)" />
                </div>
              </div>
              <div className="form-grid form-grid--two">
                <div className="field">
                  <label htmlFor="search-date">Departure date</label>
                  <input className="input" id="search-date" placeholder="12 Apr 2026" />
                </div>
                <div className="field">
                  <label htmlFor="search-passengers">Passengers</label>
                  <input className="input" id="search-passengers" placeholder="2 adults" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="search-class">Cabin class</label>
                <select className="select" id="search-class">
                  <option>Economy</option>
                  <option>Premium economy</option>
                  <option>Business</option>
                  <option>First class</option>
                </select>
              </div>
              <ButtonLink href="/book">Continue to booking</ButtonLink>
            </div>
          </div>

          <div className="card">
            <SectionHeading
              title="Search result preview"
              description="The cards below are styled to resemble real fare results, with price-first hierarchy and clear route details."
            />
            <div className="result-list">
              {featuredRoutes.map((route) => (
                <RouteCard key={route.code} {...route} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Search details"
          title="What makes the search UI feel premium"
          description="The goal is to show visual hierarchy, trust, and speed, all of which matter in travel booking."
        />

        <div className="three-column-grid">
          <article className="mini-card">
            <div className="badge">
              <ArrowRight size={16} />
              Sorted by value
            </div>
            <h4 style={{ marginTop: 14 }}>Price-first cards</h4>
            <p style={{ marginTop: 10 }}>
              The fare is the strongest visual element so users can compare options quickly.
            </p>
          </article>
          <article className="mini-card">
            <div className="badge">
              <ShieldCheck size={16} />
              Secure by design
            </div>
            <h4 style={{ marginTop: 14 }}>Trust cues</h4>
            <p style={{ marginTop: 10 }}>
              Badges, route labels, and subtle accent colors make the interface feel dependable.
            </p>
          </article>
          <article className="mini-card">
            <div className="badge">
              <TimerReset size={16} />
              Fast checkout
            </div>
            <h4 style={{ marginTop: 14 }}>Clear next step</h4>
            <p style={{ marginTop: 10 }}>
              Every search route points directly to booking, which keeps the flow simple and intentional.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
