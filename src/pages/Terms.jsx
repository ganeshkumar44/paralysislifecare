import LegalPage from "../components/LegalPage";

const sections = [
  {
    id: "terms-using",
    number: "01",
    title: "Using this website",
    paragraphs: [
      "These draft Terms & Conditions describe the intended use of the Paralysis Life Care website. The website is designed to provide general information about PLC and a way to make a general enquiry. It is not intended to provide emergency support or an online treatment service.",
      "PLC’s legal entity, website operator, jurisdiction and final terms of use must be confirmed before publication. This draft is a content placeholder and is not a finalized legal agreement.",
    ],
  },
  {
    id: "terms-content",
    number: "02",
    title: "General information and content",
    paragraphs: [
      "Website content should be used for general information only. Service descriptions, staff details, locations, images and contact information may be incomplete in this design and require PLC verification. An illustrative photograph does not show PLC staff, patients or facilities.",
      "Final wording should explain how content is maintained, how corrections can be requested and what users should verify directly with PLC. No service availability or specific capability is established by this draft.",
    ],
  },
  {
    id: "terms-healthcare",
    number: "03",
    title: "Healthcare disclaimer",
    paragraphs: [
      "Information on this website does not replace an assessment, diagnosis or advice from an appropriately qualified healthcare professional. Do not disregard existing clinical advice or delay seeking care because of information on a website.",
      "Rehabilitation needs and outcomes vary. No recovery timeline, improvement or outcome is promised. The website and enquiry form are not emergency channels; seek appropriate emergency care for urgent medical concerns.",
    ],
  },
  {
    id: "terms-appointments",
    number: "04",
    title: "Appointment and enquiry terms",
    paragraphs: [
      "Submitting an enquiry does not confirm an appointment, create a treatment plan or guarantee that a service is available. Consultation arrangements, location, suitability and any charges should be confirmed directly with PLC through a verified contact channel.",
      "Booking, payment, cancellation, refund and rescheduling policies have not been supplied. PLC and its legal reviewer must add the applicable policies before launch. Do not include medical records or sensitive health details in a general website enquiry.",
    ],
  },
  {
    id: "terms-use",
    number: "05",
    title: "Responsible use",
    paragraphs: [
      "Use any future enquiry form only for a legitimate general enquiry and provide accurate contact information. Do not submit unlawful, abusive or harmful material, interfere with the website or share another person’s personal information without appropriate authority.",
      "The final terms should identify acceptable use requirements and any consequences in a way that is appropriate under applicable law. The design itself does not collect or submit form information.",
    ],
  },
  {
    id: "terms-third-parties",
    number: "06",
    title: "Third-party links and content",
    paragraphs: [
      "Verified social links, map content or other third-party resources may be added after review. Their inclusion, purpose and privacy implications should be confirmed before launch. This design does not establish that any third-party service is currently used.",
      "If external links are introduced, the final terms should explain that the linked provider’s own terms and privacy information may apply. PLC should review any required disclosures rather than assume responsibility is automatically excluded.",
    ],
  },
  {
    id: "terms-liability",
    number: "07",
    title: "Liability and applicable law",
    paragraphs: [
      "The scope of any warranties, limitations of liability, dispute process and governing law must be drafted by a qualified legal professional for PLC’s actual operations and applicable requirements. No blanket exclusion of responsibility is proposed here.",
      "Nothing in the final terms should seek to remove rights or obligations that cannot lawfully be excluded. Legal entity details, the applicable jurisdiction and an appropriate process for concerns remain to be supplied.",
    ],
  },
  {
    id: "terms-updates",
    number: "08",
    title: "Contact and future updates",
    paragraphs: [
      "Questions about the website or these terms can be sent to meezingbrahma@paralysislifecare.com, or by phone on 6000511473 and 6003873792.",
      "The clinic is open Monday to Saturday, 9:00 AM to 6:00 PM. Sunday is the weekly off.",
    ],
  },
];

export default function Terms() {
  return (
    <LegalPage
      basePath="/terms"
      eyebrow="WEBSITE INFORMATION / LEGAL"
      title="Terms & Conditions"
      titleId="terms-title"
      lead="A clear starting point for understanding this website, general enquiries and the limits of online healthcare information."
      note="These terms explain how this website and general enquiries are intended to be used."
      sections={sections}
    />
  );
}
