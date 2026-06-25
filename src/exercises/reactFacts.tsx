function NavBar() {
  return (
    <header className="facts-header">
      <img
        className="facts-logo"
        src="/src/assets/react.svg"
        alt="React Logo"
      />
      <nav>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Header() {
  return (
    <header className="facts-heading">
      <h1>Fun facts about react</h1>
    </header>
  );
}
function List() {
  return (
    <ul className="facts-list">
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on GitHub</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps including mobile apps</li>
    </ul>
  );
}

function Footer() {
  return (
    <small className="facts-footer">
      © 2026 <span className="sev">SEV</span> development. All rights reserved.
    </small>
  );
}

export default function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <List />
      <Footer />
    </div>
  );
}
