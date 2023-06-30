import {
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewCar } from "../../Redux/car/reducer";

export default function AddCar() {
  const dispatch = useDispatch();
  const [addOpen, setAddOpen] = useState(false);
  const [car, setCar] = useState("");
  const [model, setModel] = useState("");
  const [VIN, setVIN] = useState("");
  const [color, setColor] = useState("");
  const [year, setYear] = useState(0);
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState("");
  const [id, setId] = useState(1001);

  const handleAddCarOpen = () => {
    setAddOpen(true);
  };

  const handleClose = () => {
    setAddOpen(false);
  };

  const handleAddNewCar = (e) => {
    e.stopPropagation();
    const newCar = {
      id: id,
      car: car,
      car_model: model,
      car_vin: VIN,
      car_color: color,
      car_model_year: year,
      price: price,
      availability: availability,
    };
    dispatch(setNewCar(newCar));
    setAddOpen(false);
    setCar("");
    setModel("");
    setVIN("");
    setColor("");
    setYear(0);
    setPrice("");
    setAvailability("");
    setId(id + 1);
  };

  return (
    <ButtonGroup>
      <Button
        style={{ width: "200px", height: "54px", margin: "20px" }}
        onClick={handleAddCarOpen}
      >
        Add car
      </Button>
      <Dialog open={addOpen} aria-labelledby="add">
        <DialogTitle id="add">Add new car</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter parameters new car</DialogContentText>
          <TextField
            autoFocus
            id="carName"
            margin="dense"
            label="Car name"
            type="text"
            fullWidth
            onChange={(e) => setCar(e.target.value)}
          />
          <TextField
            autoFocus
            id="carModel"
            margin="dense"
            label="Model"
            type="text"
            fullWidth
            onChange={(e) => setModel(e.target.value)}
          />
          <TextField
            autoFocus
            id="carVIN"
            margin="dense"
            label="VIN"
            type="text"
            fullWidth
            onChange={(e) => setVIN(e.target.value)}
          />
          <TextField
            autoFocus
            id="carColor"
            margin="dense"
            label="Color"
            type="text"
            fullWidth
            onChange={(e) => setColor(e.target.value)}
          />
          <TextField
            autoFocus
            id="carYear"
            margin="dense"
            label="Year"
            type="number"
            fullWidth
            onChange={(e) => setYear(e.target.value)}
          />
          <TextField
            autoFocus
            id="carPrice"
            margin="dense"
            label="Price"
            type="text"
            fullWidth
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            autoFocus
            id="carAvailability"
            margin="dense"
            label="Availability"
            type="text"
            fullWidth
            onChange={(e) => setAvailability(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddNewCar} color="primary">
            Add new car
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </ButtonGroup>
  );
}
