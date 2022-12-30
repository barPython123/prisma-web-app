import React from "react";

interface Passed {
  usrId: number;
  name: string;
  surname: string;
  age: number;
  doesLikePineapple: boolean;
}

function User(props: Passed) {

  function EditUser() {
    /* 
    1) open new comonent with selected record
    2) send push request to server and call update Function
    */
  }

  function DeleteUser() {
    
  }
  return (
    <tr>
      <td>{props.usrId + " " + props.name}</td>
      <td>{props.surname}</td>
      <td>{props.age}</td>
      <td>{props.doesLikePineapple ? "true" : "false"}</td>
      <td>
        <button>Edit User</button>
      </td>
      <td>
        <button>Delete User</button>
      </td>
    </tr>
  );
}

export default User;
