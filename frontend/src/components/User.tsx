import React from "react";

interface Passed {
  name: string;
  surname: string;
  age: number;
  doesLikePineapple: boolean;
}

function User(props: Passed) {
  return (
    <tr>
      <td>{props.name}</td>
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
