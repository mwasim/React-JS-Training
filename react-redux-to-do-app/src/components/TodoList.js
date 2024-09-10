import React from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo, editTodo } from "../actions/actions";
import "./TodoList.css";

const TodoList = ({ todos, addTodo, removeTodo, editTodo }) => {
  const [newTodo, setNewTodo] = React.useState("");
  const [editing, setEditing] = React.useState(false);
  const [editedTodo, setEditedTodo] = React.useState({});

  const handleEdit = (todo) => {
    setEditing(true);
    setEditedTodo(todo);
    setNewTodo(todo.text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editing) {
      editTodo(editedTodo.id, { text: newTodo });
      setEditing(false);
    } else {
      addTodo({ id: Date.now(), text: newTodo });
    }
    setNewTodo("");
  };

  return (
    <div class="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">{editing ? "Update" : "Add"}</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
            <button onClick={() => handleEdit(todo)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, { addTodo, removeTodo, editTodo })(
  TodoList
);
