import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import "./App.css";
import TarjetaReserva from "./components/TarjetaReserva";
import { addReservation } from "./features/reservationSlice";
import TarjetaCliente from "./components/TarjetaCliente";

function App() {
  const dispatch = useDispatch();
  const [ reservationNameInput, setReservationNameInput] = useState('');

  const reservations = useSelector((state: RootState) => state.reservations.value);
  const customers = useSelector((state: RootState) => state.customer.value);

  const handleAddReservations = () => {
    if(!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput('');
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <TarjetaReserva name={name} idx={index}/>
              })}
            </div>
          </div>
          <div className="reservation-input-container">
              <input value={reservationNameInput} onChange={(e) => setReservationNameInput(e.target.value)}/>
              <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map(customer => <TarjetaCliente id={customer.id} name={customer.name} food={customer.food}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;