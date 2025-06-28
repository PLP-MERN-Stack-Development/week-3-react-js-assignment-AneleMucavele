import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between">
      <div className="font-bold text-xl">MyApp</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </div>
    </nav>
  );
}
<button
  onClick={toggleTheme}
  className="mb-4 bg-gray-700 text-white dark:bg-yellow-400 dark:text-black px-4 py-2 rounded transition"
>
  Switch to {theme === "dark" ? "Light" : "Dark"} Mode
</button>

export default Navbar;
