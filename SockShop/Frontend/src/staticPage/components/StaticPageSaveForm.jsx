import React from "react";
import { Button, Form, InputField } from "@/commons/components";

const StaticPageSaveForm = ({ onSubmit, onCancel }) => {
  let inputTitle = "";

  const handleSubmitData = (e) => {
    e.preventDefault();
    if (inputTitle?.value !== "") {
      onSubmit(inputTitle.value);
    } else {
      alert("Title cannot be empty");
    }
  };

  return (
    <div style={{ backgroundColor: "rgb(0, 0, 0, 0.6)" }}>
      <Form
        title="Tambahkan Pemasukan"
        id_name="tambahkan-pemasukan"
        onSubmit={handleSubmitData}
      >
        <InputField
          camel_name="title"
          type=""
          dasherized="input-title"
          label="Title"
          ref={(e) => {
            inputTitle = e;
          }}
        />
        <Button variant="primary" onClick={handleSubmitData}>
          Simpan
        </Button>
        <Button onClick={onCancel} variant="tertiary">
          Batal
        </Button>
      </Form>
    </div>
  );
};

export default StaticPageSaveForm;
