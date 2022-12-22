import React from "react";
import User from "./User";
function ShowUsers() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Surname</td>
            <td>Age</td>
            <td>Likes Pineapple?</td>
          </tr>
        </thead>
        <tbody>
          <User></User>
        </tbody>
      </table>
    </div>
  );
}

export default ShowUsers;