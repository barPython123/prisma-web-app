import React from "react";

function User() {
  const someUser = {
    name: "Greg",
    surname: "Dabrowski",
    age: 30,
    doesLikePineapple: true,
  };

  return (
    <tr>
      <td>{someUser.name}</td>
      <td>{someUser.surname}</td>
      <td>{someUser.age}</td>
      <td>{someUser.doesLikePineapple ? "true" : "false"}</td>
    </tr>
  );
}

export default User;
