export const company = {
  name: "CIT Tech",
  legal: "Community Investment Technology",
  tagline: "Community Investment Technologies",
  phone: "+27 12 346 4662",
  phoneHref: "tel:+27123464662",
  email: "info@cit-tech.co.za",
  emailHref: "mailto:info@cit-tech.co.za",
  addressLines: [
    "Building 5, Ashlea Gardens Office Park",
    "180 Garsfontein Road, Ashlea Gardens",
    "Pretoria, 0081, South Africa",
  ],
  mapsQuery: "Ashlea Gardens Office Park, 180 Garsfontein Road, Pretoria",
  group: "Community Investment Holdings (CIH) Group",
  bee: "Level 2 B-BBEE contributor",
};

export const bbee = {
  level: "Level 2",
  status: "B-BBEE contributor",
  /**
   * Set by the Amended Codes of Good Practice, not a claim about CIT: a buyer
   * counts 125% of qualifying spend with a Level 2 supplier toward their own
   * preferential-procurement score (Level 1 is 135%, Level 4 is 100%).
   */
  recognition: "125%",
  recognitionOf: "procurement recognition",
  forBuyers:
    "A buyer counts 125% of qualifying spend with CIT toward their own preferential-procurement scorecard, against 100% for a Level 4 supplier.",
  ownership:
    "CIT is a member of the Community Investment Holdings (CIH) Group, a 100% black-owned, women-led investment group.",
  skills:
    "Channel-partner and operator training is run as an empowerment programme, not a once-off: skills development is how both future leaders and future deployments are built.",
  /**
   * Certificates are re-verified annually, so the desk is the source of truth
   * rather than a number published here that quietly goes stale.
   */
  certificate: "Verification certificate and current scorecard on request",
};

export const nav = [
  { to: "/about" as const, label: "About" },
  { to: "/solutions" as const, label: "Solutions" },
  { to: "/support" as const, label: "Support" },
  { to: "/contact" as const, label: "Contact" },
];

export const services = [
  {
    title: "Sales & system design",
    body: "We specify the right mix of cameras, access, intrusion and software for the site, not a catalogue dump. Designs are built around risk, budget and the operators who will live with the system.",
  },
  {
    title: "Demonstrations & project management",
    body: "Live product demonstrations, proof-of-concept deployments and structured project delivery from first drawing to handover, with a single point of contact.",
  },
  {
    title: "Training & post-sales support",
    body: "Channel-partner and end-user training so systems are installed, maintained and managed properly. Support continues after the last camera is live.",
  },
  {
    title: "Warranty & repair",
    body: "Authorised warranty handling and repair for the brands we distribute, so faults are diagnosed and turned around without sending customers into a maze of vendors.",
  },
];

export const industries = [
  {
    title: "Municipal & smart cities",
    body: "Public-space CCTV, command centres and safe-city platforms that give metro and provincial teams a single operational picture.",
  },
  {
    title: "Mining & industrial",
    body: "Perimeter, plant and people protection for high-risk sites where downtime and incidents carry real cost.",
  },
  {
    title: "Logistics & freight",
    body: "Yard, warehouse and cargo visibility: video, RFID and tracking stitched into one chain of custody.",
  },
  {
    title: "Commercial campuses",
    body: "Offices, parks and multi-tenant estates with unified access, time attendance and video.",
  },
  {
    title: "Retail & finance",
    body: "Store, branch and back-of-house protection with analytics that actually get used by operations.",
  },
  {
    title: "Critical infrastructure",
    body: "Utilities, transport and health campuses where public safety and continuity cannot be optional.",
  },
];

export type Partner = {
  name: string;
  role: string;
  /**
   * Monochrome knockout mark, cropped to its ink and optically balanced
   * against the other marks. The `.png` without the suffix is the dark-ink
   * master, kept for light backgrounds.
   */
  mark?: string;
  /** Slug of the solution this line is detailed on, when there is one. */
  solution?: string;
};

