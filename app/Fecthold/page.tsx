import React from "react";

const page = () => {
  const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    return res.json();
  };
  return <div>hshshs</div>;
};

export default page;
