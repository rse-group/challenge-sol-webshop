import React from "react";
import PropTypes from "prop-types";

const Modal = ({ isShow, title, text, children, isError }) => {
  if (!isShow) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/30 backdrop-blur-sm transition z-50 p-5 animate-fade-in sm:p-0">
      <div className="flex flex-col max-h-[90vh] overflow-y-auto w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden p-6 sm:p-8 animate-scale-in">
        {isError ? (
          <div className="flex flex-col items-center text-center">
            <div className="bg-red-100 rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-500"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{title || "Error"}</h2>
            <p className="text-gray-600 mb-4 px-2 sm:px-6">{text || "There was an error processing your request."}</p>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-lg font-bold text-gray-800 mb-4">{title || "Confirmation"}</h2>
            <p className="text-gray-600 mb-6">{text}</p>
          </div>
        )}
        <div className="flex flex-col justify-center gap-4 mt-2">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isShow: PropTypes.bool.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
  isError: PropTypes.bool,
};

export default Modal;