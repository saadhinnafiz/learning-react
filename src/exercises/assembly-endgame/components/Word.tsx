type WordProps = {
  word: string;
  guessedLetters: string[];
};

export default function Word(props: WordProps) {
  const letters = props.word.split("");

  const letterElements = letters.map((letter, index) => (
    <span key={index}>
      {props.guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
    </span>
  ));

  return <section className="word">{letterElements}</section>;
}
