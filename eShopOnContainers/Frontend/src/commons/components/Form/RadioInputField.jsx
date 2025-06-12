import React, { forwardRef } from "react";
import { capitalize } from "@/commons/utils/capitalize";
import RadioField from "./RadioField";

const RadioInputField = forwardRef((props, ref) => {
  const { label, variant, options, onChange } = props;
  let propsChild = { ...props };
  propsChild["label"] = "";
  delete propsChild.options;

  return (
    <div className="form-control" {...variant}>
      {label && <label className="label font-bold uppercase">{label}</label>}
      {options &&
        options.map((option, index) => (
          <RadioField
            ref={ref}
            {...propsChild}
            {...variant}
            label={capitalize(option.name)}
            key={option.id}
            value={option.id}
            name={label.replace(" ", "")}
            onChange={onChange}
          />
        ))}
    </div>
  );
});

export default RadioInputField;
