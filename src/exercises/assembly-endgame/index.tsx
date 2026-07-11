import { useState } from "react";
import Header from "./components/Header";
import Languages from "./components/Languages";
import GameStatus from "./components/GameStatus";
import Word from "./components/Word";

export default function App() {
  const [currentWord, setCurrentWord] = useState("cucumber");

  return (
    <div className="endgame-page">
      <main>
        <Header />
        <GameStatus />
        <Languages />
        <Word word={currentWord} />
      </main>
    </div>
  );
}
