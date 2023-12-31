import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import MembersTable from "../components/MembersTable";

const AdminPage = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const handlePasswordSubmit = () => {
    const correctPassword = "NexTech23";

    if (password === correctPassword) {
      setAuthenticated(true);
    } else {
      alert("Incorrect password.");
    }
  };

  useEffect(() => {
    if (authenticated) {
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
    }
  }, [authenticated]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Members List</h1>
        {!authenticated && (
          <div className="flex items-center">
            <form
              className="flex items-center space-x-2"
              onSubmit={(e) => {
                e.preventDefault();
                handlePasswordSubmit();
              }}
            >
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border px-3 py-1 rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
      {loading ? (
        <Spinner />
      ) : (
        authenticated && <MembersTable members={members} />
      )}
    </div>
  );
};

export default AdminPage;
