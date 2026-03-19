import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`px-6 py-4 flex justify-between items-center shadow-md border-b ${
      theme === "light"
        ? "bg-indigo-600 text-white"
        : "bg-gray-900 text-white"
    }`}>

      <h1 className="text-xl font-bold">StudyEvent</h1>

      <div className="flex gap-6 items-center">

        <Link to="/">Home</Link>
        <Link to="/eventdetails">EventDetails</Link>
        <Link to="/bookticket">BookTickets</Link>
        <Link to="/myticket">MyTickets</Link>
        <Link to="/login">Login</Link>

        {/* 🔥 Theme Button */}
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;