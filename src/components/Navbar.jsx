import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (

    <nav
      className={
        theme === "light"
          ? "bg-indigo-600 text-white px-6 py-4 flex justify-between items-center shadow-md"
          : "bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md"
      }
    >

      
      <h1 className="text-xl font-bold">
        StudySphere
      </h1>

     
      <div className="flex gap-6 items-center">

        <Link to="/" className="hover:text-yellow-300">
          Home
        </Link>

        <Link to="/eventdetails" className="hover:text-yellow-300">
          EventDetails
        </Link>

        <Link to="/bookticket" className="hover:text-yellow-300">
          BookTickets
        </Link>

        <Link to="/myticket" className="hover:text-yellow-300">
          MyTickets
        </Link>

        <Link to="/login" className="hover:text-yellow-300">
          Login
        </Link>

     
        <button
          onClick={toggleTheme}
          className=" text-indigo-600 px-3 py-1 rounded bg-none"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;