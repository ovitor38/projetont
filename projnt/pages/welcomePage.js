import React, { useState } from "react";

 function welcomePage() {

  const ISSERVER = typeof window === "undefined"
  if (!ISSERVER) {

    const token = localStorage.getItem("token");
    console.log("Aqui", token);
    if (!token) {
      return false;
    }
   
    try {
      const response = fetch("http://localhost:3333/users", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }

      }).then(response.json())
  console.log(response)
    } catch {

    }

    return (


      <div>Welcome Page</div>

    )
  }
}
  export default welcomePage