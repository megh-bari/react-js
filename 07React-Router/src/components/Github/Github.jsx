import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-gray-700 rounded-lg shadow-lg p-6 max-w-md w-full">
        <h1 className="text-3xl font-bold text-white mb-4">GitHub Profile</h1>
        <div className="flex items-center mb-4">
          <img
            src={data.avatar_url}
            alt="GitHub Profile"
            className="rounded-full border-4 border-white"
            width={150}
          />
          <div className="flex flex-col ml-4">
            <h2 className="text-xl font-semibold text-white mb-1">{data.name}</h2>
            <p className="text-gray-400 mb-1">@{data.login}</p>
            <p className="text-white">
              <span className="font-semibold">Followers:</span> {data.followers}
            </p>
          </div>
        </div>
        <p className="text-gray-200 mb-4">{data.bio || "No bio available."}</p>
        <div className="flex justify-center items-center">
          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/megh-bari");
  return response.json();
};