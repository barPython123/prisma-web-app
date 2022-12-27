import React, { useState } from "react";

function CreateUser() {
  const [pineappleState, setPineappleState] = useState(false);

  function grabData() {
    const nameValue = (document.getElementById("inp-name") as HTMLInputElement)
      .value as String;
    const surnameValue = (
      document.getElementById("inp-surname") as HTMLInputElement
    ).value as String;
    const ageValue = (document.getElementById("inp-age") as HTMLInputElement)
      .value as unknown as Number;

    const objToSend = {
      name: nameValue,
      surname: surnameValue,
      age: ageValue,
      doesLikePineapple: pineappleState,
    };
    console.log(objToSend);

    fetch("http://localhost:6020/create", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objToSend)
    });
  }

  return (
    <div className="CreateUser">
      <h1>Create User</h1>
      <div>
        <div>
          <label>Name :</label>
          <input id="inp-name" type="text"></input>
        </div>
        <div>
          <label>Surname :</label>
          <input id="inp-surname" type="text"></input>
        </div>
        <div>
          <label>Age :</label>
          <input id="inp-age" type="number"></input>
        </div>
        <div>
          <label>Pineapple Status :</label>
          <input
            id="inp-pineapple"
            type="checkbox"
            onChange={() => setPineappleState(!pineappleState)}
          ></input>
        </div>
      </div>
      <button onClick={grabData}>Send Data to Server!</button>
    </div>
  );
}

export default CreateUser;