export const partners: Partner[] = [
  {
    name: "Hitron",
    role: "Surveillance",
    mark: "/images/range/hitron-light.png",
    solution: "surveillance",
  },
  {
    name: "TBS",
    role: "Access and biometrics",
    mark: "/images/range/tbs-light.png",
    solution: "access-control",
  },
  {
    name: "Satel",
    role: "Intrusion",
    mark: "/images/range/satel-light.png",
    solution: "intrusion",
  },
  { name: "AN4", role: "VMS and PSIM", solution: "vms-psim" },
  { name: "Veridot", role: "Asset tagging", solution: "asset-tagging" },
  {
    name: "Axxonsoft",
    role: "Video management",
    mark: "/images/range/axxonsoft-light.png",
  },
  {
    name: "Holomatrix",
    role: "Technology partner",
    mark: "/images/range/holomatrix-light.png",
  },
];

export type Solution = {
  slug: string;
  title: string;
  kicker: string;
  partner: string;
  partnerNote: string;
  summary: string;
  lead: string;
  image: string;
  brochure: string;
  capabilities: string[];
  fits: string[];
};

export const solutions: Solution[] = [
  {
    slug: "surveillance",
    title: "Surveillance",
    kicker: "Video & thermal",
    partner: "Hitron",
    partnerNote: "Distributed with CIT’s Hitron surveillance range",
    summary:
      "Cameras and thermal imaging that protect people, facilities, freight, equipment and stock, designed as a system, not a pile of devices.",
    lead: "By combining current imaging technology with physical security, CIT specifies surveillance that actually reduces risk. Coverage, analytics and recording are designed around how the site is used, not around a camera count.",
    image: "/images/surveillance.jpg",
    brochure:
      "https://cit-tech.co.za/wp-content/uploads/2020/08/CIT-Hitron-Brochure-min_compressed.pdf",
    capabilities: [
      "IP, low-light and thermal camera specification",
      "Perimeter, facade, yard and public-space coverage design",
      "Analytics for intrusion, loitering, line-crossing and occupancy",
      "Recording, retention and evidence-export workflows",
      "Integration into VMS and PSIM platforms",
    ],
    fits: ["Municipal CCTV", "Industrial sites", "Campuses", "Logistics yards"],
  },
  {
    slug: "access-control",
    title: "Access control & time attendance",
    kicker: "Identity at the door",
    partner: "TBS",
    partnerNote: "Touchless biometric systems for enterprises of any size",
    summary:
      "A biometric one-stop shop for resellers and integrators: face, credential and time attendance that scale from a single lobby to a national estate.",
    lead: "Access should be fast for the people who belong, and closed to everyone else. CIT supplies biometric and credential systems suited to offices, industrial sites and multi-site enterprises, with time attendance in the same stack.",
    image: "/images/access.jpg",
    brochure:
      "https://cit-tech.co.za/wp-content/uploads/2020/08/CIT-TBS_Product_Brochure_E_2016-min.pdf",
    capabilities: [
      "3D face and multi-modal biometric readers",
      "Card, PIN and mobile credentials",
      "Time and attendance with payroll-ready exports",
      "Multi-site enrolment and device management",
      "Integrator and reseller programme",
    ],
    fits: ["Offices", "Industrial gates", "Multi-site estates", "Workforce sites"],
  },
  {
    slug: "intrusion",
    title: "Intrusion detection",
    kicker: "Electronic alarms",
    partner: "Satel",
    partnerNote: "High-quality electronic alarm devices",
    summary:
      "Control panels, detectors, sirens, radio and power: a complete intrusion range for sites that cannot rely on cameras alone.",
    lead: "CIT specialises in high-quality electronic alarm devices. The range covers control panels, sirens, detectors, monitoring-station connectivity, radio controllers and switched-mode power supplies, specified as a complete detection layer.",
    image: "/images/intrusion.jpg",
    brochure:
      "https://cit-tech.co.za/wp-content/uploads/2020/08/CIT_Satel-Complete-Catalogue-min.pdf",
    capabilities: [
      "Intruder control panels and expanders",
      "PIR, dual-tech and outdoor detectors",
      "Sirens, strobes and notification",
      "Radio controllers and monitoring-station links",
      "Power supplies sized for the installation",
    ],
    fits: ["Perimeters", "Warehouses", "Retail after hours", "Plant rooms"],
  },
  {
    slug: "vms-psim",
    title: "VMS & PSIM",
    kicker: "The unified platform",
    partner: "AN4",
    partnerNote: "Advanced analytics VMS and physical security information management",
    summary:
      "Real-time video management for enterprise and smart-city scale, plus a PSIM layer that binds cameras, access, alarms and procedures into one operating picture.",
    lead: "Cameras, doors and alarms only pay off if operators can act. CIT supplies advanced-analytics VMS for unlimited enterprise and smart-city deployments, and PSIM that unifies diverse security products on one platform.",
    image: "/images/vms.jpg",
    brochure:
      "https://cit-tech.co.za/wp-content/uploads/2020/08/CIT_AN4-brochure-ENG-red2018-web-min.pdf",
    capabilities: [
      "Enterprise video management with analytics",
      "Smart-city scale: districts, not just buildings",
      "PSIM: cameras, access, intrusion, SOP on one desk",
      "Alarm handling, escalation and audit trails",
      "Open integration with the rest of the CIT stack",
    ],
    fits: ["Safe-city programmes", "Command centres", "Multi-site enterprises"],
  },
  {
    slug: "asset-tagging",
    title: "Asset tagging & tracing",
    kicker: "Know what you own",
    partner: "Veridot",
    partnerNote: "Microdots, RFID, GSM and satellite tracing",
    summary:
      "A total solution for tagging, tracing and tracking (barcodes, UV, microdots, RFID, GSM/GPRS and satellite) so assets can be identified and recovered.",
    lead: "CIT offers a complete asset-identification stack: product barcodes, invisible UV marks, microdots, RFID tags, GSM (GPRS) and satellite tracking devices. Specify the mark to the risk, not the other way around.",
    image: "/images/assets.jpg",
    brochure:
      "https://cit-tech.co.za/wp-content/uploads/2020/08/CIT_Veridot-and-Radar-Tragging-Tracing-Solutions-min.pdf",
    capabilities: [
      "SANS-aligned microdot marking (Veridot)",
      "RFID portals and item-level tags",
      "UV and barcode identification",
      "GSM and satellite tracking devices",
      "Recovery workflows tied to an identification database",
    ],
    fits: ["Fleets", "Plant & tools", "Freight", "High-value inventory"],
  },
];

