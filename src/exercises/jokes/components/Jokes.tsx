type JokeProps = {
  setup?: string;
  punchline: string;
  rating: number;
  votes: number;
  isFavorite: boolean;
};

export default function Jokes(props: JokeProps) {
  return (
    <article className="jokes">
      {props.setup && <p className="jokes-setup">{props.setup}</p>}
      <p className="jokes-punchline">{props.punchline}</p>
      <div className="joke-footer">
        <p className="joke-rating">{props.rating}/5 ⭐</p>
        <p className="joke-votes">{props.votes} votes</p>
        {props.isFavorite && <p className="fav-jokes">❤️ Favorite</p>}
      </div>
    </article>
  );
}
