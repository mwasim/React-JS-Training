import Gallery from "./Components/Galllery";
import TodoList from "./Components/TodoList";
import { NotableScientistsGallery } from "./Components/Galllery";
import PackingList from "./Components/PackingList";
import PeopleList from "./Components/RenderingLists";

export default function App() {
  return (
    <>
      <PeopleList />
      <Gallery />
      <NotableScientistsGallery />
      <TodoList />
      <PackingList />
    </>
  );
}
