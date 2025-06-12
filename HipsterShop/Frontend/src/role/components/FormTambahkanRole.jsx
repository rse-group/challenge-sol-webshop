import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import {
  Button,
  Form,
  SelectionField,
  MultiSelectionField,
  InputField,
  MultiSelectField,
  TextAreaField,
  VisualizationAttr,
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";

import saveRole from "../services/saveRole";

const FormTambahkanRole = ({ allowedPermissions }) => {
  const { control, handleSubmit } = useForm();

  const navigate = useNavigate();

  const kirim = (data) => {
    const cleanData = cleanFormData(data);
    saveRole({
      ...cleanData,
    })
      .then(({ data: { data } }) => {
        navigate(`/settings/role`);
      })
      .catch((error) => {
        toast.error(
          error.response?.data?.data?.message ||
            error ||
            "Terjadi kesalahan pada sistem. Harap coba lagi!",
        );
      });
  };

  return (
    <Form title="Tambahkan Role" onSubmit={handleSubmit(kirim)}>
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <InputField
            label="Name"
            placeholder="Masukkan name"
            fieldState={fieldState}
            {...field}
            isRequired={false}
          />
        )}
      />
      <Controller
        name="allowedPermissions"
        control={control}
        render={({ field, fieldState }) => (
          <InputField
            label="Allowed Permissions"
            placeholder="Masukkan allowed permissions"
            fieldState={fieldState}
            {...field}
            isRequired={false}
          />
        )}
      />
      <div className="card-actions justify-end">
        <Button type="submit" variant="primary">
          Kirim
        </Button>
      </div>
    </Form>
  );
};

export default FormTambahkanRole;
