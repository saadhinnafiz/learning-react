import contactPhoto from "../../../assets/contact-photo.jpg";

export default function Contact() {
  return (
    <article className="contact-card">
      <section className="contact-photo-container">
        <img src={contactPhoto} alt="Contact Photo" className="contact-image" />
      </section>
      <section className="contact-info">
        <div className="contact-name">
          <h2>Emilia Clarke</h2>
        </div>
        <div className="contact-details">
          <div className="contact-phone-row">
            <img
              src="https://img.icons8.com/?size=100&id=9730&format=png&color=000000"
              alt="image of phone icon"
              className="phone-icon"
            />
            <p className="contact-number">(212) 555-1234</p>
          </div>

          <div className="contact-mail-row">
            <img
              src="https://img.icons8.com/?size=100&id=12623&format=png&color=000000"
              alt="image of email icon"
              className="email-icon"
            />
            <p className="contact-email">emilia@examplemail.com</p>
          </div>
        </div>
      </section>
    </article>
  );
}
