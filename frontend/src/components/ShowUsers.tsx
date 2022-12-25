import React, { useState } from "react";
import User from "./User";

// take Array of objects as props and for each displays different user with data

function ShowUsers(props: any) {
  const [fetchedUsers, setFetchedUsers] = useState([]);

  // fetch("http://192.168.0.75:6020/", { mode: "cors" })
  // .then((response) => response.json())

  // .then((data) => console.log(data.usersData[0])) //array of objects
  // .then((data) => setFetchedUsers(data))
  // fetch NOT_WORKING

  console.log(props.props[0].name);

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
          {props.props.map((element: any) => {
            return (
              <User
                name={element.name}
                surname={element.surname}
                age={element.age}
                doesLikePineapple={element.doesLikePineapple}
              ></User>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ShowUsers;
