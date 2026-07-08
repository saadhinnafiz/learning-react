import { useState, useEffect } from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return <h1>Window Width: {windowWidth}</h1>;
}
