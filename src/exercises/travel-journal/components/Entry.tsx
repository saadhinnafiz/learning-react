import locationPin from "../../../assets/location.png";

type EntryProps = {
  img: {
    src: string;
    alt: string;
  };
  title: string;
  country: string;
  googleMapsLink: string;
  dates: string;
  text: string;
};

export default function Entry(props: EntryProps) {
  return (
    <>
      <article className="journal-entry">
        <div className="location-image-container">
          <img src={props.img.src} alt={props.img.alt} />
        </div>
        <div className="travel-info-container">
          <div className="trvel-location-row">
            <img
              src={locationPin}
              alt="map marker pin"
              className="map-marker"
            />
            <span className="travel-country">{props.country}</span>
            <a href={props.googleMapsLink} className="google-maps-link">
              View on Google Maps
            </a>
          </div>

          <h2 className="travel-entry-title">{props.title}</h2>
          <p className="travel-trip-dates">{props.dates}</p>
          <p className="travel-entry-text">{props.text}</p>
        </div>
      </article>
      <hr className="divider" />
    </>
  );
}
