import React from "react";
import PropTypes from "prop-types";
import { Table } from "@/commons/components";
import ReportRow from "./ReportRow";

const ListComponentReportLayout = ({ items, itemsAttrs }) => {
  return (
    <div className="card bg-base-100">
      <div className="card-body p-0 sm:p-8 border sm:border-none">
        <Table compact>
          {items?.map((collection, i) =>
            collection ? (
              <ReportRow items={collection} itemsAttrs={itemsAttrs} key={i} />
            ) : (
              <div className="py-8 text-center" key={i}>
                Tidak ada data untuk ditampilkan
              </div>
            )
          )}
        </Table>
      </div>
    </div>
  );
};

ListComponentReportLayout.propTypes = {
  items: PropTypes.array.isRequired,
  itemsAttrs: PropTypes.array.isRequired,
};

export default ListComponentReportLayout;
