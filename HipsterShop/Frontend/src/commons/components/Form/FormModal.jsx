import React from "react";
import PropTypes from "prop-types";

const FormModal = (props) => {
    const { title, id_name, children } = props;

    return (

        <div className="">
            <h2 className="h2">{title}</h2>
            <form
                className=""
                id={id_name}
                {...props}
                title={undefined}
            >
                <div className="max-w-xl prose mx-auto">
                    <fieldset className="columns-1 space-y-4">{children}</fieldset>
                </div>
            </form>
        </div>

    );
};

FormModal.propTypes = {
    title: PropTypes.string.isRequired,
    id_name: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default FormModal;
