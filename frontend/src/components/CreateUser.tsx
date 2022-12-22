import React from "react";

function CreateUser() {
  return (
    <div>
      <h1>Create User</h1>
      <div>
        <div>
          <label>Name :</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Surname :</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Age :</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Pineapple Status :</label>
          <input type="checkbox"></input>
        </div>
      </div>
      <button>Send Data to Server!</button>
    </div>
  );
}

export default CreateUser;
