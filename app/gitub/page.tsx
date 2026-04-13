"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setGithubUser } from "../lib/githubSlice";

export default function GithubUser() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [searchUser, setSearchUser] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["githubUser", searchUser],
    queryFn: async () => {
      const res = await fetch(`https://api.github.com/users/${searchUser}`);
      if (!res.ok) throw new Error("User not found");
      return res.json();
    },
    enabled: !!searchUser,
  });

  useEffect(() => {
    if (data) {
      dispatch(setGithubUser(data));
    }
  }, [data, dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <div className="bg-gray-200 w-[380px] p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-5">
          GitHub User Search
        </h1>

        <div className="flex gap-2 mb-5">
          <input
            type="text"
            placeholder="Enter username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded-md p-2 flex-1 outline-none"
          />

          <button
            onClick={() => setSearchUser(username)}
            className="bg-black text-white px-4 rounded-md"
          >
            Search
          </button>
        </div>

        {isLoading && <p className="text-center">Loading...</p>}
        {isError && <p className="text-center text-red-500">User not found</p>}

        {data && (
          <div className="text-center border-t pt-5">
            <img
              src={data.avatar_url}
              alt="avatar"
              className="w-24 h-24 rounded-full mx-auto mb-3"
            />

            <h2 className="text-xl font-semibold">{data.login}</h2>

            <div className="flex justify-center gap-6 mt-4">
              <div>
                <p className="font-bold">{data.public_repos}</p>
                <p className="text-gray-500 text-sm">Repos</p>
              </div>

              <div>
                <p className="font-bold">{data.followers}</p>
                <p className="text-gray-500 text-sm">Followers</p>
              </div>

              <div>
                <p className="font-bold">{data.following}</p>
                <p className="text-gray-500 text-sm">Following</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
