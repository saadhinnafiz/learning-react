import globeImage from "../../../assets/globe.svg";

export default function Banner() {
  return (
    <header className="travel-header">
      <img className="travel-globe" src={globeImage} alt="globe icon" />
      <h1 className="travel-heading">my travel journal</h1>
    </header>
  );
}
