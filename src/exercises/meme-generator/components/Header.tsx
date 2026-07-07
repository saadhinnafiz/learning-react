import trollFace from "../../../assets/troll-face.png";

export default function Header() {
  return (
    <header className="meme-header">
      <img src={trollFace} />
      <h1>Meme Generator</h1>
    </header>
  );
}
