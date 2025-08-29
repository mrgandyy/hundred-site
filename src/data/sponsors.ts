export type SponsorItem = {
  name: string;
  url?: string;
  logo?: string;
  blurb: string;
};

export const sponsors: SponsorItem[] = [
  {
    name: "Blitz Jewelry (VRChat Avatars)",
    // TODO: add their link when you have it
    url: "#",
    logo: "/partners/Blitz.png",
    blurb: "Custom jewelry accents for VRChat avatars — bringing shine to your drip."
  },
  {
    name: "Venti FBT",
    url: "https://ventifbt.store",
    logo: "https://ventifbt.store/cdn/shop/files/logorenderagain.png?v=1723071983&width=100",
    blurb: "Full-body tracking hardware and accessories for smoother moves in VR."
  }
];
