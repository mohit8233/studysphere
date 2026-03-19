import { useContext } from "react";
import { TicketsContext } from "../context/TicketsContext";
import { ThemeContext } from "../context/ThemeContext";


function MyTickets() {
  const { tickets } = useContext(TicketsContext);
  const {theme} = useContext(ThemeContext)

  if (!tickets || tickets.length === 0)
    return <p className="p-6">No tickets booked yet.</p>;

  return (
    <div className={`p-6 ${
      theme === "light" ? "bg-white  text-black" : "  text-white" 
    }`}>
      <h1 className="text-2xl font-bold mb-4">My Tickets</h1>
      {tickets.map(t => (
        <div key={t.id} className="border p-4 mb-2 rounded shadow-sm">
          <p className="font-semibold">{t.eventTitle}</p>
          <p>Name: {t.name}</p>
          <p>Email: {t.email}</p>
          <p>Date: {t.date}</p>
        </div>
      ))}
    </div>
  );
}

export default MyTickets;