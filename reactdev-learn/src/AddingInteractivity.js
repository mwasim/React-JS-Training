import Toolbar from "./Components/AddingInteractivity/Toolbar";
//import SignUp from "./Components/AddingInteractivity/SignupForm";
import SculptureGallery from "./Components/AddingInteractivity/SculptureGallery";
import NameFormChallenge from "./Components/AddingInteractivity/NameFormChallenge";
import FeedbackFormChallenge from "./Components/AddingInteractivity/FeedbackFormChallenge";

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
      <NameFormChallenge/>
      <FeedbackFormChallenge/>
    </>
  );
}
