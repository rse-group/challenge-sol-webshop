import React from "react";
import FormModal from "@/commons/components/Form/FormModal";
import PropTypes from "prop-types";
const FormModalLayout = ({
    title,
    onSubmit,
    vas,
    formFields,
    itemsEvents,
}) => {
    return (
        <FormModal title={title} onSubmit={onSubmit}>
            <div className="mb-8">
                {vas}
                {formFields}

            </div>
            <div className="flex justify-end flex-col
             w-full items-center card-actions py-3">{itemsEvents}</div>
        </FormModal>
    );
};

FormModalLayout.propTypes = {
    title: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    vas: PropTypes.node,
    formFields: PropTypes.node.isRequired,
    itemsEvents: PropTypes.array.isRequired,
};

export default FormModalLayout;
