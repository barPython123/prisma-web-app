import React, { useEffect, useState } from "react";
import CreateUser from "./components/CreateUser";
import NavBar from "./components/NavBar";
import ShowUsers from "./components/ShowUsers";

const someUser = {
  name: "Greg",
  surname: "Dabrowski",
  age: 10,
  doesLikePineapple: true,
};

const allUsers = [
  someUser,
  { name: "Tymon", surname: "Str", age: 50, doesLikePineapple: true },
  { name: "Iza", surname: "Bartczak", age: 18, doesLikePineapple: false },
];

function App() {
  const [users1, setUsers1] = useState([]);

  useEffect(() => {
    usr()
  },[])
  async function usr() {
    fetch("http://localhost:6020/")
      .then((response) => response.json())
      .then((data) => setUsers1(data.usersData));
  }

  return (
    <div>
      {/* <NavBar></NavBar> */}
      {/* <CreateUser></CreateUser> */}
      <ShowUsers props={users1}></ShowUsers>
      {/* <button onClick={usr}>Test Fetch</button> */}
    </div>
  );
}

export default App;
