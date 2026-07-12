type KeyboardProps = {
  addGuessedLetter: (letter: string) => void;
};

export default function Keyboard(props: KeyboardProps) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const keyboardElements = alphabet.split("").map((letter) => (
    <button key={letter} onClick={() => props.addGuessedLetter(letter)}>
      {letter.toUpperCase()}
    </button>
  ));

  return <section className="keyboard-buttons">{keyboardElements}</section>;
}
