import { clsx } from "clsx";

type KeyboardProps = {
  addGuessedLetter: (letter: string) => void;
  guessedLetters: string[];
  currentWord: string;
};

export default function Keyboard(props: KeyboardProps) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const keyboardElements = alphabet.split("").map((letter) => {
    const isGuessed = props.guessedLetters.includes(letter);
    const isCorrect = isGuessed && props.currentWord.includes(letter);
    const isWrong = isGuessed && !props.currentWord.includes(letter);
    const className = clsx("keyboard-btn", {
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        key={letter}
        className={className}
        onClick={() => props.addGuessedLetter(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return <section className="keyboard-buttons">{keyboardElements}</section>;
}
