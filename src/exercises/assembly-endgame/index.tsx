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
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter !== undefined && !currentWord.includes(lastGuessedLetter);
  const lastLostLanguage = languages[wrongGuessCount - 1]?.name;

  // Functions
  function addGuessedLetter(letter: string) {
    setGuessedLetters((prev) =>
      prev.includes(letter) ? prev : [...prev, letter],
    );
  }

  function startNewGame() {
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
  }

  // Effects
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (isGameOver) return;
      const letter = event.key.toLowerCase();
      if (/^[a-z]$/.test(letter)) {
        addGuessedLetter(letter);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [guessedLetters, isGameOver]);

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
        <Word
          word={currentWord}
          guessedLetters={guessedLetters}
          isGameLost={isGameLost}
        />

        {/* Hidden section for screen readers */}
        <section className="sr-only" aria-live="polite" role="status">
          <p>
            {lastGuessedLetter &&
              (currentWord.includes(lastGuessedLetter)
                ? `Correct! The letter ${lastGuessedLetter} is in the word.`
                : `Wrong! The letter ${lastGuessedLetter} is not in the word.`)}
          </p>
          <p>
            Current word:{" "}
            {currentWord
              .split("")
              .map((letter) =>
                guessedLetters.includes(letter) ? letter + "." : "blank.",
              )
              .join(" ")}
          </p>
        </section>

        {!isGameOver && (
          <Keyboard
            addGuessedLetter={addGuessedLetter}
            guessedLetters={guessedLetters}
            currentWord={currentWord}
          />
        )}
        {isGameOver && (
          <button className="new-game" onClick={startNewGame}>
            New Game
          </button>
        )}
      </main>
    </div>
  );
}
