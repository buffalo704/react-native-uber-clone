import { createSlice } from '@reduxjs/toolkit';

interface State {
  origin?: string | null;
  destination?: string | null;
  travelTimeInformation?: string | null;
}

interface Action {
  payload: any;
}

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action): void => {
      state.origin = action.payload;
    },
    setDestination: (state, action): void => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action): void => {
      state.travelTimeInformation = action.payload;
    }
  }
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
