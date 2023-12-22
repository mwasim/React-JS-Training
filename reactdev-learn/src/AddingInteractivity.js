import Toolbar from "./Components/AddingInteractivity/Toolbar";

export default function AddingInteractivity() {
  return (
    <>
      <Toolbar
        onPlayMovie={(event) => {
          console.log(event);  
          alert("Playing!");
        }}
        onUploadImage={() => {
          alert("Uploading image...");
        }}
      />
    </>
  );
}
