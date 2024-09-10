export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const EDIT_TODO = "EDIT_TODO";

export function addTodo(todo) {
  return { type: ADD_TODO, todo };
}
export function removeTodo(id) {
  return { type: REMOVE_TODO, id };
}

export function editTodo(id, todo) {
  return { type: EDIT_TODO, id, todo };
}
