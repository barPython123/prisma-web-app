import React, { useState } from "react";
import User from "./User";

// take Array of objects as props and for each displays different user with data

function ShowUsers() {
  const [fetchedUsers, setFetchedUsers] = useState([]);

  fetch("http://192.168.0.75:6020/", { mode: "cors" })
  .then((response) => response.json())
  // .then((data) => console.log(data.usersData[0])) //array of objects
  // .then((data) => setFetchedUsers(data)) 
  // fetch NOT_WORKING
  const someUser = {
    name: "Greg",
    surname: "Dabrowski",
    age: 10,
    doesLikePineapple: true,
  };

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
          <User
            name={someUser.name}
            surname={someUser.surname}
            age={someUser.age}
            doesLikePineapple={someUser.doesLikePineapple}
          ></User>
        </tbody>
      </table>
    </div>
  );
}

export default ShowUsers;
