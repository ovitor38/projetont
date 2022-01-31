import React, { useState, useEffect } from "react";

function welcomePage() {
  const [token, setToken] = useState("");
  const [users, setUsers] = useState([])

  useEffect(() => {
    const ISSERVER = typeof window === "undefined";
    if (!ISSERVER) {
      const token = localStorage.getItem("token");
      if (!token) {
        return false;
      }
      setToken(token);
      fetch("http://localhost:3333/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        return response.json()
      }).then((user) => {
        setUsers(user)
      })
    }
  }, []);

  return (
   <h1>Welcome {users.username}</h1>
  )
  
}

export default welcomePage