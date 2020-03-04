import React, { useState, useEffect } from "react";
import "./square.scss";

export const Square = props => {
  return (
    <button className="square__button" onClick={props.onClick}>
      {props.value}
    </button>
  );
};
