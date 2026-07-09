import { useState } from "react";
import Die from "./components/Die";

export default function Tenzies() {
  function generateAllNewDice() {
    return Array.from({ length: 10 }, () => Math.floor(Math.random() * 6) + 1);
  }
  const [dice, setDice] = useState(generateAllNewDice());

  const diceElements = dice.map((num, index) => (
    <Die key={index} value={num} />
  ));

  return (
    <div className="tenzies-page">
      <main className="tenzies-board">
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <section className="dice-container">{diceElements}</section>
      </main>
    </div>
  );
}
