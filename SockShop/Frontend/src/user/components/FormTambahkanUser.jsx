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

import saveUser from "../services/saveUser";

const FormTambahkanUser = ({ roles, allowedPermissions }) => {
  const { control, handleSubmit } = useForm();

  const navigate = useNavigate();

  const kirim = (data) => {
    const cleanData = cleanFormData(data);
    saveUser({
      ...cleanData,
    })
      .then(({ data: { data } }) => {
        navigate(`/settings/user`);
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
    <Form title="Tambahkan User" onSubmit={handleSubmit(kirim)}>
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
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <InputField
            label="Email"
            placeholder="Masukkan email"
            fieldState={fieldState}
            {...field}
            isRequired={false}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <InputField
            label="Password"
            placeholder="Masukkan password"
            type="password"
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
      <Controller
        name="@/roleIds"
        control={control}
        render={({ field, fieldState }) => (
          <MultiSelectionField
            label="Roles"
            options={roles}
            placeholder="Masukkan roles"
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

export default FormTambahkanUser;
