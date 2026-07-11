import Header from "./components/Header";
import Languages from "./components/Languages";
import GameStatus from "./components/GameStatus";

export default function App() {
  return (
    <div className="endgame-page">
      <main>
        <Header />
        <GameStatus />
        <Languages />
      </main>
    </div>
  );
}
