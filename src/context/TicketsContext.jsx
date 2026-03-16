// src/context/TicketsContext.jsx
import { createContext, useState } from "react";

export const TicketsContext = createContext();

export const TicketsProvider = ({ children }) => {
  const [tickets, setTickets] = useState(() => {
    const saved = localStorage.getItem("tickets");
    return saved ? JSON.parse(saved) : [];
  });

  const addTicket = (ticket) => {
    const updated = [...tickets, ticket];
    setTickets(updated);
    localStorage.setItem("tickets", JSON.stringify(updated));
  };

  return (
    <TicketsContext.Provider value={{ tickets, addTicket }}>
      {children}
    </TicketsContext.Provider>
  );
};