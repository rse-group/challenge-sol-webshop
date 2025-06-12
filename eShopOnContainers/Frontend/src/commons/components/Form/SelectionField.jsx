import React, { forwardRef } from "react";
import { INPUT_CLASSNAMES } from "./variants";
import useAppearance from "@/commons/appearance/useAppearance";
import PropTypes from "prop-types";

const SelectionField = forwardRef((props, ref) => {
  const { label, variant, options, optionKey, optionLabel, placeholder, className, fieldState, kit } =
    props;
  const interfaceKit = useAppearance();
  const inputStyle = (kit ?? interfaceKit).input;
  const inputVariant = INPUT_CLASSNAMES[inputStyle];

  return (
    <div className="form-control break-inside-avoid" {...variant}>
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
      <select
        className={`select ${inputVariant} w-full whitespace-normal ${fieldState?.error && "select-error"} ${className}`}
        ref={ref}
        {...props}
        {...variant}
      >
        <option disabled selected hidden>
          {placeholder}
        </option>
        {options &&
          options.map((option) => (
            <option value={option[optionKey]} key={option[optionKey]}>
            {option[optionLabel]}
            </option>
          ))}
      </select>
      {fieldState?.error && (
        <label className="label label-text text-error">
          {fieldState.error.message}
        </label>
      )}
    </div>
  );
});

SelectionField.displayName = "SelectionField";
SelectionField.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  fieldState: PropTypes.shape({
    error: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
  kit: PropTypes.object,
  isRequired: PropTypes.bool,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  variant: PropTypes.object,
};

export default SelectionField;
