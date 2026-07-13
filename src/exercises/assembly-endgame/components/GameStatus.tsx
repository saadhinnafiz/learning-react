import { clsx } from "clsx";
import Confetti from "react-confetti";
import { getFarewellText } from "../utils";

type GameStatusProps = {
  lastGuessedLetter: string | undefined;
  isLastGuessIncorrect: boolean;
  isGameWon: boolean;
  isGameLost: boolean;
  lastLostLanguage: string | undefined;
};

export default function GameStatus(props: GameStatusProps) {
  return (
    <div>
      {props.isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
      <section
        role="status"
        aria-live="polite"
        className={clsx("game-status", {
          won: props.isGameWon,
          lost: props.isGameLost,
          farewell:
            props.isLastGuessIncorrect && !props.isGameWon && !props.isGameLost,
        })}
      >
        {!props.isGameWon &&
          !props.isGameLost &&
          props.isLastGuessIncorrect &&
          props.lastLostLanguage && (
            <p className="farewell-message">
              {getFarewellText(props.lastLostLanguage)}
            </p>
          )}
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
