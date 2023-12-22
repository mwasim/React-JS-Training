import Gallery from "./Components/Galllery";
import TodoList from "./Components/TodoList";
import { NotableScientistsGallery } from "./Components/Galllery";
import PackingList from "./Components/PackingList";
import PeopleList from "./Components/RenderingLists";
import { Recipes } from "./Components/RenderingLists";
import Poem from "./Components/Poem";
import Clock from "./Components/Clock";

export default function DescribingTheUI() {
  return (
    <>  
      <Clock/>
      <Poem/>
      <Recipes/>
      <PeopleList />
      <Gallery />
      <NotableScientistsGallery />
      <TodoList />
      <PackingList />
    </>
  );
}
