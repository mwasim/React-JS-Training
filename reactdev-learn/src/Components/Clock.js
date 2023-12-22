export default function Clock({ time = new Date() }) {
  //console.log(time);
  let hours = time.getHours();
  let className;
  if (hours >= 0 && hours <= 6) {
    className = "night";
    // <p className="night">{time.toLocaleTimeString()}</p>
    //document.getElementById("time").className = "night";
  } else {
    className = "day";
    // <p className="day">{time.toLocaleTimeString()}</p>
    //document.getElementById("time").className = "day";
  }
  return (
    <h1 id="time" className={className}>
      {time.toLocaleTimeString()}
    </h1>
  );
}
