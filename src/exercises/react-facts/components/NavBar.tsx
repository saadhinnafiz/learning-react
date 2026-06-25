export default function NavBar() {
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
