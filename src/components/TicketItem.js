import React, { useState } from "react";

export default function TicketItem({ ticket, dispatch }) {
  const { id, title, description, priority } = ticket;

  const priorityClass = {
    1: "priority-low",
    2: "priority-medium",
    3: "priority-high",
  };

  return (
    <div className="ticket-item">
      <div className={`priority-dot ${priorityClass[ticket.priority]}`}></div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <button className="button"
            onClick={() =>
              dispatch({
                type: "REMOVE_TICKET",
                payload: { id },
              })
            }
          >
            Remove
              </button>
              
              <button className="button"
            onClick={() =>
              dispatch({
                type: "SET_EDITING_TICKET",
                payload: ticket,
              })
            }
          >
            Edit
              </button>  
      </div>
    </div>
  );
}
