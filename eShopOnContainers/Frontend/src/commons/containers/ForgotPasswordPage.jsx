import { Button, InputField } from "@/commons/components";
import AuthForgotPasswordService from "@/commons/services/AuthForgotPasswordService";
import AuthForgotPasswordTokenService from "@/commons/services/AuthForgotPasswordTokenService";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const ForgotPasswordPage = () => {
  const { control: emailControl, handleSubmit: handleSubmitEmail } = useForm();
  const { control: newPasswordControl, handleSubmit: handleSubmitNewPassword } =
    useForm();
  const navigate = useNavigate();

  const [forgotPasswordToken, setForgotPasswordToken] = useState();

  const requestForgotPasswordToken = async (data) => {
    const { data: response } = await AuthForgotPasswordTokenService.call(data);
    if (response) {
      setForgotPasswordToken(response.data.forgotPasswordToken);
    }
  };

  const changePassword = async (data) => {
    data = { ...data, forgotPasswordToken };
    const response = await AuthForgotPasswordService.call(data);
    if (response["data"]) {
      alert("Berhasil mengganti password. Silakan login kembali.");
      navigate(`/login`);
    }
  };

  return (
    <div className="h-full bg-base-200 grid place-items-center py-16 px-6">
      <div className="prose w-full max-w-md">
        <h1>Lupa Password</h1>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-white">
          {!forgotPasswordToken ? (
            // Enter Email
            <form
              key="enter-email"
              onSubmit={handleSubmitEmail(requestForgotPasswordToken)}
              className="card-body not-prose"
            >
              <Controller
                name="email"
                control={emailControl}
                render={({ field }) => (
                  <InputField
                    type="email"
                    label="Email"
                    placeholder="Masukkan email"
                    {...field}
                  />
                )}
              />
              <p className="text-sm text-neutral/60">
                Masukkan email akun Anda untuk mengganti password.
              </p>
              <Button type="submit">Submit</Button>
            </form>
          ) : (
            // Enter new password
            <form
              key="enter-password"
              onSubmit={handleSubmitNewPassword(changePassword)}
              className="card-body not-prose"
            >
              <Controller
                name="password"
                control={newPasswordControl}
                render={({ field }) => (
                  <InputField
                    type="password"
                    label="Password"
                    placeholder="Masukkan password baru"
                    {...field}
                  />
                )}
              />
              <p className="text-sm text-neutral/60">Masukkan password baru</p>
              <Button type="submit">Ganti Password</Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
