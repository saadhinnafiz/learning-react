import { useState } from "react";
import Header from "./components/Header";
import Languages from "./components/Languages";
import GameStatus from "./components/GameStatus";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";

export default function App() {
  const [currentWord, setCurrentWord] = useState("cucumber");

  return (
    <div className="endgame-page">
      <main>
        <Header />
        <GameStatus />
        <Languages />
        <Word word={currentWord} />
        <Keyboard />
        <button className="new-game">New Game</button>
      </main>
    </div>
  );
}
