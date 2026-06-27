import globeImage from "../../../assets/globe.svg";

export default function Header() {
  return (
    <div className="travel-header">
      <img className="travel-globe" src={globeImage} alt="" />
      <h1 className="travel-heading">my travel journal</h1>
    </div>
  );
}
