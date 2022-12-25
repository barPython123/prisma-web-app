import React from "react";
import CreateUser from "./components/CreateUser";
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
  return (
    <div>
      {/* <CreateUser></CreateUser> */}
      <ShowUsers props={allUsers}></ShowUsers>
    </div>
  );
}

export default App;
