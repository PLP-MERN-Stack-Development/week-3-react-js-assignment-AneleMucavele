import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>

      <div className="flex gap-2 mb-4">
        <input
          className="border rounded px-2 py-1 w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
        />
        <button className="bg-blue-600 text-white px-4 py-1 rounded" onClick={addTask}>
          Add
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        {["all", "active", "completed"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-3 py-1 rounded border ${
              filter === type ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <ul className="space-y-2">
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 p-2 rounded"
          >
            <span
              className={`flex-1 ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
              onClick={() => toggleTask(index)}
            >
              {task.text}
            </span>
            <button
              className="text-red-500 hover:underline ml-4"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
          
        ))}
      </ul>
    </div>
  );
}
<li
  key={index}
  className="flex justify-between items-center bg-gray-100 p-2 rounded dark:bg-gray-800 animate-fadeIn"></li>

export default TaskManager;
