import Jokes from "./components/Jokes";

export default function App() {
  return (
    <main className="jokes-page">
      <Jokes
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        rating={3}
        votes={842}
        isFavorite={false}
      />
      <Jokes
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
        rating={4}
        votes={2301}
        isFavorite={true}
      />
      <Jokes
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
        rating={2}
        votes={410}
        isFavorite={false}
      />
      <Jokes
        punchline="It's hard to explain puns to kleptomaniacs because they always take things literally."
        rating={5}
        votes={5892}
        isFavorite={true}
      />
      <Jokes
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
        rating={3}
        votes={1100}
        isFavorite={false}
      />
      <Jokes
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
        rating={4}
        votes={3340}
        isFavorite={true}
      />
      <Jokes
        setup="Why can't you trust an atom?"
        punchline="Because they make up everything!"
        rating={5}
        votes={6120}
        isFavorite={true}
      />
      <Jokes
        setup="Did you hear about the mathematician who's afraid of negative numbers?"
        punchline="He'll stop at nothing to avoid them."
        rating={4}
        votes={2750}
        isFavorite={false}
      />
    </main>
  );
}
