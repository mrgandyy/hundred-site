export type PartnerItem = {
  name: string;
  url: string;      // Discord invite or landing page
  logo?: string;    // optional logo URL
};

export const partners: PartnerItem[] = [
  {
    name: "Greenout",
    url: "https://dsc.gg/greenout",
    logo: "/partners/greenout.png"
  },
  {
    name: "JuiceBox",
    // TODO: add their real Discord invite
    url: "https://discord.gg/tjb",
    logo: "/partners/juicebox.png"
  },
  {
    name: "Obsidian Oasis",
    // TODO: add their real Discord invite
    url: "https://discord.gg/3ftDSrkTx5",
    logo: "/partners/obsidian.png"
  },
  {
    name: "Resolve Entertainment",
    // TODO: add their real Discord invite
    url: "https://discord.gg/EtzF8gRAN2",
    logo: "/partners/resolve.png"
  },
];
