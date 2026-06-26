export default function NavBar() {
  return (
    <header className="facts-header">
      <section className="facts-header-section">
        <img
          className="facts-logo"
          src="/src/assets/react.svg"
          alt="React Logo"
        />
        <h1>React Facts</h1>
      </section>
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
