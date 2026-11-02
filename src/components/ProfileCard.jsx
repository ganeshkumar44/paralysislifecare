import { Icon } from "../assets.jsx";

export default function ProfileCard({ detailed = false }) {
  return (
    <article className="team-card">
      <div className="portrait">
        <p className="portrait-status">APPROVAL REQUIRED</p>
        <div className="portrait-body">
          <Icon name="user-round" width={40} height={40} />
          <strong>Portrait awaiting approval</strong>
          <span>PLC-verified portrait to be supplied</span>
        </div>
        <p className="portrait-foot">No stock identity used</p>
      </div>
      <div className="profile-details">
        <p className="profile-kicker">PLC VERIFICATION PENDING</p>
        <h3>Full name awaiting approval</h3>
        <p>Designation to be confirmed by PLC</p>
        {detailed ? (
          <>
            <hr className="profile-rule" />
            <p className="profile-line">Qualifications: Awaiting verified content</p>
            <p className="profile-line">Specialization: Awaiting verified content</p>
            <p className="profile-bio">
              Biography will be added after PLC confirms the team member’s identity, professional
              details and publication consent.
            </p>
          </>
        ) : null}
      </div>
    </article>
  );
}
