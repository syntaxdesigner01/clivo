export type Person = { name: string; role: string; img: string };

// Left-to-right order in the carousel; the third entry (index 2) starts in the centre.
export const people: Person[] = [
  { name: "Amaka", role: "Legal", img: "/team/team-3.png" },
  { name: "Tunde", role: "Co-founder & CTO", img: "/team/team-4.png" },
  { name: "Emeka", role: "Co-founder & CEO", img: "/team/team-5.png" },
  { name: "Kunle", role: "Co-founder & Tech Lead", img: "/team/team-6.png" },
  { name: "Zainab", role: "Product Design", img: "/team/team-2.png" },
];

export const socials = {
  linkedin: "[LINKEDIN URL]",
  instagram: "[INSTAGRAM URL]",
  x: "[X URL]",
};
