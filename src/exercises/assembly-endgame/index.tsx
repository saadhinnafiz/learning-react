import { useEffect, useState } from "react";
import { languages } from "./languages";
import Header from "./components/Header";
import Languages from "./components/Languages";
import GameStatus from "./components/GameStatus";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import { getRandomWord } from "./utils";

export default function App() {
  // State
  const [currentWord, setCurrentWord] = useState(getRandomWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  // Derived values
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter),
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;
  //the most recently guessed letter
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  //was that last guess wrong
  const isLastGuessIncorrect =
    lastGuessedLetter !== undefined && !currentWord.includes(lastGuessedLetter);

  const lastLostLanguage = languages[wrongGuessCount - 1]?.name;

  console.log(wrongGuessCount);

  // Functions
  function addGuessedLetter(letter: string) {
    setGuessedLetters((prev) =>
      prev.includes(letter) ? prev : [...prev, letter],
    );
  }

  // Functions
  function startNewGame() {
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
  }

  // Effects
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const letter = event.key.toLowerCase();
      if (/^[a-z]$/.test(letter)) {
        addGuessedLetter(letter);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [guessedLetters]);

  // Render
  return (
    <div className="endgame-page">
      <main>
        <Header />
        <GameStatus
          lastGuessedLetter={lastGuessedLetter}
          isLastGuessIncorrect={isLastGuessIncorrect}
          isGameWon={isGameWon}
          isGameLost={isGameLost}
          lastLostLanguage={lastLostLanguage}
        />
        <Languages wrongGuessCount={wrongGuessCount} />
        <Word word={currentWord} guessedLetters={guessedLetters} />
        <Keyboard
          addGuessedLetter={addGuessedLetter}
          guessedLetters={guessedLetters}
          currentWord={currentWord}
        />
        {isGameOver && (
          <button className="new-game" onClick={startNewGame}>
            New Game
          </button>
        )}
      </main>
    </div>
  );
}
