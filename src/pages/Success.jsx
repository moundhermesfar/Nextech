import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
const SuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (event.currentTarget.performance.navigation.type === 1) {
        event.preventDefault();
        window.location.href = "/";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{ backgroundColor: "black", color: "white" }}
    >
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Success!</h1>
        <p className="mt-4">
          Your request has been sent, and you will hear from us soon.
        </p>
      </header>
      <div className="text-center">
        <Link
          to="/"
          className="bg-red-500 text-white px-4 py-2 rounded border border-red-500 hover:text-red-500 hover:bg-white hover:border-red-500"
        >
          Back to Home
        </Link>
      </div>
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
        <p className="mt-4">Made by M. MOUNDHER</p>
      </footer>
    </div>
  );
};

export default SuccessPage;
