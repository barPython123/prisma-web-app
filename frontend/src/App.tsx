import React, { useEffect, useState } from "react";
import CreateUser from "./components/CreateUser";
import ShowUsers from "./components/ShowUsers";

const someUser = {
  name: "Greg",
  surname: "Dabrowski",
  age: 10,
  doesLikePineapple: true,
};

function App() {
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
    <div className="App">
      <div className="NavBar">
        <button
          onClick={() => {
            setView(true);
          }}
        >
          Create User
        </button>
        <button
          onClick={() => {
            setView(false);
          }}
        >
          Show Users
        </button>
      </div>
      {view ? <CreateUser></CreateUser> : <ShowUsers></ShowUsers>}
    </div>
  );
}

export default App;
