import useAppearance from "@/commons/appearance/useAppearance";
import {React, useState, useEffect} from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { INPUT_CLASSNAMES } from "../Form/variants";

const MultiFilterField = ({ filterField, kit, updateFilterText }) => {
  const interfaceKit = useAppearance();
  const inputStyle = (kit ?? interfaceKit).input;
  const inputVariant = INPUT_CLASSNAMES[inputStyle];

  const [selectedValues, setSelectedValues] = useState([]);
  useEffect(() => {
    if (filterField.defaultSelectedValues) {
      setSelectedValues(filterField.defaultSelectedValues);
    }
  }, [filterField]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    const updatedSelections = checked
      ? [...selectedValues, value]
      : selectedValues.filter((id) => id !== value);

    setSelectedValues(updatedSelections);
    updateFilterText(updatedSelections, filterField.featureName);
  };

  return (
    <div className="w-fit-content">
      <label className="label label-text">Filter {filterField.featureName}</label>
      <div className={`flex flex-col gap-2`}>
        {filterField.options.map((option) => (
          <label key={option.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={option.id}
              checked={selectedValues.includes(option.id)}
              onChange={handleCheckboxChange}
              className="checkbox"
            />
            <span>{option.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

MultiFilterField.propTypes = {
  filterField: PropTypes.object.isRequired,
  updateFilterText: PropTypes.func.isRequired,
};

export default MultiFilterField;
