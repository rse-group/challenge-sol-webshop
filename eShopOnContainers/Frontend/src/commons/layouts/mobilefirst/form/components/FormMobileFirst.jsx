import React from "react";

const FormMobileFirst = (props) => {
  const { title, id_name, children } = props;

  return (
    <div className="max-w-md mx-auto prose p-6">
      <h4 className="h2">{title}</h4>
      <form className="bg-white mt-4" id={id_name} {...props}>
        <fieldset className="space-y-4 col-end-2">{children}</fieldset>
      </form>
    </div>
  );
};

export default FormMobileFirst;
