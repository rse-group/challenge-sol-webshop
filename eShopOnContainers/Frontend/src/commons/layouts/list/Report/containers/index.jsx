import React from "react";

import { Spinner } from "@/commons/components";

const ListContainerReportLayout = ({
  title,
  singularName,
  isLoading,
  items,
  children,
}) => {
  return (
    <div className="mx-auto w-full max-w-screen-xl prose p-6 flex flex-col">
      <h2 className="text-center sm:text-left">{title}</h2>
      <div className="not-prose">
        {isLoading ? (
          <div className="py-8 text-center">
            <Spinner />
          </div>
        ) : items?.every((collection) => collection?.length) ? (
          children
        ) : (
          <div className="py-8 text-center">
            Tidak ada data untuk ditampilkan
          </div>
        )}
      </div>
    </div>
  );
};

export default ListContainerReportLayout;
