import React from "react";
import { ProgressBar } from "react-bootstrap";

function OverallPrograss({ data }) {
  console.log(
    "🚀 ~ file: OverallPrograss.js ~ line 5 ~ OverallPrograss ~ data",
    data
  );
  const now = data * 5.3;
  return <ProgressBar now={now} label={`${now}%`} visuallyHidden />;
}

export default OverallPrograss;
