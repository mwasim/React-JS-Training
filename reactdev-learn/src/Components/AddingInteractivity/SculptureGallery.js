import { sculptureList } from "../Data/SculptureListData";
import { useState } from "react";

export default function SculptureGallery() {
  //let index = 0;

  /*
    It is a good idea to have multiple state variables if their state is unrelated, 
    like index and showMore in this example. 
    
    But if you find that you often change two state variables together, 
    it might be easier to combine them into one. 
    For example, if you have a form with many fields, 
    it’s more convenient to have a single state variable that holds an object than state variable per field.
  */
  const [index, setIndex] = useState(0); //pass intial value to useState
  const [showMore, setShowMore] = useState(false);
  //console.log(`index = ` + index);

  let hasNext = index < sculptureList.length - 1;
  let hasPrev = index > 0;

  //console.log("hasNext: " + hasNext + ", Items count: " + sculptureList.length);

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
    //console.log(`index = ` + index);
  }

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
    //console.log(`index = ` + index);
  }

  function handleShowMore() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button disabled={!hasPrev} onClick={handlePrevClick}>
        Prev
      </button>
      {' '}
      <button disabled={!hasNext} onClick={handleNextClick}>
        Next
      </button>
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
      <hr/>
    </>
  );
}
