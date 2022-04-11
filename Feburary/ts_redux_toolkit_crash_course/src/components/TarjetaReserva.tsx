import React from 'react'
import { useDispatch } from 'react-redux';
import { addCustomer } from '../features/customerSlice';
import { removeReservation } from '../features/reservationSlice';
import { v4 as uuid } from 'uuid';

interface ReservationCardTypes {
  name: string;
  idx: number;
}

export default function TarjetaReserva({name, idx} : ReservationCardTypes) {
  const dispatch = useDispatch();
  return (
    <div onClick={() => {
      dispatch(removeReservation(idx));
      dispatch(addCustomer({
        id: uuid(),
        name,
        food:[]
      }))
      }} className="reservation-card-container">
      {name}
    </div>
  )
}
