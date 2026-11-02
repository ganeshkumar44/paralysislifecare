import { Icon } from "../assets.jsx";

export default function ProfileCard({ detailed = false }) {
  return (
    <article className="team-card">
      <div className="portrait">
        <div className="portrait-body">
          <Icon name="user-round" width={40} height={40} />
        </div>
      </div>
      <div className="profile-details">
        <h3>Team member</h3>
        <p>Physiotherapy and neuro-rehabilitation</p>
        {detailed ? (
          <>
            <hr className="profile-rule" />
            <p className="profile-bio">
              Supporting children and adults through rehabilitation, with time to listen and plan
              the next step together.
            </p>
          </>
        ) : null}
      </div>
    </article>
  );
}
