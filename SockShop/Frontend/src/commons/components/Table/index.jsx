import useAppearance from "@/commons/appearance/useAppearance";
import React from "react";
import { TABLE_CLASSNAMES } from "./variants";
import PropTypes from "prop-types";

const Table = ({ children, compact, className, kit }) => {
  const interfaceKit = useAppearance();
  const tableStyle = (kit ?? interfaceKit)?.table;
  const tableVariant = TABLE_CLASSNAMES[tableStyle];

  return (
    <div className="overflow-x-auto">
      <table
        className={`table w-full ${
          compact && "table-compact"
        } ${tableVariant} ${className}`}
      >
        {children}
      </table>
    </div>
  );
};

Table.propTypes = {
  children: PropTypes.node.isRequired,
  compact: PropTypes.bool,
  className: PropTypes.string,
  kit: PropTypes.object,
};

export default Table;
