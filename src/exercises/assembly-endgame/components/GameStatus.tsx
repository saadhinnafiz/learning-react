import { clsx } from "clsx";
import Confetti from "react-confetti";

type GameStatusProps = {
  isGameWon: boolean;
  isGameLost: boolean;
};

export default function GameStatus(props: GameStatusProps) {
  if (!props.isGameWon && !props.isGameLost) return null;
  return (
    <div>
      {props.isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
      <section
        className={clsx("game-status", {
          won: props.isGameWon,
          lost: props.isGameLost,
        })}
      >
        {props.isGameWon && (
          <>
            <h2>You Win!</h2>
            <p>Well done! 🎉</p>
          </>
        )}
        {props.isGameLost && (
          <>
            <h2>Game Over!</h2>
            <p>You lose! Better start learning Assembly 😭</p>
          </>
        )}
      </section>
    </div>
  );
}
