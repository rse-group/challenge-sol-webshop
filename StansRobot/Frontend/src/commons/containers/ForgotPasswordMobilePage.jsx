import { Button, InputField } from "@/commons/components";
import AuthForgotPasswordService from "@/commons/services/AuthForgotPasswordService";
import AuthForgotPasswordTokenService from "@/commons/services/AuthForgotPasswordTokenService";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router";
import useAppearanceStore from "@/commons/appearance/store";

const ForgotPasswordMobilePage = () => {
  const { control: emailControl, handleSubmit: handleSubmitEmail } = useForm();
  const { control: newPasswordControl, handleSubmit: handleSubmitNewPassword } =
    useForm();
  const navigate = useNavigate();
  const { colorTheme } = useAppearanceStore();

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
    <div data-theme={colorTheme} className="prose max-w-md mx-auto">
      <h2 className="text-white bg-primary p-5 m-0 flex items-center">
        <Link to="/mobile/login" className="no-underline">
          <MdArrowBack className="mr-4" color="white" />
        </Link>
        Lupa Password
      </h2>
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
  );
};

export default ForgotPasswordMobilePage;
