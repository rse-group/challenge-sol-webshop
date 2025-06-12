import React from "react";
import { Button } from "@/commons/components";
import { Link } from "react-router";

const BlankPage = () => (
  <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-5 mx-auto w-full max-w-screen-xl p-6">
    <div className="flex flex-col gap-5 sm:w-1/2 text-center sm:text-left">
      <h1 className="text-6xl font-bold">Oops!</h1>
      <h4 className="text-4xl font-semibold">Under construction</h4>
      <p className="text-gray-400 w-4/5">
        We are working on our website. Stay tuned for some exciting updates.
      </p>

      <Link to="/" className="w-fit rounded-full">
        <Button variant="primary" className="w-fit rounded-full">
          Go Back
        </Button>
      </Link>
    </div>

    <img src="/under-maintenance.webp" alt="under-maintenance-image" />
  </div>
);

export default BlankPage;
