import Profile from "./Profile";
import { NamedPorfile, NotableScientistProfile } from "./Profile";

export function NotableScientistsGallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <NotableScientistProfile
        person={{
          name: "Maria Skłodowska-Curie",
          imageId: "szV5sdG",
          profession: "physicist and chemist",
          awards: [
            "Nobel Prize in Physics",
            "Nobel Prize in Chemistry, Davy Medal",
            "Matteucci Medal",
          ],
          discovery: "polonium (chemical element)",
        }}
      />

      <NotableScientistProfile
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
          profession: "geochemist",
          awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
          discovery: "a method for measuring carbon dioxide in seawater",
        }}
      />
    </div>
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing Scientists</h1>
      <Profile />
      <NamedPorfile />
    </section>
  );
}
