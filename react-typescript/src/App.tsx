import { Component, ReactNode } from "react";
import "./App.css";
import "./basic_data_types";
// import BasicDataTypes from "./basic_data_types";
//import ComplexDataTypes from "./complex_data_types";
import Message from "./Message";

//class/stateful component syntax
class App extends Component<any> {
  // componentDidMount(): void {
  //   console.log(`Finally... hello!`);
  // }

  // componentWillMount(): void {
  //   console.log(`Almost there...`);
  // }

  render(): ReactNode {
    return (
      <div className="App">
        <header className="App-header">
          <Message name="Jen" message="this is a message!" />
        </header>
      </div>
    );
  }
}

export default App;
