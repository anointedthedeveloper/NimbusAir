import {
  BadgeCheck,
  Bird,
  BrainCircuit,
  Clock3,
  Compass,
  CreditCard,
  Gauge,
  Globe2,
  Headphones,
  LineChart,
  PlaneLanding,
  PlaneTakeoff,
  ShieldCheck,
  Sparkles,
  Ticket,
  TimerReset,
  TrendingUp,
  UserRound,
  Wifi,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type RouteFlight = {
  route: string;
  code: string;
  duration: string;
  stops: string;
  price: string;
  tag: string;
};

export type Booking = {
  route: string;
  date: string;
  seat: string;
  status: string;
  gate: string;
};

export type StatusUpdate = {
  route: string;
  time: string;
  detail: string;
  state: string;
};

export type AdminFlight = {
  route: string;
  flight: string;
  departure: string;
  seats: string;
  revenue: string;
  status: string;
};

export type Metric = {
  label: string;
  value: string;
  note: string;
  icon: LucideIcon;
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/search", label: "Search" },
  { href: "/book", label: "Booking" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/admin", label: "Admin" },
  { href: "/status", label: "Status" },
];

export const metrics: Metric[] = [
  {
    label: "Core views",
    value: "6",
    note: "Home, search, booking, dashboard, admin, and status",
    icon: Globe2,
  },
  {
    label: "Design system",
    value: "1",
    note: "A consistent flight-inspired interface across every page",
    icon: Sparkles,
  },
  {
    label: "Brand credits",
    value: "2",
    note: "Created by anointedthedeveloper and powered by anobyte",
    icon: ShieldCheck,
  },
  {
    label: "SEO focus",
    value: "100%",
    note: "Metadata, keywords, sitemap, robots, and OG image included",
    icon: TrendingUp,
  },
];

export const featureCards = [
  {
    title: "Flight Search",
    description: "Search origin, destination, dates, passengers, and trip style with a premium route planner UI.",
    icon: Compass,
  },
  {
    title: "Booking Flow",
    description: "Passenger details, seat selection, payment summary, and a polished checkout-inspired experience.",
    icon: Ticket,
  },
  {
    title: "Trip Management",
    description: "Bookings, boarding pass preview, and quick actions that make the dashboard feel production-ready.",
    icon: UserRound,
  },
  {
    title: "Admin Tools",
    description: "Route management, seat allocation, schedule editing, and operations visibility for internal teams.",
    icon: Gauge,
  },
  {
    title: "Live Status",
    description: "Departure updates, gate changes, and realistic travel-state cards for the flight status view.",
    icon: Clock3,
  },
  {
    title: "Modern Stack",
    description: "Next.js, Tailwind-ready styling approach, Framer Motion-friendly layout, and deployment-friendly structure.",
    icon: BrainCircuit,
  },
];

export const stackItems = [
  { label: "Frontend", detail: "Next.js, React, polished UI, SEO-first structure", icon: PlaneTakeoff },
  { label: "Backend", detail: "FastAPI-ready architecture with clean routes and services", icon: PlaneLanding },
  { label: "Database", detail: "PostgreSQL-friendly models for users, flights, and bookings", icon: LineChart },
  { label: "Auth", detail: "JWT, OAuth-ready login flows, and secure dashboard access", icon: ShieldCheck },
  { label: "Payments", detail: "Stripe, Paystack, and Flutterwave-ready checkout flows", icon: CreditCard },
  { label: "Deployment", detail: "Vercel, Render, Supabase, Neon, or Railway friendly setup", icon: Wifi },
];

export const featuredRoutes: RouteFlight[] = [
  {
    route: "Lagos to London",
    code: "NB 204",
    duration: "6h 20m",
    stops: "Non-stop",
    price: "From ₦1.8M",
    tag: "Flagship route",
  },
  {
    route: "Abuja to Dubai",
    code: "NB 311",
    duration: "7h 05m",
    stops: "1 stop",
    price: "From ₦2.1M",
    tag: "Business travel",
  },
  {
    route: "Port Harcourt to Johannesburg",
    code: "NB 118",
    duration: "5h 40m",
    stops: "Non-stop",
    price: "From ₦1.5M",
    tag: "Premium economy",
  },
];

export const bookingRows: Booking[] = [
  {
    route: "Lagos to London",
    date: "12 Apr 2026",
    seat: "12A",
    status: "Confirmed",
    gate: "B14",
  },
  {
    route: "Abuja to Dubai",
    date: "18 Apr 2026",
    seat: "8C",
    status: "Awaiting payment",
    gate: "A07",
  },
];

export const statusUpdates: StatusUpdate[] = [
  {
    route: "NB 204",
    time: "09:15",
    detail: "Boarding started at gate B14",
    state: "On schedule",
  },
  {
    route: "NB 118",
    time: "11:40",
    detail: "Weather cleared and taxi began",
    state: "Departed",
  },
  {
    route: "NB 311",
    time: "14:05",
    detail: "Gate change moved to A07",
    state: "Updated",
  },
];

export const adminFlights: AdminFlight[] = [
  {
    route: "Lagos to London",
    flight: "NB 204",
    departure: "08:30",
    seats: "182 / 220",
    revenue: "₦34.2M",
    status: "Selling fast",
  },
  {
    route: "Abuja to Dubai",
    flight: "NB 311",
    departure: "13:45",
    seats: "133 / 190",
    revenue: "₦28.1M",
    status: "Schedule ready",
  },
  {
    route: "Port Harcourt to Johannesburg",
    flight: "NB 118",
    departure: "22:10",
    seats: "160 / 180",
    revenue: "₦21.8M",
    status: "Reviewing load",
  },
];

export const dashboardHighlights = [
  { label: "Bookings", value: "12", icon: Ticket },
  { label: "Flights tracked", value: "6", icon: PlaneTakeoff },
  { label: "Boarding passes", value: "4", icon: BadgeCheck },
  { label: "Priority support", value: "24/7", icon: Headphones },
  { label: "Cabin comfort", value: "Premium", icon: Bird },
  { label: "Trip confidence", value: "High", icon: TimerReset },
];
