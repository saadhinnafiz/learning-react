import Header from "./components/Banner";
import Entry from "./components/Entry";

export default function App() {
  return (
    <div>
      <Header />
      <div className="travel-container">
        <Entry />
        <Entry />
        <Entry />
      </div>
    </div>
  );
}
