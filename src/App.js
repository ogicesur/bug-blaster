import logo from "./logo.svg";
import "./App.css";
import { useReducer } from "react";
import TicketForm from "./components/TicketForm";
import ticketReducer from "./reducers/ticketReducer";
import TicketList from "./components/TicketList";
import { sortTickets } from "./utilities/sortingUtilities";

function App() {
  const initialState = {
    tickets: [],
    editingTicket: null,
    sortPreference: "High to Low",
  };

  const [state, dispatch] = useReducer(ticketReducer, initialState);

  const sortedTickets = sortTickets(state.tickets, state.sortPreference);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm
          dispatch={dispatch}
          editingTicket={state.editingTicket}
        ></TicketForm>

        <div className="results">
          {state.tickets.length > 0 && <h2>All Tickets</h2>}

          <select value={state.sortPreference} onChange={(e) => dispatch({ type: "SORT_TICKETS", payload: e.target.value })}>
            <option value="High to Low">High to Low</option>
            <option value="Low to High">Low to High</option>
          </select>

          <TicketList tickets={sortedTickets} dispatch={dispatch} ></TicketList>
        </div>
      </div>
    </div>
  );
}

export default App;
