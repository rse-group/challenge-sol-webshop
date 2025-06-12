import useAppearance from "@/commons/appearance/useAppearance";
import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { INPUT_CLASSNAMES } from "./variants";

const TextAreaField = forwardRef(function TextAreaField(props, ref) {
  const { label, className, fieldState, kit } = props;
  const interfaceKit = useAppearance();
  const inputStyle = (kit ?? interfaceKit).input;
  const inputVariant = INPUT_CLASSNAMES[inputStyle];

  return (
    <div className="form-control break-inside-avoid">
      {label && (
        <label className="label label-text justify-start">
          {label}{" "}
          {props.isRequired && (
            <font className="ml-1" color="red">
              *
            </font>
          )}
        </label>
      )}
      <textarea
        className={`box-border pt-2 input ${inputVariant} ${fieldState?.error && "input-error"} ${className} h-40 resize-none`}
        ref={ref}
        {...props}
      />
      {fieldState?.error && (
        <label className="label label-text text-error">
          {fieldState.error.message}
        </label>
      )}
    </div>
  );
});

TextAreaField.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  fieldState: PropTypes.shape({
    error: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
  kit: PropTypes.object,
  isRequired: PropTypes.bool,
};

export default TextAreaField;
