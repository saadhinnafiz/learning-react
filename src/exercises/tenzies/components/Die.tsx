type DieProps = {
  value: number;
};

export default function Die(props: DieProps) {
  return <button className="die-button">{props.value}</button>;
}
