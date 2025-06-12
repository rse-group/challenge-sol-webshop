import React from "react";
import PropTypes from "prop-types";

const Accordion = ({ active, setActive, name, label, children }) => {
  return (
    <div
      onClick={() => setActive(name)}
      className={`collapse collapse-arrow border border-base-300 bg-base-100 rounded-box ${
        active === name ? "collapse-open" : "collapse-close"
      }`}
    >
      <div className="collapse-title text-xl font-medium">{label}</div>
      <div className="collapse-content">{children}</div>
    </div>
  );
};

Accordion.propTypes = {
  active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Accordion;
