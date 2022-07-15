import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function PrograssBar({ data, wrongAnswer, correctAnswer }) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>total Score:{(correctAnswer / 20) * 75}%</span>
        <span>Max Score 75%</span>
      </div>
      <ProgressBar>
        <ProgressBar
          striped
          variant="success"
          now={(correctAnswer / 20) * 75}
          key={1}
        />
        <ProgressBar variant="warning" now={(wrongAnswer / 20) * 75} key={2} />
        <ProgressBar striped variant="danger" now={data * 3} key={3} />
      </ProgressBar>
    </>
  );
}

export default PrograssBar;
