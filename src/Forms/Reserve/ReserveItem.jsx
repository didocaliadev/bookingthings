import React from "react";

// CRUD: read and render item from list
const ReserveItem = ({ reserve, onDelete, onUpdate }) => {
  const handleDelete = () => {
    onDelete(reserve.id);
  };

  const handleUpdate = () => {
    onUpdate(reserve);
  };

  return (
    <>
      <h4>Client: {reserve.name}</h4>
      <h3>Thing: {reserve.thing} </h3>
      <p>Date due: {reserve.due}, </p>
      <p>Date completed: {reserve.dateCompleted}, </p>
      <p>
        Date start:{reserve.dateStart} , Date end: {reserve.dateEnd}
      </p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={handleDelete}>Delete</button>
        <div>
          Active:{" "}
          <input
            type="checkbox"
            value={reserve.active}
            onChange={handleUpdate}
          ></input>
        </div>
      </div>

      <br />
      <br />
      <hr />
    </>
  );
};

export default ReserveItem;
