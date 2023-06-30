import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import DeleteCarModal from "../DeleteCarModal/DeleteCarModal";
import EditCarModal from "../EditCarModal/EditCarModal";

export default function CarItem({ cars }) {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Car</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Color</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>VIN</TableCell>
            <TableCell>Availability</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cars.map((car) => (
            <TableRow key={car.id}>
              <TableCell>{car.id}</TableCell>
              <TableCell>{car.car}</TableCell>
              <TableCell>{car.car_model}</TableCell>
              <TableCell>{car.car_color}</TableCell>
              <TableCell>{car.car_model_year}</TableCell>
              <TableCell>{car.car_vin}</TableCell>
              <TableCell>{car.availability.toString()}</TableCell>
              <TableCell>{car.price}</TableCell>
              <TableCell>
                <EditCarModal cars={car} />
              </TableCell>
              <TableCell>
                <DeleteCarModal id={car.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
