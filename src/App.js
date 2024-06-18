import logo from "./logo.svg";
import "./App.css";

function App() {
  const arrayOfObjct = [
    { name: "Nirav" ,age: 20},
    { name: "Utsav" },
    { name: "Jenish" },
    { name: "Prit" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {arrayOfObjct.map((el, i) => {
          const newEl = el.name ; // aa define no kariye to pan chale shidhu el.name kariye to chale
          return (
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React {newEl} age is {el.age}
            </a>
          );
        })}
      </header>
    </div>
  );
}

export default App;
