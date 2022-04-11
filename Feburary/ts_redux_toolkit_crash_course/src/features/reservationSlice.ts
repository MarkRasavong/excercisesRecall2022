import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//describes what the action.payload will look like
interface ReservationState {
  value: string[];
}

const initialState: ReservationState = {
  value: ["Valentino Rossi"],
};

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload);
    },
  },
});

export const { addReservation, removeReservation } = reservationsSlice.actions;

export default reservationsSlice.reducer;
