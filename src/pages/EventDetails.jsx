import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetch(`http://localhost:3000/events/${id}`)
      .then(res => res.json())
      .then(data => {
        if (isMounted) setEvent(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    return () => { isMounted = false; };
  }, [id]);

  if (loading) return <p className="p-6 text-center text-gray-500">Loading...</p>;
  if (!event) return <p className="p-6 text-center text-red-500">Event not found.</p>;

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-colors">
      <h1 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-4">{event.title}</h1>
      
      <div className="space-y-2 text-gray-700 dark:text-gray-200 mb-4">
        <p><span className="font-semibold">📅 Date:</span> {event.date}</p>
        <p><span className="font-semibold">📍 Location:</span> {event.location}</p>
        <p><span className="font-semibold">🎤 Speaker:</span> {event.speaker}</p>
      </div>

      {event.featured && (
        <p className="text-yellow-500 font-semibold mb-4">⭐ Featured Event</p>
      )}

      <Link
        to="/bookticket"
        state={{event}}
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-semibold transition"
      >
        Book Ticket
      </Link>

      
      <Link
        to="/"
        
        className="inline-block ml-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg transition"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default EventDetails;