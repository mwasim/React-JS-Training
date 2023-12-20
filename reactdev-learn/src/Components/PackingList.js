function Item({ name, isPacked }) {
  /*
    If isPacked is true, the component will return nothing, null. 
    Otherwise, it will return JSX to render.
    */
  if (isPacked) {
    return null;
  }

  return (
    <li className="item">
      {name}
      {/* {name} {isPacked ? " ✔" : ""} */}
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
