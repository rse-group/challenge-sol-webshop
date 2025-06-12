import toast from "react-hot-toast";
import { Toast } from "@/commons/components";
import React from "react";
import { isAxiosError } from "axios";

const getToastErrorMessage = (error) => {
  if (error.response?.data?.data) {
    const { vmjErrorCode, message } = error.response.data.data;
    if (vmjErrorCode || message) {
      return `${vmjErrorCode || ""} - ${message || ""}`.trim();
    }
  }
  if (isAxiosError(error)) {
    switch (error.response.status) {
      case 401:
        return "Sesi Anda telah berakhir. Silakan login kembali.";
      case 403:
        return "Anda tidak memiliki akses untuk melakukan tindakan ini.";
      case 404:
        return "Data tidak ditemukan.";
      case 500:
        return "Terjadi kesalahan pada sistem. Harap coba lagi!";
    }
  }
  return error.toString() || "Terjadi kesalahan pada sistem. Harap coba lagi!";
};

const notifyError = (error) => {
  const message = getToastErrorMessage(error);
  toast.error((t) => <Toast.Error message={message} t={t} />);
};

const notifySuccess = (message) => {
  toast.success(message);
};

export { notifyError, notifySuccess };
