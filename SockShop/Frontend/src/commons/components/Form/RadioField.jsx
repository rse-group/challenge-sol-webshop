import useAppearance from "@/commons/appearance/useAppearance";
import React, { forwardRef } from "react";
import { INPUT_CLASSNAMES } from "./variants";

const RadioField = forwardRef(function RadioField(props, ref) {
  const { label, className, kit, checked } = props;
  const interfaceKit = useAppearance();
  const inputStyle = (kit ?? interfaceKit).input;
  const inputVariant = INPUT_CLASSNAMES[inputStyle];

  return (
    <div className="form-control">
      <label className="label label-text cursor-pointer">
        <span>{label}</span>
        <input
          type="radio"
          checked={checked}
          className={`${inputVariant} ${className}`}
          ref={ref}
          {...props}
        />
      </label>
    </div>
  );
});

export default RadioField;
