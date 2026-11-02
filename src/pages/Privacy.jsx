import LegalPage from "../components/LegalPage";

const sections = [
  {
    id: "privacy-notice",
    number: "01",
    title: "About this draft notice",
    paragraphs: [
      "This Privacy Policy is a draft content framework for the Paralysis Life Care website. It must be checked against PLC’s actual data practices and applicable law before it is published. It does not claim that any tracking, storage or processing system is currently in use.",
      "The responsible legal entity, privacy contact and any legally required organizational details have not been supplied. These must be verified and added to the final notice. Effective date: not yet set.",
    ],
  },
  {
    id: "privacy-information",
    number: "02",
    title: "Information you may choose to provide",
    paragraphs: [
      "The proposed enquiry form contains fields for name, phone number, email address, service of interest, preferred location and a general message. If implemented, the final policy must explain which fields are necessary, what is optional and what information is actually collected.",
      "Please do not include diagnoses, medical records, test results or other sensitive medical information in a general enquiry. Any collection of health information requires a separately reviewed, appropriate process.",
    ],
  },
  {
    id: "privacy-use",
    number: "03",
    title: "How information may be used",
    paragraphs: [
      "The intended purpose of the proposed form is to allow PLC to respond to a general enquiry. Before launch, PLC must confirm each actual purpose, the applicable legal basis or consent requirements, and who is responsible for handling the information.",
      "Do not assume that enquiry details may be used for marketing, profiling or unrelated purposes. Any additional use needs its own assessment, appropriate transparency and any required permissions.",
    ],
  },
  {
    id: "privacy-handling",
    number: "04",
    title: "Contact details and enquiry handling",
    paragraphs: [
      "PLC must verify where submitted contact information would be delivered, who could access it and how enquiries would be followed up. This design does not establish whether data would be stored on a website, sent by email or handled in another system.",
      "The final notice should explain the process in clear language, including how users can ask a privacy question or correct contact information. The proposed checkbox wording also requires legal and operational review.",
    ],
  },
  {
    id: "privacy-cookies",
    number: "05",
    title: "Cookies and analytics",
    paragraphs: [
      "No cookie, analytics or advertising configuration has been supplied. This draft does not state that PLC uses tracking technologies, nor does it claim that the website is free from them. The actual technology stack must be audited before publication.",
      "If cookies or analytics are implemented, describe their purposes, providers, duration and any required choices or consent controls accurately. Do not add a generic tracking statement that does not match the live website.",
    ],
  },
  {
    id: "privacy-sharing",
    number: "06",
    title: "Third parties and sharing",
    paragraphs: [
      "Hosting, form delivery, embedded maps, social tools and other third-party services must be identified if they are actually used. PLC should verify what information each provider receives, the purpose of any sharing and any relevant cross-border handling.",
      "No vendor list, sale or sharing practice is established by this design. The final policy must reflect confirmed arrangements and applicable disclosure requirements. External websites may have their own privacy information.",
    ],
  },
  {
    id: "privacy-protection",
    number: "07",
    title: "Protecting information",
    paragraphs: [
      "PLC must confirm the organizational and technical measures used to protect personal information before describing them publicly. This draft does not claim encryption standards, certifications or specific security controls.",
      "The final notice should accurately describe safeguards at an appropriate level and explain any relevant contact or reporting process. No website can be represented as completely risk-free.",
    ],
  },
  {
    id: "privacy-retention",
    number: "08",
    title: "Retention and deletion",
    paragraphs: [
      "No retention period has been supplied. PLC must establish appropriate periods or criteria based on the purposes of processing, legal obligations and its actual operational requirements. Do not publish an invented fixed period.",
      "The final notice should explain how enquiry information is retained, reviewed and deleted, including any lawful exceptions or obligations that may apply.",
    ],
  },
  {
    id: "privacy-rights",
    number: "09",
    title: "Your rights and choices",
    paragraphs: [
      "Depending on applicable law and the context, people may have rights relating to their personal information. PLC’s legal reviewer should confirm the rights that apply, how requests can be made, any identity checks and the response process.",
      "The final notice should also address enquiries made on behalf of children or other individuals and any applicable consent requirements. No automatic entitlement, response deadline or complaint authority is assumed in this draft.",
    ],
  },
  {
    id: "privacy-updates",
    number: "10",
    title: "Privacy contact and updates",
    paragraphs: [
      "The verified privacy contact, official email address and postal address are awaiting PLC confirmation. Supplied phone numbers: 6000511473 and 6003873792 — verify before publishing and confirm whether they are suitable for privacy enquiries.",
      "Add an approved effective date, revision information and any required process for communicating changes after the notice has been reviewed against actual practices and applicable law.",
    ],
  },
];

export default function Privacy() {
  return (
    <LegalPage
      eyebrow="WEBSITE INFORMATION / LEGAL"
      title="Privacy Policy"
      titleId="privacy-title"
      lead="A transparent starting point for explaining how personal information may be handled. This draft must be matched to PLC’s actual practices and applicable law."
      note="Draft document only. Not approved legal advice or a finalized policy. Professional review is required before publication."
      notice="Not for publication • Draft Privacy Policy pending applicable-law review and verification of actual data collection, technology, sharing, security and retention practices."
      sections={sections}
    />
  );
}