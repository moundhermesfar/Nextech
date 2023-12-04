import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import SuccessPage from "./Success";

const CreateMember = () => {
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [yearOfStudying, setYearOfStudying] = useState("L1");
  const [email, setEmail] = useState("");
  const [motivation, setMotivation] = useState("");
  const [skills, setSkills] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveMember = () => {
    const data = {
      name,
      familyName,
      yearOfStudying,
      email,
      motivation,
      skills,
    };
    setLoading(true);
    axios
      .post("https://nextech-api.onrender.com/members", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Member created successfully", { variant: "success" });
        navigate("/success");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please check console");
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error.stackt  );
      });
  };

  const yearOfStudyingOptions = ["ING1", "ING2", "L1", "L2", "L3", "M1", "M2"];

  return (
    <div className="p-4" style={{ backgroundColor: "black" }}>
      <BackButton />
      <header className="text-center mb-8">
        <img
          src="https://drive.google.com/uc?id=1QEy81Lh8ljlv9Sq3cdVR7JFSrap-YlqA"
          alt="Club Logo"
          className="mx-auto mb-4"
          style={{ maxWidth: "150px" }}
        />
        <h1 className="text-4xl font-bold text-white">Welcome to Our Club</h1>
        <p className="text-gray-600 mt-2 text-white">Start your journey now!</p>
      </header>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col w-full max-w-md mx-auto p-4 border-2 border-gray-400 rounded-xl">
        <div className="my-4">
          <label className="text-xl mr-4 text-white">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-red-300 px-4 py-2 w-full text-black"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-white">Family Name</label>
          <input
            type="text"
            value={familyName}
            onChange={(e) => setFamilyName(e.target.value)}
            className="border-2 border-red-500 px-4 py-2 w-full text-black"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-white">Year of Studying</label>
          <select
            value={yearOfStudying}
            onChange={(e) => setYearOfStudying(e.target.value)}
            className="border-2 border-red-500 px-4 py-2 w-full text-black"
          >
            {yearOfStudyingOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-white">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-red-500 px-4 py-2 w-full text-black"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-white">Motivation</label>
          <textarea
            value={motivation}
            onChange={(e) => setMotivation(e.target.value)}
            className="border-2 border-red-500 px-4 py-2 w-full h-32 text-black"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-white">Skills</label>
          <textarea
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="border-2 border-red-500 px-4 py-2 w-full h-32 text-black"
          />
        </div>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded border border-red-500 hover:text-red-500 hover:bg-white hover:border-red-500"
          onClick={handleSaveMember}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default CreateMember;
