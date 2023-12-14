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
          <div>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handlePasswordSubmit}>Submit</button>
          </div>
        )}
      </div>
      {loading ? <Spinner /> : authenticated && <MembersTable members={members} />}
    </div>
  );
};

export default AdminPage;

