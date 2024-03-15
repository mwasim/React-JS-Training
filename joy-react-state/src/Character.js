import { useState } from "react";

const Character = () => {
  const [strength, setStrength] = useState(6);
  const [dexterity, setDexterity] = useState(9);
  const [intelligence, setIntelligence] = useState(15);

  function triggerLevelUp() {
    //To use the updated values in the same render, we can store the next/updated value in variables.
    const nextStrength = strength + 1;
    const nextDexterity = dexterity + 1;
    const nextIntelligence = intelligence + 1;

    setStrength(nextStrength);
    setDexterity(nextDexterity);
    setIntelligence(nextIntelligence);

    alert(`Congratulations! Your hero now has the following stats:
            Strength: ${nextStrength}
            Dexterity: ${nextDexterity}
            Intelligence: ${nextIntelligence}`);
  }

  return (
    <div style={{ textAlign: `center` }}>
      <img
        alt="8-bit wizard character"
        src="https://sandpack-bundler.vercel.app/img/mage-sprite.gif"
      />
      <button onClick={triggerLevelUp}>Level Up</button>
    </div>
  );
};

export default Character;
