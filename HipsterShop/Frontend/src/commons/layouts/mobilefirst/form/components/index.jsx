import React from "react";
import FormMobileFirst from "./FormMobileFirst";

const FormComponentLayoutMobileFirst = ({
  title,
  onSubmit,
  vas,
  formFields,
  itemsEvents,
}) => {
  return (
    <FormMobileFirst title={title} onSubmit={onSubmit}>
      {vas}
      {formFields}
      <div className="card-actions justify-end">{itemsEvents}</div>
    </FormMobileFirst>
  );
};

export default FormComponentLayoutMobileFirst;
