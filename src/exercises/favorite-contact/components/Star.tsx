import starFilled from "../../../assets/star-filled.png";
import starEmpty from "../../../assets/star-empty.png";

type StarProps = {
  isFilled: boolean;
  handleClick: () => void;
};

export default function Star(props: StarProps) {
  const starIcon = props.isFilled ? starFilled : starEmpty;
  return (
    <button
      onClick={props.handleClick}
      aria-pressed={props.isFilled}
      aria-label={props.isFilled ? "Remove from favorites" : "Add to favorites"}
      className="contact-favorite-button"
    >
      <img
        src={starIcon}
        alt={props.isFilled ? "filled star icon" : "empty star icon"}
        className="contact-favorite"
      />
    </button>
  );
}
