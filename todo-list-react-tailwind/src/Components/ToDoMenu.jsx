import React, { useState } from "react";
import { GrFormAdd } from "react-icons/gr";
import { RiDeleteBin5Fill } from "react-icons/ri";
import ReactSwitch from "react-switch";

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

      setList([toDo, ...list]);

      //reset task
      setTask(``);
    }
  };

  const deleteTask = (taskId) => {
    const filtered = list.filter((task) => task.id !== taskId);
    setList(filtered);
  };

  const toggleTask = (taskId) => {
    const updatedTaskList = list.map((task) =>
      task.id === taskId ? { ...task, toggle: !task.toggle } : task
    );

    setList(updatedTaskList);
  };

  //console.log(list);

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
      <div className="flex flex-col items-center">
        <div
          className={`${
            list.length > 0 &&
            `bg-gradient-to-r from-sky-500 via-indigo-100 to-pink-100 pt-2 pl-2 pr-2`
          }`}
        >
          {list.length === 0 ? (
            <h1 className="font-bold text-3xl text-purple-700 p-2">
              Add Tasks
            </h1>
          ) : (
            list.map((task) => (
              <div
                className={`flex w-[350px] font-bold items-center space-x-2 bg-gray-200 p-2 rounded-md mb-2 
                ${task.toggle ? `bg-green-800 text-cyan-50` : `bg-violet-500`}`}
                key={task.id}
              >
                <h4
                  className={`flex-grow ${task.toggle ? `line-through` : ``}`}
                >
                  {task.title}
                </h4>
                <button
                  className="text-red-600 font-bold text-3xl py-1 px-2 rounded"
                  onClick={() => deleteTask(task.id)}
                >
                  <RiDeleteBin5Fill />
                </button>
                <ReactSwitch
                  checked={task.toggle}
                  height={20}
                  width={40}
                  handleDiameter={18}
                  onColor="#4299e1"
                  offColor="#ccc"
                  checkedIcon={false}
                  uncheckedIcon={false}
                  onChange={() => {
                    //console.log(this.checked);
                    toggleTask(task.id);
                  }}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoMenu;
