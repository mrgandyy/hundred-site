export type WorldItem = {
  name: string;
  tag: string;   // e.g., "PC", "PC/Quest"
  desc: string;
  img: string;
  link?: string;
};

export const worlds: WorldItem[] = [
  {
    name: "FBT Luxe",
    tag: "PC/Quest",
    desc: "High-end nightclub with synced effects and a sleek, performance-tuned floor.",
    img: "https://api.vrchat.cloud/api/1/file/file_cad50161-2eca-4c98-b7be-3e4b992c2711/4/file",
    link: "https://vrchat.com/home/world/wrld_c97ac44a-dba1-4102-9492-56866f656050/info"
  },
  {
    name: "Trap Mansion",
    tag: "PC/Quest",
    desc: "Spanish-villa house party vibes—open layout, balconies, and big sound.",
    img: "https://api.vrchat.cloud/api/1/file/file_8e9a2edf-1649-4004-8b72-d256b2ca796b/1/file",
    link: "https://vrchat.com/home/world/wrld_05fcbe88-24f2-449b-9599-766b934b278a/info"
  },
  {
    name: "SYBERPUNK",
    tag: "PC/Quest",
    desc: "Neon cyberpunk city․ Underground Rave․ particles‚ rails‚ and bass․ Welcome to SYBERPUNK․",
    img: "https://api.vrchat.cloud/api/1/file/file_966e127a-e576-49e5-adb9-0fb06a5db290/1/file",
    link: "https://vrchat.com/home/world/wrld_62504e18-faae-48e5-81d0-0fe99fd15ea4/info"
  },
  {
    name: "The Cabinet",
    tag: "PC/Quest",
    desc: "Celebrate at The Cabinet‚ a Free-to-use ruined White House turned underground party hub where anarchy meets luxury․",
    img: "https://api.vrchat.cloud/api/1/file/file_1a258da6-eb95-4fd2-be4b-39d6e21da59a/4/file",
    link: "https://vrchat.com/home/world/wrld_40338e3d-f6ca-4306-9ca1-103d4be5d66d/info"
  },
  {
    name: "The Breakroom",
    tag: "PC/Quest",
    desc: "A corporate-themed nightclub where neon chaos meets business casual․",
    img: "https://api.vrchat.cloud/api/1/file/file_9f96a52e-beba-43f5-ab00-921544070876/1/file",
    link: "https://vrchat.com/home/world/wrld_23f62187-704c-4548-b0c9-b16a48971fb6/info"
  },
  {
    name: "FBT Lust",
    tag: "PC/Quest",
    desc: "A high-performance FBT dancer club built for daily group use․",
    img: "https://api.vrchat.cloud/api/1/file/file_ff0ea732-b2df-4dd9-99f3-faf2040809fb/1/file",
    link: "https://vrchat.com/home/world/wrld_49e98c93-9749-4be8-9836-971328ad1d5e/info"
  },
  {
    name: "Obelisk",
    tag: "PC/Quest",
    desc: "A sacred temple of light and shadow where cosmic energy pulses through every beat․",
    img: "https://api.vrchat.cloud/api/1/file/file_1d5b53de-3098-4a1d-992e-b8593867b885/2/file",
    link: "https://vrchat.com/home/world/wrld_85df819a-9d5b-4f7c-9d56-dd3201dd8815/info"
  }
];
