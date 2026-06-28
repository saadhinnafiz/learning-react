type JokeProps = {
  setup?: string;
  punchline: string;
};

export default function Jokes(props: JokeProps) {
  return (
    <article className="jokes">
      {props.setup && <p className="jokes-setup">{props.setup}</p>}
      <p className="jokes-punchline">{props.punchline}</p>
    </article>
  );
}
