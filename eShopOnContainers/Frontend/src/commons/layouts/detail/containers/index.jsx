import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "@/commons/components";

const DetailContainerLayout = ({ title, isLoading, items, children }) => {
  return (
    <div className="container mx-auto max-w-xl">
      <h2 className="text-center sm:text-left">{title}</h2>
      {isLoading ? (
        <div className={"py-8 text-center"}>
          <Spinner />
        </div>
      ) : Object.keys(items).length ? (
        children
      ) : (
        <div className="py-8 text-center">
          Tidak ada detail data untuk ditampilkan
        </div>
      )}
    </div>
  );
};

DetailContainerLayout.propTypes = {
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  isCorrelatedWithAnotherComponent: PropTypes.bool,
};

export default DetailContainerLayout;
