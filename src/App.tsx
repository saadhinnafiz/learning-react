function Header() {
  return <h1>Hello, React</h1>;
}

function List() {
  return (
    <ul>
      <li>Lorem ipsum dolor sit.</li>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Lorem ipsum dolor sit amet consectetur.</li>
    </ul>
  );
}

function App() {
  return (
    <div>
      <Header />
      <p>This is my first react app</p>
      <button>Click Me</button>
      <List />
    </div>
  );
}

export default App;
