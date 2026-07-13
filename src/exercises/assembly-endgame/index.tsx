import { useEffect, useState } from "react";
import Header from "./components/Header";
import Languages from "./components/Languages";
import GameStatus from "./components/GameStatus";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";

export default function App() {
  // State
  const [currentWord, setCurrentWord] = useState("cucumber");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  // Derived values
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter),
  ).length;

  console.log(wrongGuessCount);

  // Functions
  function addGuessedLetter(letter: string) {
    setGuessedLetters((prev) =>
      prev.includes(letter) ? prev : [...prev, letter],
    );
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
        <GameStatus />
        <Languages wrongGuessCount={wrongGuessCount} />
        <Word word={currentWord} guessedLetters={guessedLetters} />
        <Keyboard
          addGuessedLetter={addGuessedLetter}
          guessedLetters={guessedLetters}
          currentWord={currentWord}
        />
        <button className="new-game">New Game</button>
      </main>
    </div>
  );
}
