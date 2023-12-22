function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export default function Toolbar({ onPlayMovie, onUploadImage }) {
  return <div style={{backgroundColor: "darkgreen", padding: "10px"}} onClick={()=>{alert("You clicked on the Toolbar!")}}>
    <Button onClick={onPlayMovie}>Play Movie</Button>
    {' '}
    <Button onClick={onUploadImage}>Upload Image</Button>
  </div>;
}
