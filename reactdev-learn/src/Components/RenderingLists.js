import { people } from "./Data/People";
import { recipes } from "./Data/Recipes";
import { GetImageUrl } from "./Utils";
import { Fragment } from "react";

/*
const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekha",
    profession: "astrophysicist",
  },
];*/

function PeopleListItems(persons) {
  //console.log(persons);
  const listItems = persons.map((person) => (
    <li key={person.id}>
      <img src={GetImageUrl({ person })} alt={person.name} />
      <p>
        <strong>{person.name}:</strong>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  return listItems;
}

function All() {
  const listItems = PeopleListItems(people);

  return (
    <>
      <h2>All Scientists</h2>
      <ul>{listItems}</ul>
    </>
  );
}

function Chemists() {
  //creates a new array of people with profession of chemist
  const chemists = people.filter((person) => person.profession === "chemist");

  const listItems = PeopleListItems(chemists);

  return (
    <>
      <h2>Chemists</h2>
      <ul>{listItems}</ul>
    </>
  );
}

export default function PeopleList() {
  return (
    <>
      <All />
      <Chemists />
      <hr/>
    </>
  );
}

export function Recipes() {
  var recipeListItems = recipes.map((recipe) => {
    return (
      <Fragment key={recipe.id}>
        <h3>Recipe: {recipe.name}</h3>
        <h4>Ingredients</h4>
        <ul>
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </Fragment>
    );
  });

  return (
    <>
      <h1>Recipes</h1>
      {recipeListItems}
      <hr/>
    </>
  );
}
