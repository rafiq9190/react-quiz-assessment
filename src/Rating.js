import React from "react";
import { icons } from "react-icons";
import { BsStar, BsStarFill } from "react-icons/bs";

function Rating({ data }) {
  console.log("🚀 ~ file: Rating.js ~ line 4 ~ Rating ~ props", data);
  return (
    <div>
      {data == "easy" ? (
        <div>
          <BsStarFill />
          <BsStar />
          <BsStar />
        </div>
      ) : data == "medium" ? (
        <div>
          <BsStarFill />
          <BsStarFill />
          <BsStar />
        </div>
      ) : (
        <div>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
      )}
    </div>
  );
}

export default Rating;
