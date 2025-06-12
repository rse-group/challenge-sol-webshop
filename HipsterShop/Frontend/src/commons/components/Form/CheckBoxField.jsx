import useAppearance from "@/commons/appearance/useAppearance";
import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { INPUT_CLASSNAMES } from "./variants";

const CheckBoxField = forwardRef(function CheckBoxField(props, ref) {
  const { label, className, kit, checked } = props;
  const interfaceKit = useAppearance();
  const inputStyle = (kit ?? interfaceKit).input;
  const inputVariant = INPUT_CLASSNAMES[inputStyle];

  return (
    <div className="form-control break-inside-avoid">
      <label className="label label-text cursor-pointer">
        <span>{label}</span>
        <input
          type="checkbox"
          checked={checked}
          className={`checkbox ${inputVariant} ${className}`}
          ref={ref}
          {...props}
        />
      </label>
    </div>
  );
});

CheckBoxField.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  kit: PropTypes.object,
  checked: PropTypes.bool,
};

export default CheckBoxField;
