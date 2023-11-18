import './App.css';
import { useState, useReducer } from 'react';


function App() {
  const [checked, setChecked] = useState(false);
  const [isChecked, setIsChecked] = useReducer(isChecked => !isChecked, false);
  return (
    <div className="App">
      <p>
        <input type='checkbox' value={checked} onChange={() => setChecked((checked) => !checked)} />
        <label>{checked ? "Checked" : "Not Checked"}</label>
      </p>
      <p>
        {/* We've used useReducer here to extract the functionality set in the above paragraph's checkbox */}
        <input type='checkbox' value={isChecked} onChange={setIsChecked} />
        <label>{isChecked ? "Checked" : "UnChecked"}</label>
      </p>
    </div>
  );
}

export default App;
