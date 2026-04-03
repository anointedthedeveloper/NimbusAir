import { BarChart3, Settings2, ShieldCheck, Ticket } from "lucide-react";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { adminFlights } from "@/lib/data";

export const metadata = {
  title: "Admin",
  description: "An admin dashboard for flights, schedules, bookings, and operational control.",
};

export default function AdminPage() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">
          <Settings2 size={16} />
          Admin dashboard
        </div>
        <h1 className="page-title">Manage schedules, pricing, and bookings with a clean operations view.</h1>
        <p className="page-subtitle">
          This area shows how NimbusAir can support internal airline teams with route edits, revenue tracking, and
          operational visibility.
        </p>
      </section>

      <section className="section">
        <div className="three-column-grid">
          <article className="card">
            <div className="badge badge--gold">
              <BarChart3 size={16} />
              Revenue
            </div>
            <h3 style={{ marginTop: 14 }}>Operations at a glance</h3>
            <p style={{ marginTop: 10 }}>
              Use this space for analytics, route revenue, seat occupancy, and schedule performance.
            </p>
          </article>
          <article className="card">
            <div className="badge badge--success">
              <ShieldCheck size={16} />
              Access
            </div>
            <h3 style={{ marginTop: 14 }}>Role-aware permissions</h3>
            <p style={{ marginTop: 10 }}>
              JWT-authenticated admins can be separated from passenger accounts for safer operations.
            </p>
          </article>
          <article className="card">
            <div className="badge">
              <Ticket size={16} />
              Ticketing
            </div>
            <h3 style={{ marginTop: 14 }}>Flight and booking control</h3>
            <p style={{ marginTop: 10 }}>
              Update flight schedules, manage passenger manifests, and keep the product ready for scale.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          title="Flight management table"
          description="The table format keeps operational data clear and compact for staff users."
          action={<ButtonLink href="/status">View live flight status</ButtonLink>}
        />

        <div className="card" style={{ overflowX: "auto" }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Route</th>
                <th>Flight</th>
                <th>Departure</th>
                <th>Seats</th>
                <th>Revenue</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {adminFlights.map((flight) => (
                <tr key={flight.flight}>
                  <td>{flight.route}</td>
                  <td>{flight.flight}</td>
                  <td>{flight.departure}</td>
                  <td>{flight.seats}</td>
                  <td>{flight.revenue}</td>
                  <td>{flight.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Admin notes"
          title="Designed for scale, even before the backend is live."
          description="The UI is structured so route editing, pricing rules, analytics, and support escalations can be introduced cleanly."
        />

        <div className="split-panel">
          <article className="mini-card">
            <div className="badge">Flight edits</div>
            <h4 style={{ marginTop: 14 }}>Add and update routes</h4>
            <p style={{ marginTop: 10 }}>
              This can connect to FastAPI endpoints for posting new flights or adjusting departure windows.
            </p>
          </article>
          <article className="mini-card">
            <div className="badge">Booking reviews</div>
            <h4 style={{ marginTop: 14 }}>Support and moderation</h4>
            <p style={{ marginTop: 10 }}>
              Give staff a fast way to inspect bookings, resolve issues, and follow up on customer requests.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
