function Logo() {
  return (
    <div>
      <img
        className="facts-logo"
        src="/src/assets/react.svg"
        alt="React Logo"
      />
    </div>
  );
}

function Header() {
  return (
    <header className="facts-header">
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
  return <small>© 2026 SEV development. All rights reserved.</small>;
}

export default function App() {
  return (
    <div>
      <Logo />
      <Header />
      <List />
      <Footer />
    </div>
  );
}