export function getSolution(slug: string) {
  return solutions.find((item) => item.slug === slug);
}

export const faqs = [
  {
    q: "Do you sell only to end customers?",
    a: "No. CIT is a distributor. We work with channel partners, integrators and resellers, and we also design turnkey solutions with end customers where the project needs it.",
  },
  {
    q: "Can you cover sites outside Pretoria?",
    a: "Yes. We are based in Pretoria and serve South Africa and the rest of Africa through partners, training and project support.",
  },
  {
    q: "Do you offer training for installers?",
    a: "Yes. The channel partner training programme covers deployment, maintenance and management so systems are handed over in a professional state.",
  },
  {
    q: "Is finance available on projects?",
    a: "CIT can structure tailored finance options for projects and turnkey solutions. Raise it when you brief us and we will look at the period and the scope.",
  },
  {
    q: "What does Level 2 B-BBEE mean for a tender?",
    a: "As a Level 2 contributor, 125% of what you spend with CIT counts toward your own preferential-procurement scorecard, against 100% for a Level 4 supplier. Community Investment Technology is also a member of the CIH Group, and the verification certificate is available on request.",
  },
];

export const partnerBenefits = [
  {
    title: "Smart technology",
    body: "IoT and unified smart-city technologies, specified with our strategic partners for each customer's application, not a one-size stack.",
  },
  {
    title: "Total-cost solutions",
    body: "Designs that look at the full period of ownership, so the return is measured in uptime, incidents avoided and operators who can actually use the system.",
  },
  {
    title: "Channel training",
    body: "Skills training so partners deploy, maintain and manage the technology professionally for the end user.",
  },
  {
    title: "Project finance",
    body: "Tailored finance options for projects and turnkey solutions, structured over the period of the work.",
  },
];
