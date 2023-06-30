import axios from "axios";
import React, { useEffect, useState } from "react";
import CarItem from "../CarItem/CarItem";
import { TextField } from "@mui/material";
import CarPagination from "../CarPagination/CarPagination";
import AddCarModal from "../AddCarModal/AddCarModal";
import { useDispatch, useSelector } from "react-redux";
import { setCars } from "../../Redux/car/reducer";
import { getFromStorage, saveToStorage } from "../../utils/localStorage";

export default function CarList() {
  const cars = useSelector((state) => state.car);
  const dispatch = useDispatch();
  const [searchCar, setSearchCar] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(10);

  useEffect(() => {
    getCars();
  }, []);

  async function getCars() {
    try {
      const carsExist = getFromStorage("cars");
      if (carsExist) {
        dispatch(setCars(carsExist));
      } else {
        const res = await axios.get("https://myfakeapi.com/api/cars");
        dispatch(setCars(res.data.cars));
        saveToStorage("cars", res.data.cars);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const filteredCars = cars.filter((car) => {
    return car.car.toLowerCase().includes(searchCar.toLowerCase());
  });

  const lastCarIndex = currentPage * carsPerPage;
  const firstCarIndex = lastCarIndex - carsPerPage;
  const currentCars = filteredCars.slice(firstCarIndex, lastCarIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div>
        <TextField
          label="Search the car"
          variant="outlined"
          onChange={(e) => {
            setSearchCar(e.target.value);
          }}
          style={{ width: "800px", margin: "20px" }}
        />
        <AddCarModal />
      </div>

      <CarItem cars={currentCars} />
      <CarPagination
        carsPerPage={carsPerPage}
        totalCars={cars.length}
        paginate={paginate}
      />
    </div>
  );
}
