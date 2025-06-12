import React from "react";
import PropTypes from "prop-types";
import BatchUpdateForm from "@/commons/components/Form/BatchUpdateForm";

const BatchUpdateFormComponentLayout = ({
  title,
  onSubmit,
  vas,
  formFields,
  itemsEvents,
}) => {
  return (
    <BatchUpdateForm title={title} onSubmit={onSubmit}>
      <div className="max-w-[100%] flex flex-col">
        {vas}
        {formFields}
        <div className="mt-8 card-actions col-end-3 justify-start">{itemsEvents}</div>
      </div>
    </BatchUpdateForm>
  );
};

BatchUpdateFormComponentLayout.propTypes = {
  title: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  vas: PropTypes.object,
  formFields: PropTypes.object.isRequired,
  itemsEvents: PropTypes.array.isRequired,
};

export default BatchUpdateFormComponentLayout;
