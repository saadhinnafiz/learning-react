import { useState } from "react";
import Header from "./components/Header";
import Languages from "./components/Languages";
import GameStatus from "./components/GameStatus";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";

export default function App() {
  const [currentWord, setCurrentWord] = useState("cucumber");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  function addGuessedLetter(letter: string) {
    setGuessedLetters((prev) =>
      prev.includes(letter) ? prev : [...prev, letter],
    );
  }

  return (
    <div className="endgame-page">
      <main>
        <Header />
        <GameStatus />
        <Languages />
        <Word word={currentWord} />
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
