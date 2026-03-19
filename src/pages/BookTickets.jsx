import { useRef, useContext, useState } from "react";
import { TicketsContext } from "../context/TicketsContext";
import { useLocation } from "react-router-dom";

function BookTicket() {
  const nameRef = useRef();
  const emailRef = useRef();
  const { addTicket } = useContext(TicketsContext);
  const [submitted, setSubmitted] = useState(false);

  const location = useLocation();
  const event = location.state?.event || { title: "Unknown Event", date: new Date().toISOString().slice(0,10) };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTicket({
      id: Date.now(),
      eventTitle: event.title,
      name: nameRef.current.value,
      email: emailRef.current.value,
      date: event.date,
    });
    setSubmitted(true);
  };

  if (submitted) return <p className="p-6 text-green-600">Ticket booked successfully!</p>;

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-blue-400 rounded shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">{event.title}</h2>
      <input ref={nameRef} placeholder="Your Name" className="border p-2 w-full mb-3 rounded" required />
      <input ref={emailRef} type="email" placeholder="Your Email" className="border p-2 w-full mb-3 rounded" required />
      <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Book Ticket</button>
    </form>
  );
}

export default BookTicket;