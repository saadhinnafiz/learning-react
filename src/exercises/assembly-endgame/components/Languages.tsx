import { languages } from "../languages";

export default function Languages() {
  const languageElements = languages.map((lang) => (
    <span
      key={lang.name}
      style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
      className="chip"
    >
      {lang.name}
    </span>
  ));

  return <section className="language-chips">{languageElements}</section>;
}
