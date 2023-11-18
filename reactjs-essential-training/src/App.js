import './App.css';
import { useState, useEffect } from 'react';

/*
//const cities = ["Tokyo", "Lahore", "New York"];

//Destructuring Arrays
const [firstCity, secondCity] = ["Tokyo", "Lahore", "New York"];

console.log(firstCity);
console.log(firstCity);*/

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  //console.log(setEmotion);

  useEffect(() => {
    console.log(`It's ${emotion} rigt now.`);
  }, [emotion]); //second parameter if empty [], it renders only first time, or [emotion] based on state change

  useEffect(() => {
    console.log(`It's ${secondary} around here.`);
  }, [secondary]); //second parameter if empty [], it renders only first time, or [emotion] based on state change


  return (
    <div className="App">
      <p>Current emotion is {emotion}</p>
      <button onClick={() => setEmotion("happy")}>Happy</button>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("excited")}>Excited</button>
      <p>Curent secondary emotion is {secondary}.</p>
      <button onClick={() => setSecondary("grateful")}>Grateful</button>
      <button onClick={() => setSecondary("tired")}>Tired</button>
    </div>
  );
}

export default App;
