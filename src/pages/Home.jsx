import { useEffect, useState, useMemo, useRef } from "react";
import EventCard from "../components/EventCard";
import withEventHighlight from "../hoc/withEventHighlight";

const HighlightedEventCard = withEventHighlight(EventCard);

function Home() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("light");
  const searchRef = useRef();


  useEffect(() => {
    let isMounted = true;

    fetch("http://localhost:3000/events")
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) setEvents(data);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  
  useEffect(() => {
    const handleKeyPress = () => {
      if (document.activeElement !== searchRef.current) {
        searchRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // 
  useEffect(() => {
    document.body.classList.remove(
      "bg-gray-300",
      "bg-gray-800",
      "text-black",
      "text-blue"
    );

    if (theme === "light") {
      document.body.classList.add("bg-gray-300", "text-black");
    } else {
      document.body.classList.add("bg-gray-800", "text-blue");
    }
  }, [theme]);

  
  const filteredEvents = useMemo(() => {
    return events.filter((event) =>
      event.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [events, search]);

  return (
    <div className="p-6 min-h-screen">
      
     
      <button
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
        className="mb-4 px-3 py-1 bg-blue-500 text-white rounded"
      >
        Change Theme
      </button>

  
      <input
        ref={searchRef}
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 rounded w-full text-black"
      />

 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <HighlightedEventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Home;