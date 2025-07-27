import React from "react";
import "./style.css";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";

const PaginationComp = ({ page, handleChange }) => {
  // const [page, setPage] = useState(1);

  return (
    <div className="pagination-container">
      <Pagination
        count={10}
        page={page}
        onChange={(event, value) => handleChange(event, value)}
        size="large"
        color="primary"
      />
    </div>
  );
};

export default PaginationComp;
