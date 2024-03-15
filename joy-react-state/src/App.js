import "./App.css";

//1. useState simple example - Counter
//import Counter from "./Counter";

//2. useState - triggers rerender in batch - Logout demo
import LogoutUser from "./LogoutUser";

function App() {
  return (
    <>
      {/* <Counter /> */}
      <LogoutUser />
    </>
  );
}

export default App;
