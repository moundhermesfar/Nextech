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
    xi</div>
  );
};

export default SuccessPage;
