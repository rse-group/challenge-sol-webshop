import React, { forwardRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import CheckBoxField from "./CheckBoxField";
import { capitalize } from "@/commons/utils/capitalize";

const MultiSelectionField = forwardRef((props, ref) => {
  const { label, variant, options, defaultValue } = props;
  let propsChild = { ...props };
  propsChild["label"] = "";
  delete propsChild.options;
  const [value, setValue] = useState();

  useEffect(() => {
    let tempDefaultValue = [];

    if (!defaultValue) {
      tempDefaultValue = options.map(() => {
        return false;
      });
    } else {
      tempDefaultValue = defaultValue.split(",");
      let tempAllChecked = options.map((item) => {
        for (let i = 0; i < tempDefaultValue.length; i++) {
          if (item.id === tempDefaultValue[i]) {
            return true;
          }
        }
        return false;
      });
      tempDefaultValue = tempAllChecked;
    }
    setValue(tempDefaultValue);
  }, []);

  useEffect(() => {
    if (value) {
      let valueMultiSelectionField = [];
      for (let i = 0; i < options.length; i++) {
        if (value[i]) {
          valueMultiSelectionField.push(options[i].id);
        }
      }
      valueMultiSelectionField = valueMultiSelectionField.join(",");
      props.onChange(valueMultiSelectionField);
    }
  }, [value]);

  const handleChange = (index, updatedCheck) => {
    let valueTemp = [...value];
    valueTemp[index] = updatedCheck;
    setValue(valueTemp);
  };

  return (
    <div className="form-control break-inside-avoid" {...variant}>
      {label && <label className="label font-bold uppercase">{label}</label>}
      {options &&
        value !== undefined &&
        options.map((option, index) => (
          <CheckBoxField
            ref={ref}
            {...propsChild}
            {...variant}
            label={capitalize(option.name)}
            key={option.id}
            checked={value[index]}
            value={option.id}
            name={label.replace(" ", "")}
            onChange={() => handleChange(index, !value[index])}
          />
        ))}
    </div>
  );
});

MultiSelectionField.displayName = "MultiSelectionField";
MultiSelectionField.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.object,
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default MultiSelectionField;
