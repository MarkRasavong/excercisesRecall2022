import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/reservationSlice";
import customerReducer from "../features/customerSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    customer: customerReducer,
  },
});

//state of our app and have access to the state type
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
