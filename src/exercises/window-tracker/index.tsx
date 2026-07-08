import { useState } from "react";
import WindowTracker from "./components/WindowTracker.tsx";

export default function Main() {
  const [show, setShow] = useState(true);

  function toggle() {
    setShow((prevShow) => !prevShow);
  }

  return (
    <div className="window-tracker-page">
      <main className="window-tracker-container">
        <button onClick={toggle}>Toggle WindowTracker</button>
        {show && <WindowTracker />}
      </main>
    </div>
  );
}
