type WordProps = {
  word: string;
  guessedLetters: string[];
  isGameLost: boolean;
};

export default function Word(props: WordProps) {
  const letters = props.word.split("");

  const letterElements = letters.map((letter, index) => {
    const isGuessed = props.guessedLetters.includes(letter);
    const isMissed = props.isGameLost && !isGuessed;

    return (
      <span
        key={index}
        className={isMissed ? "missed-letter" : ""}
        aria-label={isGuessed ? letter : "blank"}
      >
        {isGuessed || props.isGameLost ? letter.toUpperCase() : ""}
      </span>
    );
  });

  return (
    <section className="word" aria-label="Word to guess">
      {letterElements}
    </section>
  );
}
