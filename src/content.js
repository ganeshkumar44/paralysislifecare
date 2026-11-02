export const navLinks = [
  { href: "#top", label: "Home", page: "home" },
  {
    href: "#about",
    label: "About Us",
    icon: "chevron-down",
    iconSize: 13,
    pages: ["about", "team"],
    children: [
      { href: "#about", label: "About Us" },
      { href: "#team", label: "Our Team" },
    ],
  },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact Us" },
];

export const principles = [
  "Individualized Care",
  "Experienced Rehabilitation Team",
  "Patient-Centered Approach",
];

export const services = [
  {
    id: "pediatric",
    icon: "baby",
    title: "Pediatric Rehabilitation",
    text: "Individualized support for movement, play and participation throughout childhood.",
  },
  {
    id: "cerebral-palsy",
    icon: "hand-heart",
    title: "Cerebral Palsy Rehabilitation",
    text: "A care approach shaped around everyday movement, comfort and individual goals.",
  },
  {
    id: "stroke",
    icon: "activity",
    title: "Stroke Rehabilitation",
    text: "Rehabilitation support for daily activities and movement after a stroke.",
  },
  {
    id: "neurological",
    icon: "brain",
    title: "Neurological Physiotherapy",
    text: "Movement-focused support for people living with neurological conditions.",
  },
  {
    id: "spinal",
    icon: "accessibility",
    title: "Spinal Cord Injury Rehabilitation",
    text: "Rehabilitation guidance focused on function and life after spinal cord injury.",
  },
  {
    id: "speech",
    icon: "message-circle",
    title: "Speech Therapy",
    text: "Support for communication needs, subject to assessment and service availability.",
  },
];

export const featureRows = [
  ["Patient-centered approach", "Personalized rehabilitation plans"],
  ["Pediatric and adult care", "Multidisciplinary support"],
  ["Focus on functional progress", "Supportive care environment"],
];

export const galleryItems = [
  { title: "Clinic photograph", variant: "feature" },
  { title: "Physiotherapy photograph", variant: "mid" },
  { title: "Activities photograph", variant: "short" },
];

export const stories = [
  {
    title: "Awaiting an approved patient story",
    text: "No testimonial is published here yet. Written consent and PLC review are required before adding any personal experience.",
  },
  {
    title: "Awaiting an approved family story",
    text: "No testimonial is published here yet. Written consent and PLC review are required before adding any personal experience.",
  },
];

export const exploreLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#team", label: "Our Team" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact Us" },
];

export const photoCaption = "Illustrative image—not PLC staff or patients";
