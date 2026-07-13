import { languages } from "../languages";
import { clsx } from "clsx";

type LanguagesProps = {
  wrongGuessCount: number;
};

export default function Languages(props: LanguagesProps) {
  const languageElements = languages.map((lang, index) => (
    <span
      key={lang.name}
      style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
      className={clsx("chip", { lost: index < props.wrongGuessCount })}
    >
      {lang.name}
    </span>
  ));

  return <section className="language-chips">{languageElements}</section>;
}
