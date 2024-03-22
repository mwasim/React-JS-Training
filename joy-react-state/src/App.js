import "./App.css";

//1. useState simple example - Counter
//import Counter from "./Counter";

//2. useState - triggers rerender in batch - Logout demo
//import LogoutUser from "./LogoutUser";

//3. useState - get latest values in the 1st render demo
//import Character from "./Character";

//4. Counter 2.0 - Upgraded Counter
import Counter from "./Counter2";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <LogoutUser /> */}
      {/* <Character /> */}
      <Counter />
    </>
  );
}

export default App;
