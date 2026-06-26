import profileImage from "../../../assets/pfp.jpeg";

export default function Avatar() {
  return (
    <div className="card-avatar">
      <img src={profileImage} alt="image of profile picture" />
    </div>
  );
}
