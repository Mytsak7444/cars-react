import { Edit } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCar } from "../../Redux/car/reducer";

export default function EditCarModal({ cars }) {
  const dispatch = useDispatch();
  const [editOpen, setEditOpen] = useState(false);
  const [newColor, setNewColor] = useState(cars.car_color);
  const [newPrice, setNewPrice] = useState(cars.price);
  const [newAvailability, setNewAvailability] = useState(
    cars.availability.toString()
  );

  const handleEditCarOpen = () => {
    setEditOpen(true);
  };

  const handleClose = () => {
    setEditOpen(false);
  };

  const handleEditCar = (e) => {
    e.stopPropagation();
    const updatedCar = {
      car_color: newColor,
      price: newPrice,
      availability: newAvailability,
    };
    dispatch(updateCar({ id: cars.id, updatedCar }));
    setEditOpen(false);
    setNewColor("");
    setNewPrice("");
    setNewAvailability("");
  };

  return (
    <IconButton>
      <Edit onClick={handleEditCarOpen} />
      <Dialog open={editOpen} aria-labelledby="add">
        <DialogTitle id="add">Edit car</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter new parameters car</DialogContentText>
          <TextField
            autoFocus
            id="car"
            margin="dense"
            label="Car name"
            type="text"
            fullWidth
            disabled={true}
            value={cars.car}
          />
          <TextField
            autoFocus
            id="car"
            margin="dense"
            label="Model"
            type="text"
            fullWidth
            disabled={true}
            value={cars.car_model}
          />
          <TextField
            autoFocus
            id="car"
            margin="dense"
            label="VIN"
            type="text"
            fullWidth
            disabled={true}
            value={cars.car_vin}
          />
          <TextField
            autoFocus
            id="car"
            margin="dense"
            label="Year"
            type="number"
            fullWidth
            disabled={true}
            value={cars.car_model_year}
          />
          <TextField
            autoFocus
            id="car"
            margin="dense"
            label="Color"
            type="text"
            fullWidth
            value={newColor}
            onClick={() => setNewColor("")}
            onChange={(e) => setNewColor(e.target.value)}
          />

          <TextField
            autoFocus
            id="car"
            margin="dense"
            label="Price in $"
            type="text"
            fullWidth
            value={newPrice}
            onClick={() => setNewPrice("")}
            onChange={(e) => setNewPrice(e.target.value)}
          />
          <TextField
            autoFocus
            id="car"
            margin="dense"
            label="Availability"
            type="text"
            fullWidth
            value={newAvailability}
            onClick={() => setNewAvailability("")}
            onChange={(e) => setNewAvailability(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditCar} color="primary">
            Edit Car
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </IconButton>
  );
}
