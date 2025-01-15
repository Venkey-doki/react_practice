import { useState, useEffect } from "react";
import React from "react";
import { useLoaderData } from "react-router-dom";

const Gitinfo = () => {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/venkey-doki')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
    console.log(data,data.avatar_url);
    
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm w-full">
        <img
          src={data.avatar_url}
          alt={`${data.name}'s avatar`}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{data.name}</h2>
          <p className="text-gray-600">@{data.login}</p>
          <p className="text-gray-700 mt-2">{data.bio || "No bio available"}</p>
          <div className="mt-4">
            <p className="text-gray-800 font-medium">
              Followers: <span className="text-gray-600">{data.followers}</span>
            </p>
            <p className="text-gray-800 font-medium">
              Following: <span className="text-gray-600">{data.following}</span>
            </p>
            <p className="text-gray-800 font-medium">
              Repositories:{" "}
              <span className="text-gray-600">{data.public_repos}</span>
            </p>
          </div>
          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-500 text-white text-center py-2 mt-4 rounded-lg hover:bg-blue-600"
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};




export const getGitinfo = async() => {
    const response = await fetch('https://api.github.com/users/venkey-doki')
    // console.log(response.json());
    
    return response.json()
}
export default Gitinfo ;
