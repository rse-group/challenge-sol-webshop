import React from "react";
import PropTypes from "prop-types";

const Form = (props) => {
  const { title, id_name, children } = props;

  return (
    <div className="max-w-xl prose mx-auto">
      <h2 className="h2">{title}</h2>
      <form
        className="bg-white card shadow-xl"
        id={id_name}
        {...props}
        title={undefined}
      >
        <div className="card-body">
          <fieldset className="columns-1 space-y-4">{children}</fieldset>
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
  id_name: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Form;
