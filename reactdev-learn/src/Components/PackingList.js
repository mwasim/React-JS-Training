function Item({ name, isPacked }) {
  /*
    If isPacked is true, the component will return nothing, null. 
    Otherwise, it will return JSX to render.
    */
  //   if (isPacked) {
  //     return null;
  //   }

  //Conditionally assigning JSX to a variable - produces same output and it's the most flexible way
  let itemContent = name + '❌';
  if (isPacked) {
    //itemContent = name + " ✔";
    //it works for arbitrary JSX too
    itemContent = <del>{name + " ✔"}</del>;
  }

  return (
    <li className="item">
      {/* {
        //Using ternary operator
        isPacked ? name + " ✔" : name
      } */}

      {/* {name} {isPacked ? " ✔" : ""} */}

      {/*
        //Using ternary operator, and nesting more JSX using newlines and parantheses
        isPacked ? <del>{name + " ✔"}</del> : name
     */}

      {/* Same output using && (AND) operator 
          You can read this as “if isPacked, then (&&) render the checkmark, otherwise, render nothing”.  
      */}
      {/* {name} {isPacked && " ✔"} */}

      {/* Conditionally assigning JSX to a variable */}
      {itemContent}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <Item isPacked={true} name="Space Suit" />
      <Item isPacked={true} name="Helmet with a golden leaf" />
      <Item isPacked={false} name="Photo of Tam" />
    </section>
  );
}
