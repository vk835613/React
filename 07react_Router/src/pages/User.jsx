import React from "react";
import Layout from "../components/Layout/Layout";
import { useParams } from "react-router-dom";

function User() {
  const { UersId } = useParams();
  return (
    <Layout>
      <div className=" flex  bg-gray-700 justify-center p-4 text-xl text-white/80 m-2">
        User: {UersId} Visted...
      </div>
    </Layout>
  );
}

export default User;
