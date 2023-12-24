import Toolbar from "./Components/AddingInteractivity/Toolbar";
//import SignUp from "./Components/AddingInteractivity/SignupForm";
import SculptureGallery from "./Components/AddingInteractivity/SculptureGallery";
import NameFormChallenge from "./Components/AddingInteractivity/NameFormChallenge";
import FeedbackFormChallenge from "./Components/AddingInteractivity/FeedbackFormChallenge";
import TrafficLight from "./Components/AddingInteractivity/TrafficLight";
import RequestTracker from "./Components/AddingInteractivity/RequestTracker";

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
      <SculptureGallery />
      <NameFormChallenge />
      <FeedbackFormChallenge />
      <TrafficLight />
      <RequestTracker/>
    </>
  );
}
