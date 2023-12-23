import { sculptureList } from "../Data/SculptureListData";
import { useState } from "react";

export default function SculptureGallery() {
  //let index = 0;
  const [index, setIndex] = useState(0); //pass intial value to useState
  const [showMore, setShowMore] = useState(false);
  console.log(`index = ` + index);

  function handleClick() {
    //index = index + 1;
    setIndex(index + 1);
    console.log(`index = ` + index);
  }

  function handleShowMore() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>
      <h3>
        {index + 1} of {sculptureList.length}
      </h3>
      <div style={{ marginBottom: "10px" }}>
        <img src={sculpture.url} alt={sculpture.alt} />
      </div>
      <button onClick={handleShowMore}>
        {showMore ? "Hide" : "Show"} Details
      </button>
      {showMore && <p>{sculpture.description}</p>}
    </>
  );
}
