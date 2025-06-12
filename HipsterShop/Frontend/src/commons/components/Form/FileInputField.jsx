import useAppearance from "@/commons/appearance/useAppearance";
import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import { INPUT_CLASSNAMES } from "./variants";

const FileInputField = forwardRef(function FileInputField(props, ref) {
  const {
    label,
    className = "",
    kit,
    defaultValue,
    fieldState,
    ...rest
  } = props;
  const interfaceKit = useAppearance();
  const inputStyle = (kit ?? interfaceKit).input;
  const inputVariant = INPUT_CLASSNAMES[inputStyle];
  const [selectedImage, setSelectedImage] = useState(null);

  const getImage = (image) => {
    if (image instanceof File) {
      return URL.createObjectURL(image);
    } else {
      return image;
    }
  };

  const checkIsImage = (content) => {
    if (content instanceof File) {
      return true;
    }
    if (!content) {
      return false;
    }
    if (content?.match(/\.(jpeg|jpg|gif|png)$/) != null) return true;
    return content?.match(/(data:image)/) != null;
  };

  if (rest.defaultValue) {
    delete rest.defaultValue;
  }

  if (rest.value) {
    delete rest.value;
  }

  const handleFileChange = (e) => {
    props.onChange(e.target.files[0]);
    setSelectedImage(e.target.files[0]);
  };

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
      {selectedImage && checkIsImage(selectedImage) ? (
        <img
          src={getImage(selectedImage)}
          alt={label}
          className="aspect-[4/3] w-full max-h-96 object-cover rounded-btn overflow-hidden"
        />
      ) : (
        defaultValue &&
        checkIsImage(defaultValue) && (
          <img
            src={getImage(defaultValue)}
            alt={label}
            className="aspect-[4/3] w-full max-h-96 object-cover rounded-btn overflow-hidden"
          />
        )
      )}
      <input
        className={`file-input w-full ${inputVariant} ${fieldState?.error && "input-error"} ${className}`}
        ref={ref}
        type="file"
        {...rest}
        onChange={(e) => handleFileChange(e)}
      />
      {fieldState?.error && (
        <label className="label label-text text-error">
          {fieldState.error.message}
        </label>
      )}
    </div>
  );
});

FileInputField.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  kit: PropTypes.object,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(File),
  ]),
  fieldState: PropTypes.shape({
    error: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
};

export default FileInputField;
