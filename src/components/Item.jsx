import React from "react";

const Item = props => {
  const handleBadge = item => {
    const badgeName = "badge badge-";
    return item.value === 0 ? badgeName + "warning" : badgeName + "info";
  };

  return (
    <div>
      <span className="badge badge-primary">{props.item.id}</span>
      <span className={handleBadge(props.item)}>{props.item.value}</span>
      <button
        className="btn btn-success"
        onClick={() => {
          props.onIncrement(props.item);
        }}
      >
        +
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => {
          props.onDecrement(props.item);
        }}
        disabled={props.item.value <= 0}
      >
        -
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          props.onDelete(props.item);
        }}
      >
        remove
      </button>
    </div>
  );
};

export default Item;
