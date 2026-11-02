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
  { href: "#services", label: "Services", page: "services" },
  { href: "#gallery", label: "Gallery", page: "gallery" },
  { href: "#faq", label: "FAQ", page: "faq" },
  { href: "#contact", label: "Contact Us", page: "contact" },
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
    image: "service-pediatric.png",
    involves:
      "A discussion of a child’s movement, daily activities and participation. Depending on assessment, support may include age-appropriate movement activities and guidance for families.",
    benefit:
      "Children with movement or developmental concerns may be referred for assessment. The appropriate type of support depends on the child’s individual needs.",
    next: "Discuss your child’s needs and any existing clinical advice with the care team.",
  },
  {
    id: "cerebral-palsy",
    icon: "hand-heart",
    title: "Cerebral Palsy Rehabilitation",
    text: "A care approach shaped around everyday movement, comfort and individual goals.",
    image: "service-pediatric.png",
    involves:
      "An individualized conversation about movement, positioning, comfort and everyday participation. Goals and any proposed activities should be tailored to the child or adult following assessment.",
    benefit:
      "Children or adults living with cerebral palsy may wish to discuss support for specific functional priorities. Suitability and care options require professional assessment.",
    next: "No single approach is appropriate for everyone; plans should reflect individual priorities.",
  },
  {
    id: "stroke",
    icon: "activity",
    title: "Stroke Rehabilitation",
    text: "Rehabilitation support for daily activities and movement after a stroke.",
    image: "service-stroke.png",
    involves:
      "Assessment-led support may address movement, balance and everyday activities after a stroke. Goals, timing and the level of assistance should be discussed with an appropriate professional.",
    benefit:
      "People recovering from or living with the effects of a stroke may seek rehabilitation advice when medically appropriate. Care needs vary widely between individuals.",
    next: "Rehabilitation information is not emergency advice. Seek urgent medical care for new stroke symptoms.",
  },
  {
    id: "neurological",
    icon: "brain",
    title: "Neurological Physiotherapy",
    text: "Movement-focused support for people living with neurological conditions.",
    image: "service-neuro.png",
    involves:
      "A person-centered review of movement and functional concerns associated with a neurological condition. Appropriate activity and rehabilitation options depend on clinical assessment.",
    benefit:
      "Children or adults with a diagnosed neurological condition, or a referral for movement concerns, may benefit from discussing assessment options with the team.",
    next: "Existing medical advice and relevant referrals can help inform the conversation.",
  },
  {
    id: "spinal",
    icon: "accessibility",
    title: "Spinal Cord Injury Rehabilitation",
    text: "Rehabilitation guidance focused on function and life after spinal cord injury.",
    image: "service-spinal.png",
    involves:
      "Discussion of individual functional goals, daily routines and support needs following spinal cord injury. Any rehabilitation plan should be clinically appropriate and coordinated with existing care.",
    benefit:
      "People living with spinal cord injury may seek advice about rehabilitation priorities when medically appropriate. The nature of support depends on injury, health and personal circumstances.",
    next: "Specific equipment, interventions and facilities are not confirmed for PLC.",
  },
  {
    id: "speech",
    icon: "message-circle",
    title: "Speech Therapy",
    text: "Support for communication needs, subject to assessment and service availability.",
    image: "service-speech.png",
    involves:
      "A discussion of communication concerns and possible assessment pathways. Any therapy approach should follow a qualified professional’s assessment and agreed individual goals.",
    benefit:
      "Children or adults with speech, language or communication concerns may wish to ask whether an appropriate assessment is available.",
    next: "Speech therapy availability and the qualifications of the providing professional require PLC confirmation.",
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
