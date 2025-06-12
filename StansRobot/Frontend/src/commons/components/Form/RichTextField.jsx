import Quill from "quill";
import useAppearance from "@/commons/appearance/useAppearance";
import React, { forwardRef, useEffect, useRef } from "react";
import { INPUT_CLASSNAMES } from "./variants";
import PropTypes from "prop-types";
import "quill/dist/quill.snow.css";
import "./RichTextField.css";

const RichTextField = forwardRef(function RichTextField(props, ref) {
  const { label, className, fieldState, kit, onChange, placeholder } = props;
  const interfaceKit = useAppearance();
  const inputStyle = (kit ?? interfaceKit).input;
  const inputVariant = INPUT_CLASSNAMES[inputStyle];

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const editorContainer = container.appendChild(
      container.ownerDocument.createElement("div")
    );
    const quill = new Quill(editorContainer, {
      theme: "snow",
      placeholder,
      modules: {
        toolbar: {
          container: [
            [
              {
                header: [1, 2, 3, false],
              },
            ],
            ["bold", "italic", "underline", "strike", "clean"],
            ["link", "image"],
            [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
          ],
        },
      },
    });
    ref.current = quill;
    quill.on("text-change", () => {
      onChange?.(quill.getSemanticHTML());
    });
    return () => {
      ref.current = null;
      container.innerHTML = "";
    };
  }, [ref]);

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
      <div
        className={`quill relative ${inputVariant} ${fieldState?.error && "input-error"} ${className}`}
        ref={containerRef}
        {...props}
      />
      {fieldState?.error && (
        <label className="label label-text text-error">
          {fieldState.error.message}
        </label>
      )}
    </div>
  );
});

RichTextField.propTypes = {
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  fieldState: PropTypes.shape({
    error: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
  className: PropTypes.string,
  kit: PropTypes.string,
};

export default RichTextField;
