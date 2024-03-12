import "./App.css";

function App() {
  let firstValue: string = "Many";

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        The value {firstValue} is of {typeof firstValue} type.
      </header>
    </div>
  );
}

export default App;
