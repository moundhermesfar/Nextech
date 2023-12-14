import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import MembersTable from "../components/MembersTable";

const Home = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://nextech-api.onrender.com/members")
      .then((response) => {
        setMembers(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Members List</h1>
      </div>
      {loading ? <Spinner /> : <MembersTable members={members} />}
    </div>
  );
};

export default Home;
