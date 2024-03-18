import { Component, ReactNode } from "react";
import "./App.css";
import "./basic_data_types";
// import BasicDataTypes from "./basic_data_types";
//import ComplexDataTypes from "./complex_data_types";
import Message from "./Message";

//Step-1: Definie variable for initial state
//object literal - initial state to pass on App component
const initialState = {
  name: "Jane",
  message: "using Typescript with React is cool!",
};

//Step-2: Define type of the initial state passing down the initial state variable
type AppState = Readonly<typeof initialState>;

//class/stateful component syntax
class App extends Component<any, AppState> {
  // componentDidMount(): void {
  //   console.log(`Finally... hello!`);
  // }

  // componentWillMount(): void {
  //   console.log(`Almost there...`);
  // }

  //Step-3: Use the initialState of type AppState here by initializing to the variable
  readonly state: AppState = initialState;

  render(): ReactNode {
    return (
      <div className="App">
        <header className="App-header">
          <Message name={this.state.name} message={this.state.message} />
        </header>
      </div>
    );
  }
}

export default App;
