import iconPhoto from "../../../assets/chef-icon.png";

export default function Header() {
  return (
    <header className="chef-header">
      <img src={iconPhoto} alt="Image of a robot chef" className="chef-icon" />
      <h1 className="chef-title">Chef Claude</h1>
    </header>
  );
}
