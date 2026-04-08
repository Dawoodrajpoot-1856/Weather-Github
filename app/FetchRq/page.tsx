"use client";
import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};

function FetchRq() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>{(error as Error).message}</p>;

  return (
    <div>
      {data.map((user: any) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default FetchRq;

