import Gallery from "./Components/Galllery";
import TodoList from "./Components/TodoList";
import { NotableScientistsGallery } from "./Components/Galllery";
import PackingList from "./Components/PackingList";
import PeopleList from "./Components/RenderingLists";
import { Recipes } from "./Components/RenderingLists";

export default function App() {
  return (
    <>
      <Recipes/>
      <PeopleList />
      <Gallery />
      <NotableScientistsGallery />
      <TodoList />
      <PackingList />
    </>
  );
}
