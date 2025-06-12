import React from "react";
import {
  GrFacebookOption,
  GrInstagram,
  GrTwitter,
  GrYoutube,
} from "react-icons/gr";
import Brand from "../Brand";

const Footer = () => {
  return (
    <footer className="footer justify-center sm:justify-between items-center py-4 px-2 bg-neutral text-neutral-content">
      <div className="items-center sm:grid-flow-col">
        <Brand />
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </div>
      <div className="grid-flow-col md:place-self-center justify-self-center sm:justify-self-end">
        <div className="btn btn-ghost btn-square">
          <GrTwitter className="w-6 h-6" />
        </div>
        <div className="btn btn-ghost btn-square">
          <GrYoutube className="w-6 h-6" />
        </div>
        <div className="btn btn-ghost btn-square">
          <GrFacebookOption className="w-6 h-6" />
        </div>
        <div className="btn btn-ghost btn-square">
          <GrInstagram className="w-6 h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
