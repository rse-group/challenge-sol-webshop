import useAppearance from "@/commons/appearance/useAppearance";
import PropTypes from "prop-types";
import { INPUT_CLASSNAMES } from "./variants";

const FilterField = ({ filterField, updateFilterText }) => {
  const interfaceKit = useAppearance();
  const inputStyle = interfaceKit.input;
  const inputVariant = INPUT_CLASSNAMES[inputStyle];

  return (
    <div className="w-fit-content">
      <select
        className={`select ${inputVariant}`}
        onChange={(e) => 
          updateFilterText([e.target.value], filterField.featureName)
        }
      >
        <option selected value="">
          {`Filter ${filterField.label} Terkait`}
        </option>
        {filterField.options &&
          filterField.options.map((option) => (
            <option key={option.name}>{option.name}</option>
          ))}
      </select>
    </div>
  );
};

FilterField.propTypes = {
  filterField: PropTypes.object.isRequired,
  updateFilterText: PropTypes.func.isRequired,
};

export default FilterField;
