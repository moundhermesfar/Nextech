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
        alert("An error happened. Please try again");
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error.stackt);
      });
  };

  const yearOfStudyingOptions = ["ING1", "ING2", "L1", "L2", "L3", "M1", "M2"];

  return (
    <div className="p-4" style={{ backgroundColor: "black" }}>
      <BackButton />
      <header className="text-center mb-8">
        <img
          src="https://doc-14-9k-docs.googleusercontent.com/docs/securesc/3c7foilo152o43me9ordrrb8lfkjicor/mctr93vml9l5b7nrjj52ot3ha3fsbfl2/1701716100000/18433896908130282843/00460206133565270480/1QEy81Lh8ljlv9Sq3cdVR7JFSrap-YlqA?ax=AEqgLxmvtCFVCbGzIcZ_MeVD6tnu9_TJMEIyEw435kGsa4vOAKGhA7OTuDzDj8EboSXjF6dlnx3EwwHZ-34TKVmdToy6k9kCnwv3FZq0J04uI_JpWOXx64lINcXmr2cdC_j0_zGgXUlnP08-b3VPIlsuybxyPgjQPYTfmxZLvrtG7ufFLfcUhcSKu-Vw4Z21LkoJ0eW0NPvwEOaghZ1ti3ItZlr2tuaqaIfmy3calDSrBAkCqvscE0HakhgHTiI5TugWiw1v5_3d-qizWuERSJRS-Z3UjvCjVQSgf3eIeze3XTT3Y1HyrMz5SkQ3QIg2H09Zb09urmaJPlMxeadMOgw0wFPGd0obKX93eBMoRNv7T_-veRojuwVt1EhtROkHfshe37qe-5ITGFRZiNFJo0Tpi3dN3dpcCEiKRkVytsCR7PQ27jKGJk0LiFFZ7r0ED8vvELAvjJoTKiHb3JVANTG54UXjfgrPh42isE_TlVRcGHIpVWlGd7l824jpUYawX_ToBepqa0wn0oXKa4J-okeWsNMpXCpc6OKmR7c0vqr3Fw5Gl4XnNNK_-1HGx5L_K08L59W84nfJG9rKZKmkkaJQodAXd2ORK_aQATphwQrvSpdPCdBziCFW7RRMyUzZIGKguj7lOzrgkW0jutEnJDZmFaqkzEt1TOvAYzZK0nwY_DqbZ1aLA7oOUeUzJLM_ei7U2vFh2asH49155rkI6fsHDAUt7Vyk4a1ApF0GS5KptVPlhKS6hoVYdzb4PAmj9TOn-FH2XKxWjzRJOMFe5QELt5PFuoQn9FdAbyZxInw8LdvM5wg_Ia-k1oL-j4r7YiXojXzBYyIejTWUkyIz-yHFh7_nQ57U6IdKQgVLrsYsHGaVE4g4dxm0mr9sNn44zhwk2s5E7-2Aew5xthQ&uuid=8addea20-a212-44f8-8f97-a052aa94c220&authuser=0&nonce=dasau39kst3sk&user=00460206133565270480&hash=a7t7l84ouki8rt12549i16a8g1gidnn4"
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
            className="border-2 border-red-500 px-4 py-2 w-full h-30 text-black"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-white">Skills</label>
          <textarea
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
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
