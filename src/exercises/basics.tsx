function Header() {
  return <h1>Hello React</h1>;
}

function List() {
  return (
    <ul>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Lorem ipsum dolor sit.</li>
      <li>Lorem ipsum dolor sit amet.</li>
    </ul>
  );
}

function MyButton() {
  function handleClick() {
    alert("You Clicked The Button!");
  }
  return <button onClick={handleClick}>Click me</button>;
}

function Button() {
  return <button>Regular Button</button>;
}

function BodyText() {
  return (
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi illum odio
      cupiditate aspernatur officia sunt suscipit recusandae consequatur
      assumenda asperiores?
    </p>
  );
}

function OtherList() {
  return (
    <ol>
      <li>React</li>
      <li>Next.js</li>
      <li>Larvel</li>
    </ol>
  );
}

function MyAwesomeNavbar() {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark bg-dark"
      aria-label="Third navbar example"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          MyAwesomeNavbar
          <img src="src/assets/react.svg" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/saadhinnafiz"
                target="_blank"
                rel="noreferrer"
              >
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Student Portal
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Helpdesk
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Submit New Request
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Open Requests
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Closed Requests
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <div>
      <MyAwesomeNavbar />
      <Header />
      <BodyText />
      <List />
      <Button />
      <OtherList />
      <MyButton />
    </div>
  );
}
