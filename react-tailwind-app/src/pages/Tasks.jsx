import TaskManager from "../components/TaskManager";
import { useTheme } from "../context/ThemeContext";

function Tasks() {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className="p-4">
      <button
        onClick={toggleTheme}
        className="mb-4 bg-gray-700 text-white px-4 py-2 rounded"
      >
        Switch to {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
      <TaskManager />
    </div>
  );
}

export default Tasks;
