import React, { useRef } from "react";

import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/commons/components";

const ReportRow = ({ items, itemsAttrs }) => {
  const DISTINCT_ROW = [
    "Aktivitas Operasional",
    "Aktivitas Investasi",
    "Aktivitas Pendanaan",
    "",
  ];
  const tableBody = useRef([]);
  return items?.map((row, index) => {
    if (DISTINCT_ROW.includes(row.name) || row.level == 0) {
      const tBody = [...tableBody.current];
      tableBody.current = [];
      return (
        <>
          {tBody.length !== 0 && (
            <TableBody>
              {tBody.map((item, idx) => (
                <TableRow key={idx}>
                  {itemsAttrs?.map((itemsAttr) =>
                    itemsAttr.featureName.includes("name") ? (
                      <TableCell className="whitespace-normal max-w-[32ch]">
                        <span
                          style={{ paddingLeft: `${parseInt(item.level)}rem` }}
                        >
                          {item && item[itemsAttr.featureName]}
                        </span>
                      </TableCell>
                    ) : (
                      <TableCell
                        isCurrency={itemsAttr.condition.includes("isCurrency")}
                        isHeading={itemsAttr.condition.includes("isHeading")}
                        isHiddenMobile={itemsAttr.condition.includes(
                          "isHiddenMobile"
                        )}
                      >
                        {item && item[itemsAttr.featureName]}
                      </TableCell>
                    )
                  )}
                </TableRow>
              ))}
            </TableBody>
          )}
          <TableHead>
            <TableRow>
              {itemsAttrs?.map((itemsAttr) =>
                itemsAttr.featureName.includes("name") ? (
                  <TableCell className="whitespace-normal max-w-[32ch]">
                    <span style={{ paddingLeft: `${parseInt(row.level)}rem` }}>
                      {row && row[itemsAttr.featureName]}
                    </span>
                  </TableCell>
                ) : (
                  <TableCell>{row && row[itemsAttr.featureName]}</TableCell>
                )
              )}
            </TableRow>
          </TableHead>
        </>
      );
    } else {
      tableBody.current.push(row);
      if (index === items.length - 1)
        return (
          tableBody.current.length !== 0 && (
            <TableBody>
              {tableBody.current.map((item, idx) => (
                <TableRow key={idx}>
                  {itemsAttrs?.map((itemsAttr) =>
                    itemsAttr.featureName.includes("name") ? (
                      <TableCell className="whitespace-normal max-w-[32ch]">
                        <span
                          style={{ paddingLeft: `${parseInt(item.level)}rem` }}
                        >
                          {item && item[itemsAttr.featureName]}
                        </span>
                      </TableCell>
                    ) : (
                      <TableCell
                        isCurrency={itemsAttr.condition.includes("isCurrency")}
                        isHeading={itemsAttr.condition.includes("isHeading")}
                        isHiddenMobile={itemsAttr.condition.includes(
                          "isHiddenMobile"
                        )}
                      >
                        {item && item[itemsAttr.featureName]}
                      </TableCell>
                    )
                  )}
                </TableRow>
              ))}
            </TableBody>
          )
        );
    }
  });
};

export default ReportRow;
