import React, { useState } from "react";
import { GrFormAdd } from "react-icons/gr";

const ToDoMenu = () => {
  const [task, setTask] = useState(``);
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task) {
      const toDo = {
        id: list.length + 1,
        title: task,
        toggle: false,
      };

      setList(toDo, ...list);

      //reset task
      setTask(``);
    }
  };

  console.log(list);

  return (
    <div className="mx-auto mt-8">
      <div className=" flex items-center justify-center mb-4">
        <input
          type="text"
          className="w-[350px] border-2 border-blue-900 bg-gradient-to-r from-sky-900 via-sky-500 to-indigo-200 font-bold rounded-md px-3 py-2 mr-3 placeholder:text-white"
          placeholder="Enter Task..."
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 font-bold py-4 px-4 rounded"
          onClick={addTask}
        >
          <GrFormAdd />
        </button>
      </div>
    </div>
  );
};

export default ToDoMenu;
