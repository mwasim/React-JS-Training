const person = {
  name: "Hedy Lamarr",
  avatarUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  todoItems: [
    "Invent new traffic lights",
    "Rehearse a movie scene",
    "Improve the spectrum technology",
  ],
  theme: { backgroundColor: "lightyellow", color: "darkgreen" },
};

function TodoList() {
  const name = person.name;
  const avatarUrl = person.avatarUrl;
  const todoItems = person.todoItems;

  const listItems = todoItems.map((item, index) => {
    return <li key={index}>{item}</li>;
    //console.log(`${item}, ${index}`);
  });

  return (
    <div style={person.theme}>
      <h1>{name}'s Todos</h1>
      <img src={avatarUrl} alt={name} className="photo" />
      <ul>{listItems}</ul>
    </div>
  );
}

export default TodoList;
