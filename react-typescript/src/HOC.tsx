//HIGH ORDER COMPONENTS
/*
    NOTE: Higher-order components are not commonly used in modern React code. 
    https://legacy.reactjs.org/docs/higher-order-components.html
*/
import { Component, ReactNode } from "react";

//Step-1: Definie variable for initial state
//object literal - initial state to pass on App component
const initialState = {
  name: "Jane",
  message: "using Typescript with React is cool!",
};

//Step-2: Define type of the initial state passing down the initial state variable
type AppState = Readonly<typeof initialState>;

const messageHoc = (WrappedComponent: any) => {
  class HOC extends Component<{}, AppState> {
    readonly state: AppState = initialState;

    render(): ReactNode {
      return (
        <WrappedComponent name={this.state.name} message={this.state.message} />
      );
    }
  }

  return HOC;
};

export default messageHoc;
