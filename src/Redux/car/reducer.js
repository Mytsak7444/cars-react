import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { saveToStorage } from "../../utils/localStorage";

const carSlice = createSlice({
  name: "car",
  initialState: [],
  reducers: {
    setCars: (state, action) => {
      return action.payload;
    },
    setNewCar: (state, action) => {
      state.push(action.payload);
      saveToStorage("cars", state);
    },
    deleteCar: (state, action) => {
      const updateState = state.filter((car) => car.id !== action.payload);
      saveToStorage("cars", updateState);
      return updateState;
    },
    updateCar: (state, action) => {
      const { id, updatedCar } = action.payload;
      const carIndex = state.findIndex((car) => car.id === id);
      if (carIndex !== -1) {
        state[carIndex] = { ...state[carIndex], ...updatedCar };
        saveToStorage("cars", state);
      }
    },
  },
});

const persistConfig = {
  key: "root",
  storage,
};

export const { setCars, setNewCar, deleteCar, updateCar } = carSlice.actions;
export default persistReducer(persistConfig, carSlice.reducer);
