import { BadgeCheck, CreditCard, PlaneTakeoff, Ticket } from "lucide-react";
import { ButtonLink, SectionHeading } from "@/components/ui";

export const metadata = {
  title: "Booking",
  description: "Passenger details, seat choice, and payment summary in a polished airline booking flow.",
};

export default function BookingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">
          <Ticket size={16} />
          Booking experience
        </div>
        <h1 className="page-title">Move from flight selection to confirmation without friction.</h1>
        <p className="page-subtitle">
          This booking screen is built like a high-confidence checkout experience with passenger details,
          trip summary, and a strong visual hierarchy that keeps the process calm.
        </p>
      </section>

      <section className="section">
        <div className="split-panel">
          <div className="card">
            <SectionHeading
              title="Passenger details"
              description="The form is clean and structured so it reads like a serious product, not a throwaway mockup."
            />

            <div className="form-grid form-grid--two">
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input className="input" id="name" placeholder="Anointed Agunloye" />
              </div>
              <div className="field">
                <label htmlFor="email">Email address</label>
                <input className="input" id="email" placeholder="you@example.com" />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone number</label>
                <input className="input" id="phone" placeholder="+234 800 000 0000" />
              </div>
              <div className="field">
                <label htmlFor="seat">Seat preference</label>
                <select className="select" id="seat">
                  <option>Window</option>
                  <option>Aisle</option>
                  <option>Middle</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="passport">Passport / ID</label>
                <input className="input" id="passport" placeholder="Passport number" />
              </div>
              <div className="field">
                <label htmlFor="class">Cabin class</label>
                <select className="select" id="class">
                  <option>Economy</option>
                  <option>Premium economy</option>
                  <option>Business</option>
                </select>
              </div>
            </div>

            <div className="divider" style={{ margin: "18px 0" }} />

            <div className="form-grid">
              <ButtonLink href="/dashboard">Confirm booking</ButtonLink>
            </div>
          </div>

          <div className="card summary-box">
            <SectionHeading
              title="Trip summary"
              description="This panel gives the user a calm, premium checkout recap before payment."
            />

            <div className="summary-row">
              <span>Route</span>
              <strong>Lagos to London</strong>
            </div>
            <div className="summary-row">
              <span>Flight</span>
              <strong>NB 204</strong>
            </div>
            <div className="summary-row">
              <span>Date</span>
              <strong>12 Apr 2026</strong>
            </div>
            <div className="summary-row">
              <span>Seat</span>
              <strong>12A</strong>
            </div>
            <div className="summary-row">
              <span>Fare</span>
              <strong>₦1.8M</strong>
            </div>
            <div className="divider" />
            <div className="summary-row">
              <span>Total</span>
              <strong>₦1.92M</strong>
            </div>

            <div className="glass-card" style={{ padding: 18 }}>
              <div className="badge badge--gold">
                <CreditCard size={16} />
                Payment ready
              </div>
              <p style={{ marginTop: 12 }}>
                Stripe, Paystack, or Flutterwave can be plugged into this flow later without changing the visual
                language.
              </p>
            </div>

            <div className="glass-card" style={{ padding: 18 }}>
              <div className="badge badge--success">
                <BadgeCheck size={16} />
                Confirmation expected
              </div>
              <p style={{ marginTop: 12 }}>
                The booking step is designed to trigger email confirmations, boarding pass generation, and dashboard
                updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Seat selection"
          title="A visual seat map can be added here next."
          description="The current layout leaves room for an interactive seat grid, pricing tiers, and occupancy states."
          action={<ButtonLink href="/status">Check live status</ButtonLink>}
        />

        <div className="three-column-grid">
          <article className="mini-card">
            <div className="badge">
              <PlaneTakeoff size={16} />
              Boarding ready
            </div>
            <h4 style={{ marginTop: 14 }}>Passenger journey</h4>
            <p style={{ marginTop: 10 }}>
              Booking can feed the dashboard and boarding pass views automatically after payment.
            </p>
          </article>
          <article className="mini-card">
            <div className="badge">
              <Ticket size={16} />
              Add-ons
            </div>
            <h4 style={{ marginTop: 14 }}>Baggage and extras</h4>
            <p style={{ marginTop: 10 }}>
              Extra luggage, meals, and priority boarding are easy to slot into the checkout experience.
            </p>
          </article>
          <article className="mini-card">
            <div className="badge">
              <BadgeCheck size={16} />
              Secure flow
            </div>
            <h4 style={{ marginTop: 14 }}>Protected checkout</h4>
            <p style={{ marginTop: 10 }}>
              JWT-authenticated auth can keep the booking workflow tied to the user dashboard later on.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
