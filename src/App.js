import React from "react";
import "./App.css";
import CarList from "./Components/CarList/CarList";
import { Container } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./Redux";

export default function App() {
  return (
    <Provider store={store}>
      <Container>
        <CarList />
      </Container>
    </Provider>
  );
}
