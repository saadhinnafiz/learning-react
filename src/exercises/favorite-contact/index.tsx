import { useState } from "react";
import avatar from "../../assets/user.png";
import starFilled from "../../assets/star-filled.png";
import starEmpty from "../../assets/star-empty.png";

export default function FavoriteContact() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  const starIcon = contact.isFavorite ? starFilled : starEmpty;

  function toggleFavorite() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }

  return (
    <div className="contact-page">
      <article className="contact-card">
        <img
          src={avatar}
          className="contact-avatar"
          alt="User profile picture of John Doe"
        />
        <div className="contact-info">
          <button
            onClick={toggleFavorite}
            aria-pressed={contact.isFavorite}
            aria-label={
              contact.isFavorite ? "Remove from favorites" : "Add to favorites"
            }
            className="contact-favorite-button"
          >
            <img
              src={starIcon}
              alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
              className="contact-favorite"
            />
          </button>
          <h2 className="contact-name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact-detail">{contact.phone}</p>
          <p className="contact-detail">{contact.email}</p>
        </div>
      </article>
    </div>
  );
}
