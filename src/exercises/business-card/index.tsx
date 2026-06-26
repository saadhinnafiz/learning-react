import Avatar from "./components/Avatar";
import Buttons from "./components/Buttons";
import Info from "./components/Info";
import SocialLinks from "./components/SocialLinks";

export default function App() {
  return (
    <div className="card-container">
      <Avatar />
      <Info />
      <hr className="divider" />
      <SocialLinks />
      <hr className="divider" />

      <Buttons />
    </div>
  );
}
