type PadProps = {
  color: string;
  on: boolean;
  handleClick: () => void;
};

export default function Pad(props: PadProps) {
  return (
    <button
      onClick={props.handleClick}
      style={{ backgroundColor: props.color }}
      className={props.on ? "on" : ""}
    ></button>
  );
}
