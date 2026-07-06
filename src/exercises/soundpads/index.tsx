import { useState } from "react";
import pads from "./pads";
import Pad from "./components/Pad";

type PadData = {
  id: number;
  color: string;
  on: boolean;
};

export default function Soundpads() {
  const [padStates, setPadstates] = useState<PadData[]>(pads);

  function handleClick(padId: number) {
    setPadstates((prevPadStates) =>
      prevPadStates.map((pad) =>
        pad.id === padId ? { ...pad, on: !pad.on } : pad,
      ),
    );
  }

  const padElements = padStates.map((pad) => (
    <Pad
      key={pad.id}
      color={pad.color}
      on={pad.on}
      handleClick={() => handleClick(pad.id)}
    />
  ));

  return (
    <div className="soundpads-page">
      <main>
        <div className="pad-container">{padElements}</div>
      </main>
    </div>
  );
}
