import React, { useState, useEffect } from "react";
import User from "./User";

// take Array of objects as props and for each displays different user with data

function ShowUsers() {
  const [users1, setUsers1] = useState([]);
  const [view, setView] = useState(false);

  // move useEffect to ShowUsers
  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    fetch("http://localhost:6020/")
      .then((response) => response.json())
      .then((data) => setUsers1(data.usersData));
  }
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
          {users1.map((element: any) => {
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
