import type { Component } from "vue";
import {
  Award,
  BadgeCheck,
  BookOpen,
  BookUser,
  Bus,
  Camera,
  Car,
  Code2,
  Compass,
  Database,
  Dumbbell,
  Fingerprint,
  Flower2,
  Gamepad2,
  Gavel,
  Globe,
  GraduationCap,
  IdCard,
  Map,
  MessageSquare,
  Music,
  Palette,
  Plane,
  QrCode,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Store,
  Ticket,
  Trophy,
  Users,
  Wrench,
} from "@lucide/vue";

export const EMAIL = "rolyngonzales458@gmail.com";

type Project = { name: string; title: string; role: string; desc: string; icon: Component };

const projects: Project[] = [
  { name: "PSG ATLAS", title: "Advanced Technological Land Assessment System", role: "Backend Developer", desc: "A system that computes expenses and keeps track of all the properties owned by Unilab. It also shows the information of a selected property and the coordinates where it is located. The system also manages documents such as Land Title, Property Tax, etc.", icon: Map },
  { name: "PSG EHS", title: "Environment, Health & Safety", role: "Backend / Semi-Frontend Developer", desc: "A system designed to handle all the hazard and incident reports within the premises of Unilab. It also helps the user assess the level of safety within the area. One of the core systems in Unilab.", icon: ShieldCheck },
  { name: "COINS", title: "Comer Ordering & Inventory System", role: "Fullstack Developer", desc: "COINS helps food services provide efficiency in the kitchen and customer satisfaction. An all-in-one system for ordering and inventory, made specifically for Comer Noche (Unilab Resto).", icon: ShoppingCart },
  { name: "66FIT", title: "Gym Scheduling System", role: "Fullstack Developer", desc: "A scheduling tool designed to assist staff members in making reservations for the indoor office gym, the “66Fit”.", icon: Dumbbell },
  { name: "Biometrics", title: "Biometrics Management System", role: "Frontend Developer", desc: "A management system that handles all the biometrics data of TPA employees and OJT of Unilab. It can generate the daily time record and track the timestamp of every employee.", icon: Fingerprint },
  { name: "Feedback", title: "Feedback Management System", role: "Fullstack Developer", desc: "A centralized feedback system for all of the existing systems. It provides data examined from several platforms, based on user assessments.", icon: MessageSquare },
  { name: "PVRS", title: "Personal Vehicle Registration System", role: "Frontend Developer", desc: "A “vehicle app-like” system that organizes the paperwork needed for a car renewal or registration. A link between PSG Transportation’s operations and those outside the company.", icon: Car },
  { name: "Plants & Trees", title: "QR Information System", role: "Fullstack Developer", desc: "A QR generating system that stores information about the trees and plants within the premises of Unilab.", icon: QrCode },
  { name: "TNF", title: "Transport Booking System", role: "Fullstack Developer", desc: "A booking system that manages the itinerary of each tourist the agency is catering to.", icon: Bus },
  { name: "City of San Juan", title: "Dynamic Website", role: "Fullstack Developer", desc: "A dynamic website for the San Juan City Government that lets users post announcements, news, events and other city materials. It includes the dynamic content of each department, such as its mission and vision and organizational chart, and features integrated online government transactions.", icon: Globe },
  { name: "SKILLS", title: "Class Management System", role: "Fullstack Developer", desc: "A dynamic website for SKILLS TESDA, integrated into the San Juan website. It also features a class management system that handles courses and student registration.", icon: GraduationCap },
  { name: "BAC", title: "Bid Posting System", role: "Fullstack Developer", desc: "A system that manages bids posted by the San Juan City Government for procurement, with a link to the PhilGEPS website.", icon: Gavel },
  { name: "Tourism Bazaar", title: "Christmas Bazaar Registration & Monitoring System", role: "Fullstack Developer", desc: "A registration system designed to help SMEs showcase their products at the yearly Christmas bazaar.", icon: Store },
  { name: "Cemetery", title: "Cemetery Management System", role: "Fullstack Developer", desc: "A scheduling system for every cemetery within the vicinity of San Juan.", icon: Flower2 },
  { name: "Population Dev.", title: "Population Development Management System", role: "Fullstack Developer", desc: "A census-like system that gathers data on every couple in San Juan, with management of information on reproductive health.", icon: Users },
  { name: "Tourism Registry", title: "Tourism Registry", role: "Fullstack Developer", desc: "Registration of every tourist spot, store, historical venue and more, with management of SME information.", icon: Compass },
  { name: "San Juan Queueing", title: "Queueing / Ticketing System", role: "Fullstack Developer", desc: "A system for the ticketing and queueing of payments for tax, cedula, business and more. It also helps the cashier handle a large volume of customers.", icon: Ticket },
  { name: "City Directory", title: "San Juan City Directory", role: "Backend Developer", desc: "A display system that helps people navigate the physical infrastructure of San Juan City Hall.", icon: BookUser },
  { name: "OSCIRIS", title: "Office of the Senior Citizen Information Registry & ID System", role: "Fullstack Developer", desc: "A management system that helps the department track and record every senior citizen residing in San Juan. It also features the printing of senior citizen IDs.", icon: IdCard },
];

