import Header from "./components/Banner";
import Entry from "./components/Entry";
import travelData from "./travelData";

export default function App() {
  const entryElements = travelData.map((entry) => (
    <Entry
      key={entry.id}
      img={entry.img}
      title={entry.title}
      country={entry.country}
      googleMapsLink={entry.googleMapsLink}
      dates={entry.dates}
      text={entry.text}
    />
  ));
  return (
    <div>
      <Header />
      <main className="travel-container">{entryElements}</main>
    </div>
  );
}
