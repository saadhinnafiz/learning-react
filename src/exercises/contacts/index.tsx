import Contact from "./components/Contact";
import emiliaPhoto from "../../assets/contact-photo.jpg";

export default function App() {
  return (
    <main className="contacts-page">
      <div className="contacts-grid">
        <Contact
          img={emiliaPhoto}
          name="Emilia Clarke"
          phone="(212) 555-1234"
          email="emilia@examplemail.com"
        />

        <Contact
          img="https://i.pravatar.cc/150?img=1"
          name="Travis Hunter"
          phone="(212) 555-4321"
          email="travis@examplemail.com"
        />
        <Contact
          img="https://i.pravatar.cc/150?img=12"
          name="Danny Drinkwater"
          phone="(212) 555-2324"
          email="danny@examplemail.com"
        />
        <Contact
          img="https://i.pravatar.cc/150?img=5"
          name="Elsa Bowman"
          phone="(212) 555-4345"
          email="elsa@examplemail.com"
        />
      </div>
    </main>
  );
}
