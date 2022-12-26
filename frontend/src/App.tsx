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
    <div>
      <button
        onClick={() => {
          setView(true);
        }}
      >
        Test
      </button>
      <button
        onClick={() => {
          setView(false);
        }}
      >
        Test
      </button>
      {view ? (
        <CreateUser></CreateUser>
      ) : (
        <ShowUsers props={users1}></ShowUsers>
      )}
    </div>
  );
}

export default App;
