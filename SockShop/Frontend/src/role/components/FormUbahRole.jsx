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

import updateRole from "../services/updateRole";

const FormUbahRole = ({ role, allowedPermissions }) => {
  const { control, handleSubmit } = useForm({ defaultValues: role });

  const navigate = useNavigate();

  const kirim = (data) => {
    const cleanData = cleanFormData(data);
    updateRole({
      ...cleanData,
    })
      .then(({ data: { data } }) => {
        navigate(`/settings/role/${role.id}`);
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
    <Form title="Ubah Role" onSubmit={handleSubmit(kirim)}>
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <InputField
            label="Nama Role"
            placeholder="Masukkan nama role"
            defaultValue={role.name}
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
            defaultValue={role.allowedPermissions}
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

export default FormUbahRole;
