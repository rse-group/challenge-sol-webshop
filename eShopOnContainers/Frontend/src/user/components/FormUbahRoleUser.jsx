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

import changeroleUser from "../services/changeroleUser";

const FormUbahRoleUser = ({ user, roles }) => {
  const { control, handleSubmit } = useForm({ defaultValues: user });

  const navigate = useNavigate();

  const kirim = (data) => {
    const cleanData = cleanFormData(data);
    changeroleUser({
      ...cleanData,
    })
      .then(({ data: { data } }) => {
        navigate(`/settings/user/${user.id}`);
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
    <Form title="Ubah Role User" onSubmit={handleSubmit(kirim)}>
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <InputField
            label="Name"
            placeholder="Masukkan name"
            disabled
            defaultValue={user.name}
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
            defaultValue={user.roleIds}
            {...field}
            isRequired={false}
          />
        )}
      />
      <div className="card-actions justify-end">
        <Button type="submit" variant="primary">
          kirim
        </Button>
      </div>
    </Form>
  );
};

export default FormUbahRoleUser;
