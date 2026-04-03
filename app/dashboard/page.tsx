import { BadgeCheck, CalendarDays, Download, Headphones, PlaneTakeoff, Ticket } from "lucide-react";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { bookingRows, dashboardHighlights } from "@/lib/data";

export const metadata = {
  title: "Dashboard",
  description: "A passenger dashboard with bookings, boarding pass preview, and quick travel actions.",
};

export default function DashboardPage() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">
          <CalendarDays size={16} />
          User dashboard
        </div>
        <h1 className="page-title">A dashboard that makes trip management feel effortless.</h1>
        <p className="page-subtitle">
          The dashboard combines booking history, support shortcuts, and a boarding pass preview so the product
          feels like a complete airline experience.
        </p>
      </section>

      <section className="section">
        <div className="metric-grid">
          {dashboardHighlights.map((item) => (
            <article key={item.label} className="card metric">
              <div className="badge">
                <item.icon size={16} />
                {item.label}
              </div>
              <div className="metric__value">{item.value}</div>
              <div className="metric__label">Demo portfolio data</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="split-panel">
          <div className="card">
            <SectionHeading
              title="Your upcoming trips"
              description="A compact bookings view helps users quickly see what matters next."
            />

            <div className="result-list">
              {bookingRows.map((booking) => (
                <article key={booking.route} className="mini-card">
                  <div className="route-card__top">
                    <div>
                      <div className="badge">
                        <PlaneTakeoff size={16} />
                        {booking.route}
                      </div>
                      <h4 style={{ marginTop: 14 }}>{booking.date}</h4>
                    </div>
                    <span className="price">{booking.seat}</span>
                  </div>

                  <div className="flight-meta">
                    <span className="pill">{booking.status}</span>
                    <span className="pill">Gate {booking.gate}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="boarding-pass">
            <div className="boarding-pass__header">
              <div>
                <div className="badge badge--gold">
                  <Ticket size={16} />
                  Boarding pass
                </div>
                <h3 style={{ marginTop: 14 }}>NB 204</h3>
              </div>
              <div className="badge badge--success">
                <BadgeCheck size={16} />
                Confirmed
              </div>
            </div>

            <div className="boarding-pass__grid">
              <div className="boarding-pass__field">
                <span>Passenger</span>
                <strong>Anointed Agunloye</strong>
              </div>
              <div className="boarding-pass__field">
                <span>Seat</span>
                <strong>12A</strong>
              </div>
              <div className="boarding-pass__field">
                <span>Gate</span>
                <strong>B14</strong>
              </div>
              <div className="boarding-pass__field">
                <span>Departure</span>
                <strong>08:30</strong>
              </div>
              <div className="boarding-pass__field">
                <span>Route</span>
                <strong>Lagos to London</strong>
              </div>
              <div className="boarding-pass__field">
                <span>Status</span>
                <strong>Boarding soon</strong>
              </div>
            </div>

            <div className="barcode" aria-hidden="true">
              {Array.from({ length: 18 }).map((_, index) => (
                <span key={index} style={{ height: `${40 + ((index * 13) % 22)}px` }} />
              ))}
            </div>

            <div className="boarding-pass__footer">
              <ButtonLink href="/status">Track flight</ButtonLink>
              <ButtonLink href="/search" variant="secondary">
                Book another trip
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Support and actions"
          title="Everything a traveler needs lives in one place."
          description="The dashboard is a natural place for downloads, support, cancellation flows, and flight updates."
        />

        <div className="three-column-grid">
          <article className="mini-card">
            <div className="badge">
              <Download size={16} />
              Downloads
            </div>
            <h4 style={{ marginTop: 14 }}>Boarding pass PDF</h4>
            <p style={{ marginTop: 10 }}>Great for mobile-first travel and airport check-in workflows.</p>
          </article>
          <article className="mini-card">
            <div className="badge">
              <Headphones size={16} />
              Support
            </div>
            <h4 style={{ marginTop: 14 }}>Help desk</h4>
            <p style={{ marginTop: 10 }}>Provide direct support and airline-style service tickets from the dashboard.</p>
          </article>
          <article className="mini-card">
            <div className="badge">
              <CalendarDays size={16} />
              Manage trips
            </div>
            <h4 style={{ marginTop: 14 }}>Cancellation and reschedule</h4>
            <p style={{ marginTop: 10 }}>Users can change travel plans without leaving the experience.</p>
          </article>
        </div>
      </section>
    </>
  );
}
