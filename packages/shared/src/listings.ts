export type Listing = {
  id: string;
  title: string;
  location: string;
  price: string;
  badge: string;
  summary: string;
  amenities: string[];
};

export const FEATURED_LISTINGS: Listing[] = [
  {
    id: "desert-modern-hideaway",
    title: "Desert Modern Hideaway",
    location: "Palm Springs, California",
    price: "$420 / night",
    badge: "Editor pick",
    summary:
      "A warm, courtyard-first stay with mountain views, terrazzo floors, and enough outdoor space to host a late dinner under the lights.",
    amenities: ["Pool", "Outdoor dining", "Fast Wi-Fi"],
  },
  {
    id: "canal-loft-retreat",
    title: "Canal Loft Retreat",
    location: "Amsterdam, Netherlands",
    price: "$315 / night",
    badge: "Remote-ready",
    summary:
      "Quiet mornings, oversized windows, and a compact work zone make this one ideal for longer stays without feeling like a corporate rental.",
    amenities: ["Dedicated desk", "Canal view", "Self check-in"],
  },
  {
    id: "forest-glass-cabin",
    title: "Forest Glass Cabin",
    location: "Bend, Oregon",
    price: "$268 / night",
    badge: "Weekend escape",
    summary:
      "A small-footprint cabin with a wall of windows, cedar-lined interiors, and direct access to quiet trails after breakfast.",
    amenities: ["Wood stove", "Trail access", "Pet friendly"],
  },
];