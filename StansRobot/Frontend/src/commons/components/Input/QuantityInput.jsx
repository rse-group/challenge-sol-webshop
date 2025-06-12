import React from "react";
import PropTypes from "prop-types";

const QuantityInput = ({ value, onChange }) => {
  const handleDecrease = () => onChange(Math.max(0, value - 1));
  const handleIncrease = () => onChange(value + 1);

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    onChange(isNaN(newValue) ? 0 : Math.max(0, newValue));
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={handleDecrease}
        className="px-2 py-1 bg-gray-200 rounded"
      >
        -
      </button>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        className="w-16 px-2 py-1 text-center border rounded"
      />
      <button
        type="button"
        onClick={handleIncrease}
        className="px-2 py-1 bg-gray-200 rounded"
      >
        +
      </button>
    </div>
  );
};

QuantityInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default QuantityInput;