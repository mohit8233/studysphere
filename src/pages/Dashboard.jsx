import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import {
  FaUser,
  FaUserEdit,
  FaCalendarCheck,
  FaCalendarPlus,
  FaBookmark,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { TicketsContext } from "../context/TicketsContext";

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);
  const { tickets } = useContext(TicketsContext);

  return (
    <div
      className={`h-screen flex ${theme === "light"
          ? "bg-gray-100 text-black"
          : "bg-gray-900 text-white"
        }`}
    >
      {/* 🔹 Sidebar */}
      <aside
        className={`w-64 p-5 border-r overflow-y-auto ${theme === "light" ? "bg-white" : "bg-gray-800"
          }`}
      >
        <h2 className="text-2xl font-bold mb-8">📊 Dashboard</h2>

        <ul className="space-y-4 text-sm">
          <li className="flex items-center gap-3 hover:text-indigo-500 cursor-pointer">
            <FaUser /> Profile
          </li>

          <li className="flex items-center gap-3 hover:text-indigo-500 cursor-pointer">
            <FaUserEdit /> Edit Profile
          </li>

          <li className="flex items-center gap-3 hover:text-indigo-500 cursor-pointer">
            <FaCalendarPlus /> Create Event
          </li>

          <li className="flex items-center gap-3 hover:text-indigo-500 cursor-pointer">
            <FaCalendarCheck /> My Events
          </li>

          <li className="flex items-center gap-3 hover:text-indigo-500 cursor-pointer">
            <FaBookmark /> Booked Events
          </li>

          <li className="flex items-center gap-3 hover:text-indigo-500 cursor-pointer">
            <FaBell /> Notifications
          </li>

          <li className="flex items-center gap-3 hover:text-indigo-500 cursor-pointer">
            <FaCog /> Settings
          </li>

          <li className="flex items-center gap-3 text-red-500 hover:text-red-600 cursor-pointer pt-4 border-t">
            <FaSignOutAlt /> Logout
          </li>
        </ul>
      </aside>

      {/* 🔹 Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-semibold mb-6">
          Welcome Back 👋
        </h1>
          {/* Event Stats */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

  <div className="p-5 rounded-xl shadow bg-indigo-500 text-white">
    <h3>Total Events</h3>
    <p className="text-2xl font-bold">10</p>
  </div>

  <div className="p-5 rounded-xl shadow bg-green-500 text-white">
    <h3>Booked Events</h3>
    <p className="text-2xl font-bold">{tickets.length}</p>
  </div>

  <div className="p-5 rounded-xl shadow bg-yellow-500 text-white">
    <h3>Upcoming Events</h3>
    <p className="text-2xl font-bold">3</p>
  </div>

</div>

{/* 🔥 YAHI ADD KAR */}
<div
  className={`mt-8 p-6 rounded-xl shadow ${
    theme === "light" ? "bg-white" : "bg-gray-800"
  }`}
>
  <h2 className="text-lg font-semibold mb-4">
    Your Bookings
  </h2>

  {tickets.length === 0 ? (
    <p className="text-sm opacity-70">No bookings yet 😢</p>
  ) : (
    <>
      <p className="text-sm mb-4">
        You have booked {tickets.length} events 🎉
      </p>

      {tickets.map((t) => (
        <div key={t.id} className="p-3 mb-2 border rounded">
          <p className="font-semibold">{t.eventTitle}</p>
          <p className="text-sm">{t.date}</p>
        </div>
      ))}
    </>
  )}
</div>
      </main>
    </div>
  );
};

export default Dashboard;