import Jokes from "./components/Jokes";
import jokesData from "./jokesData";

export default function App() {
  const jokeElements = jokesData.map((joke, index) => {
    return (
      <Jokes
        key={index}
        setup={joke.setup}
        punchline={joke.punchline}
        rating={joke.rating}
        votes={joke.votes}
        isFavorite={joke.isFavorite}
      />
    );
  });
  return <main className="jokes-page">{jokeElements}</main>;
}
