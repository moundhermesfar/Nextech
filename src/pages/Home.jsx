import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import MembersCard from "../components/MembersCard";
import Members from "../../data/Members.json";
import logo from "../assets/nextech.png";

const Home = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setMembers(Members);
    setLoading(false);
  }, []);

  return (
    <div className="p-4">
      <header className="text-center mb-8">
        <img
          src={logo}
          alt="Club Logo"
          className="mx-auto mb-4"
          style={{ maxWidth: "150px" }}
        />
        <h1 className="text-4xl font-bold">Welcome to Our Club</h1>
        <p className="text-gray-400 mt-2">
          Discover and connect with our amazing community!
        </p>
      </header>
      <div className="flex flex-col items-center">
        <Link to="/members/create">
          <button className="bg-red-500 text-white px-4 py-2 rounded border border-red-500 hover:text-red-500 hover:bg-white hover:border-red-500">
            Register Now
          </button>
        </Link>
        <h1 className="text-3xl my-8">Meet Our Members</h1>
      </div>
      {loading ? <Spinner /> : <MembersCard members={members} />}

      <footer className="mt-8 p-6 bg-gray-800 flex flex-col items-center text-white">
        <p className="text-lg font-semibold mb-4">Be a part of our community</p>
        <div className="flex justify-around w-full">
          <a
            href="https://www.facebook.com/profile.php?id=61553474487971"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "1rem" }}
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              color="white"
              className="hover:text-red-500"
            />
          </a>
          <a
            href="https://www.instagram.com/nextech.squad/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "1rem" }}
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              color="white"
              className="hover:text-red-500"
            />
          </a>
          <a
            href="https://discord.gg/pp9KnpcJEv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faDiscord}
              size="2x"
              color="white"
              className="hover:text-red-500"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
