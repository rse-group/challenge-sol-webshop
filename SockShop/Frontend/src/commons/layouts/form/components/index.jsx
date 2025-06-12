import React from "react";
import { Form } from "@/commons/components";
import PropTypes from "prop-types";

const FormComponentLayout = ({
  title,
  onSubmit,
  vas,
  formFields,
  itemsEvents,
}) => {
  return (
    <Form title={title} onSubmit={onSubmit}>
      {vas}
      {formFields}
      <div className="card-actions justify-end">{itemsEvents}</div>
    </Form>
  );
};

FormComponentLayout.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  vas: PropTypes.node,
  formFields: PropTypes.node.isRequired,
  itemsEvents: PropTypes.array.isRequired,
};

export default FormComponentLayout;
