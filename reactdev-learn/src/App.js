import Gallery from "./Components/Galllery";
import TodoList from "./Components/TodoList";
import { NotableScientistsGallery } from "./Components/Galllery";
import PackingList from "./Components/PackingList";

export default function App() {
  return (
    <>
      <Gallery />
      <NotableScientistsGallery/>
      <TodoList />
      <PackingList/>
    </>
  );
}
