import React from "react";
import { Button } from "react-bootstrap";

function Pagination({ goToNext, goToPrev }) {
  const btnStyled = { margin: "1%", borderRadius: "20px" };

  return (
    <div style={{ textAlign: "center", margin: "3%" }}>
      {goToPrev && (
        <Button style={btnStyled} onClick={goToPrev}>
          Previous
        </Button>
      )}
      {goToNext && (
        <Button style={btnStyled} onClick={goToNext}>
          Next
        </Button>
      )}
    </div>
  );
}

export default Pagination;
