type WordProps = {
  word: string;
};

export default function Word(props: WordProps) {
  const letters = props.word.split("");

  const letterElements = letters.map((letter, index) => (
    <span key={index}>{letter.toUpperCase()}</span>
  ));

  return <section className="word">{letterElements}</section>;
}
