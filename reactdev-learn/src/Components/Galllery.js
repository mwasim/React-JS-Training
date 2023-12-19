import Profile from "./Profile";
import { NamedPorfile } from "./Profile";
  
  export default function Gallery(){
    return (
      <section>
        <h1>Amazing Scientists</h1>
        <Profile/>
        <NamedPorfile/>
      </section>
    );
  }