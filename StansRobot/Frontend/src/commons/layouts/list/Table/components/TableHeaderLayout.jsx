import React, { useState } from "react";

import { TableCell, TableRow } from "@/commons/components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const TableHeaderLayout = ({
  itemsAttrs,
  sortText,
  updateSortText,
  isAscending,
}) => {
  return (
    <TableRow>
      {itemsAttrs?.map((itemsAttr) => (
        <TableCellLayout
          key={itemsAttr.id}
          itemsAttr={itemsAttr}
          sortText={sortText}
          updateSortText={updateSortText}
          isAscending={isAscending}
        />
      ))}
      <TableCell isHiddenMobile></TableCell>
    </TableRow>
  );
};

const TableCellLayout = ({
  itemsAttr,
  sortText,
  updateSortText,
  isAscending,
}) => {
  var [isOnHover, setIsOnHover] = useState(false);
  var toggleHover = () => setIsOnHover(!isOnHover);

  var isSelectedItem = (item) => sortText == item.featureName;

  return (
    itemsAttr && (
      <TableCell
        id={itemsAttr.id}
        isHeading={itemsAttr.condition?.includes("isHeading")}
        // isCurrency={itemsAttr.condition?.includes("isCurrency")}
        isHiddenMobile={itemsAttr.condition?.includes("isHiddenMobile")}
      >
        <div
          className={`flex flex-row align-middle gap-1 ${
            isOnHover ? "text-secondary" : ""
          }`}
        >
          <label
            className={"cursor-pointer"}
            onClick={() => updateSortText(itemsAttr.featureName)}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
          >
            {itemsAttr.label}
          </label>
          {isOnHover || isSelectedItem(itemsAttr) ? (
            isOnHover && isSelectedItem(itemsAttr) ? (
              isAscending ? (
                <FiChevronDown className="h-4 w-4 " />
              ) : (
                <FiChevronUp className="h-4 w-4" />
              )
            ) : isAscending ? (
              <FiChevronUp className="h-4 w-4" />
            ) : (
              <FiChevronDown className="h-4 w-4" />
            )
          ) : (
            <></>
          )}
        </div>
      </TableCell>
    )
  );
};

export default TableHeaderLayout;