import { Box, Pagination, PaginationItem, Typography } from "@mui/material";
import React from "react";

export default function CarPagination({ carsPerPage, totalCars, paginate }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalCars / carsPerPage); i++) {
    pageNumber.push(i);
  }

  const handlePageChange = (value) => {
    paginate(value);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "15px" }}>
      <Box>
        <Pagination
          count={pageNumber.length}
          onChange={handlePageChange}
          shape="rounded"
          variant="outlined"
          renderItem={(item) => (
            <PaginationItem
              component={Typography}
              variant="body1"
              href="#"
              onClick={() => paginate(item.page)}
              {...item}
            />
          )}
        />
      </Box>
    </div>
  );
}
