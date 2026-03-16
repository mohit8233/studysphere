import { useEffect, useState, useMemo, useRef } from "react";
import EventCard from "../components/EventCard";
import withEventHighlight from "../hoc/withEventHighlight";

const HighlightedEventCard = withEventHighlight(EventCard);

function Home() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const searchRef = useRef();

  // Fetch events
  useEffect(() => {
    let isMounted = true;

    fetch("http://localhost:3000/events")
      .then(res => res.json())
      .then(data => { if (isMounted) setEvents(data); });

    return () => { isMounted = false; };
  }, []);

  // Focus input on mount
  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  // Global key listener: type anywhere → input focus
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (document.activeElement !== searchRef.current) {
        searchRef.current.focus(); // focus search input
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress); // cleanup
    };
  }, []);

  const filteredEvents = useMemo(() => {
    return events.filter(event =>
      event.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [events, search]);

  return (
    <div className="p-6">
      <input
        ref={searchRef}
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 rounded w-full"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredEvents.map(event => (
          <HighlightedEventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Home;