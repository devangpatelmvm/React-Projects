import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("http://api.github.com/users/hiteshchoudhary").then((response) =>
  //     response.json().then((data) => {
  //       console.log(data);
  //       setData(data)
  //     })
  //   );
  // }, []);

  return (
    <div className="bg-gray-700 text-center text-white text-3xl p-4">
      Github Followers: {data.followers}
      <img className="text-center" src='https://avatars.githubusercontent.com/u/11613311?v=4' alt="Git Picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async() => {
  const response = await fetch('http://api.github.com/users/hiteshchoudhary')
  return response
}