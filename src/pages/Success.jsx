import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
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
    </div>
  );
};

export default SuccessPage;
