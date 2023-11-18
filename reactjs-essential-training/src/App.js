import './App.css';
import { useState } from 'react';

/*
//const cities = ["Tokyo", "Lahore", "New York"];

//Destructuring Arrays
const [firstCity, secondCity] = ["Tokyo", "Lahore", "New York"];

console.log(firstCity);
console.log(firstCity);*/

function App({ library }) { //instead of passing props, we're destructring actual passed properties e.g. {library}
  const [emotion, setEmotion] = useState("happy");
  console.log(setEmotion);

  return (
    <div className="App">
      <h1>Hello from {library}</h1>
      <p>Current emotion is {emotion}</p>
      <button onClick={() => setEmotion("happy")}>Happy</button>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("excited")}>Excited</button>
    </div>
  );
}

export default App;
