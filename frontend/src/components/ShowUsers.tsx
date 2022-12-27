import React, { useState } from "react";
import User from "./User";

// take Array of objects as props and for each displays different user with data

function ShowUsers(props: any) {
  const [fetchedUsers, setFetchedUsers] = useState([]);

  return (
    <div className="UserList">
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
