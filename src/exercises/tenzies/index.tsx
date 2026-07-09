import Die from "./components/Die";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function Tenzies() {
  function generateAllNewDice() {
    return Array.from({ length: 10 }, () => ({
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid(),
    }));
  }
  const [dice, setDice] = useState(generateAllNewDice());

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  function rollDice() {
    setDice(generateAllNewDice());
  }

  function holdDice(id: string) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die,
      ),
    );
  }

  return (
    <div className="tenzies-page">
      <main className="tenzies-board">
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <section className="dice-container">{diceElements}</section>
        <button onClick={rollDice} className="roll-button">
          Roll
        </button>
      </main>
    </div>
  );
}
