import React, { useState } from "react";
import User from "./User";

// take Array of objects as props and for each displays different user with data

function ShowUsers() {
  const [fetchedUsers, setFetchedUsers] = useState({});

  fetch("http://192.168.0.75:6020/", { mode: "cors" })
    .then((response) => response.json())
    .then((data) => console.log(data));
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
