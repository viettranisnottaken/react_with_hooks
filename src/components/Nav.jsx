import React, { useState } from "react";

const Nav = props => {
  return (
    <React.Fragment>
      <button onClick={props.onAdd}>Add</button>
      <button>Reset</button>
    </React.Fragment>
  );
};

export default Nav;
