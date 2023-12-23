import Toolbar from "./Components/AddingInteractivity/Toolbar";
//import SignUp from "./Components/AddingInteractivity/SignupForm";
import SculptureGallery from "./Components/AddingInteractivity/SculptureGallery";

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
      {/* <SignUp /> */}
      <SculptureGallery/>
    </>
  );
}
