import { Delete } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCar } from "../../Redux/car/reducer";

export default function DeleteCarModal({ id }) {
  const dispatch = useDispatch();
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };

  const handleClose = () => {
    setDeleteOpen(false);
  };

  const handleDeleteCar = () => {
    dispatch(deleteCar(id));
    setDeleteOpen(false);
  };

  return (
    <IconButton>
      <Delete onClick={handleDeleteOpen} />
      <Dialog open={deleteOpen} aria-labelledby="delete">
        <DialogTitle id="delete">You really want delete car?</DialogTitle>
        <DialogActions>
          <Button onClick={handleDeleteCar} color="primary">
            Yes
          </Button>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </IconButton>
  );
}
