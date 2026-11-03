import { Photo } from "../assets.jsx";

export default function ProfileCard({ member, detailed = false }) {
  return (
    <article className="team-card">
      <div className="portrait">
        <Photo
          file={member.image}
          width={768}
          height={1024}
          alt={`Portrait of ${member.name}`}
        />
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