const featuredNames = ["City of San Juan", "OSCIRIS", "PSG ATLAS", "San Juan Queueing"];

// Drop a screenshot into app/assets/projects/<slug>.png (or .jpg / .webp) and it appears on the featured card.
const shots = import.meta.glob("../assets/projects/*.{png,jpg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function screenshotFor(name: string): string | null {
  const slug = slugify(name);
  const hit = Object.keys(shots).find((k) => new RegExp(`/${slug}\\.(png|jpg|webp)$`).test(k));
  return hit ? shots[hit]! : null;
}

export const ordered = [
  ...featuredNames.map((name) => projects.find((p) => p.name === name)!),
  ...projects.filter((p) => !featuredNames.includes(p.name)),
].map((p, i) => ({ ...p, n: String(i + 1).padStart(2, "0") }));

export const featured = ordered.slice(0, featuredNames.length);
export const rest = ordered.slice(featuredNames.length);

export const expertise = [
  { group: "Web Development", icon: Code2, items: ["Laravel", "PHP", "JavaScript / jQuery / AJAX", "Vue JS", "HTML / CSS", "API"] },
  { group: "Mobile Development", icon: Smartphone, items: ["Vue Capacitor", "Android Studio", "Xcode", "TestFlight"] },
  { group: "Databases", icon: Database, items: ["MySQL", "MSSQL"] },
  { group: "Graphic Design", icon: Palette, items: ["Adobe Photoshop", "Adobe Illustrator", "Canva"] },
  { group: "IT Support", icon: Wrench, items: ["Basic Hardware Troubleshooting", "Basic Network Troubleshooting"] },
];

export const achievements: { title: string; note?: string; icon: Component }[] = [
  { title: "Best Thesis (2019)", note: "E-Thesis: Theses Management System", icon: Trophy },
  { title: "Going Above & Beyond Award", note: "PSG Innovate - Technical Solutions", icon: Award },
  { title: "Civil Service Exam: Professional", note: "June 19, 2022", icon: BadgeCheck },
];

export const activities = ["7th IT Congress", "TOEFL Examination Proctor", "Personality & Career Development Orientation"];

export const games = ["Perspectivisics", "Spot The D", "Butterfly", "Kamikaze", "Math Race"];

export const hobbies = [
  { label: "Gaming", icon: Gamepad2 },
  { label: "Photos", icon: Camera },
  { label: "Music", icon: Music },
  { label: "Reading", icon: BookOpen },
  { label: "Travel", icon: Plane },
];

export const nav = [
  { href: "#projects", label: "Projects" },
  { href: "#profile", label: "Profile" },
  { href: "#contact", label: "Contact" },
];

export const heroWords = [
  { t: "Concepts", br: true },
  { t: "built", className: "metal" },
  { t: "into", br: true },
  { t: "working" },
  { t: "systems." },
];
