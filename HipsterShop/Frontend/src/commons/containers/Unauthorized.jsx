import React from "react";
import Illustration from "@/commons/static/images/unauthorized.svg";
import { Button } from "@/commons/components";
import { Link } from "react-router";

const Unauthorized = () => {
  return (
    <div className="h-full bg-base-200 grid place-items-center p-6">
      <div className="flex flex-col items-center text-center">
        <Illustration className="w-full text-primary max-w-xs" />
        <p>
          Mohon maaf, Anda tidak memiliki akses untuk mengunjungi halaman ini.
        </p>
        <Button className="mt-4">
          <Link to="/">Kembali ke Beranda</Link>
        </Button>
      </div>
    </div>
  );
};

export default Unauthorized;
