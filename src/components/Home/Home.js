import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });

  const handleUserDelete = (id) => {
    const proceed = window.confirm("Are you sure you want delete?");
    if (proceed) {
      console.log("deleting use with id, ", id);
    }
  };

  return (
    <div>
      <h2>Abailable Users: {users.length}</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name}::{user.email}
            <button onClick={() => handleUserDelete(user._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
