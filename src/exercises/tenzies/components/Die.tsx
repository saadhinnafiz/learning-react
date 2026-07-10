type DieProps = {
  value: number;
  isHeld: boolean;
  holdDice: () => void;
};

export default function Die(props: DieProps) {
  return (
    <button
      onClick={props.holdDice}
      className="die-button"
      style={{ backgroundColor: props.isHeld ? "#59E391" : "#ffffff" }}
      aria-label={`Die with value ${props.value}, ${props.isHeld ? "held" : "not held"}`}
      aria-pressed={props.isHeld}
    >
      {props.value}
    </button>
  );
}
