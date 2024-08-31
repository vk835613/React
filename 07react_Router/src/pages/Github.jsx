import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const data = useLoaderData();

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/vk835613")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <Layout>
      <div className="bg-gray-500 flex justify-center items-center text-2xl p-4 m-2 flex-col text-white ">
        GitHub Followers: {data.followers}
        <img className="m-3 rounded-full" src={data.avatar_url} alt="logo.." />
      </div>
    </Layout>
  );
}

export default Github;

// export const gethubInfoLoder = async () => {
//   const res = await fetch("https://api.github.com/users/vk835613");
//   return res.json();
// };
