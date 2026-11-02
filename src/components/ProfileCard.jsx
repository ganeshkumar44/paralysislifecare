import { Icon } from "../assets.jsx";

export default function ProfileCard({ member, detailed = false }) {
  return (
    <article className="team-card">
      <div className="portrait">
        <Icon name="user-round" width={40} height={40} alt="" />
      </div>
      <div className="profile-details">
        <h3>{member.name}</h3>
        <p>{member.role}</p>
        {detailed ? (
          <>
            <hr className="profile-rule" />
            <p className="profile-bio">{member.bio}</p>
          </>
        ) : null}
      </div>
    </article>
  );
}
