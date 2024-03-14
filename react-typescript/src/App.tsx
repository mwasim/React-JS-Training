import "./App.css";
import "./basic_data_types";
// import BasicDataTypes from "./basic_data_types";
//import ComplexDataTypes from "./complex_data_types";
import Message from "./Message";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message message="This is a message!" />
      </header>
    </div>
  );
}

export default App;
