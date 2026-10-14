import type { Metadata } from "next";
import TeamView from "./TeamView";

export const metadata: Metadata = { title: "Team — Clivo" };

export default function TeamPage() {
  return <TeamView />;
}
