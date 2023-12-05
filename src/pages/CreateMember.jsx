import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import logo from "../assets/nextech.png";

const CreateMember = () => {
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [faculty, setFaculty] = useState("");
  const [yearOfStudying, setYearOfStudying] = useState("L1");
  const [email, setEmail] = useState("");
  const [motivation, setMotivation] = useState("");
  const [skills, setSkills] = useState("");
  const [comments, setComments] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSaveMember = () => {
    if (
      !name ||
      !familyName ||
      !faculty ||
      !yearOfStudying ||
      !email ||
      !motivation ||
      !skills
    ) {
      enqueueSnackbar(
        "All fields are required. Please fill in all the information.",
        { variant: "error" }
      );
      return;
    }
    if (!isEmailValid(email)) {
      enqueueSnackbar("Invalid email address", { variant: "error" });
      return;
    }
    const data = {
      name,
      familyName,
      faculty,
      yearOfStudying,
      email,
      motivation,
      skills,
      comments,
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
        // alert("An error happened. Please try again");
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error.stack);
      });
  };

  const yearOfStudyingOptions = [
    "First year",
    "Second year",
    "Third year",
    "Forth year",
    "Fifth year",
  ];

  return (
    <div className="p-4" style={{ backgroundColor: "black" }}>
      <BackButton />
      <header className="text-center mb-8">
        <img
          src={logo}
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
          <label className="text-xl mr-4 text-white">Which Faculty ?</label>
          <input
            type="text"
            value={faculty}
            onChange={(e) => setFaculty(e.target.value)}
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
            placeholder="Why do you wanna join us ?"
            value={motivation}
            onChange={(e) => setMotivation(e.target.value)}
            className="border-2 border-red-500 px-4 py-2 w-full h-30 text-black"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-white">Skills</label>
          <textarea
            placeholder="E.g., Web Development, Graphic Design, Project Management..."
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="border-2 border-red-500 px-4 py-2 w-full h-30 text-black"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-white">
            Any thing you wanna add ?
          </label>
          <textarea
            placeholder="Feel free to express yourself, (this field isn't required"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="border-2 border-red-500 px-4 py-2 w-full h-30 text-black"
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
