import { useState } from "react";
import avatar from "../../assets/user.png";
import Star from "./components/Star";

export default function FavoriteContact() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

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
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
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
