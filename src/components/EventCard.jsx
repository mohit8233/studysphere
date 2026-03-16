import { Link } from "react-router-dom";

function EventCard({ event, highlightStyle }) {
  return (
    <div style={highlightStyle} className="bg-white shadow-md rounded-lg p-5 hover:shadow-xl transition">
      <h2 className="text-xl font-bold text-indigo-600 mb-2">{event.title}</h2>
      <p>📅 Date: {event.date}</p>
      <p>📍 Location: {event.location}</p>
      <p>🎤 Speaker: {event.speaker}</p>
      {event.featured && <p className="text-yellow-500 font-semibold mt-2">⭐ Featured Event</p>}

      <Link
        to={`/eventdetails/${event.id}`}
        className="inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        View Details
      </Link>
    </div>
  );
}

export default EventCard;