import type { Metadata } from "next";
import ContactView from "./ContactView";

export const metadata: Metadata = { title: "Contact — Clivo" };

export default function ContactPage() {
  return <ContactView />;
}
