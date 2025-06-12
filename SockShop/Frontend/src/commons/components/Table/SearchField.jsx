import useAppearance from "@/commons/appearance/useAppearance";
import PropTypes from "prop-types";
import { INPUT_CLASSNAMES } from "./variants";

const SearchField = ({ updateSearchText }) => {
  const interfaceKit = useAppearance();
  const inputStyle = interfaceKit.input;
  const inputVariant = INPUT_CLASSNAMES[inputStyle];

  return (
    <div className="relative flex items-center w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="absolute left-3 h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clipRule="evenodd"
        />
      </svg>

      <input
        type="search"
        className={`input ${inputVariant} pl-10 w-full`}
        placeholder="Cari"
        aria-label="Search"
        aria-describedby="button-addon2"
        onChange={(e) => updateSearchText(e.target.value)}
      />
    </div>
  );
};

SearchField.propTypes = {
  updateSearchText: PropTypes.func.isRequired,
};

export default SearchField;
