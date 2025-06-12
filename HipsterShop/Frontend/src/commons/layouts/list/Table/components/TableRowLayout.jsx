import React, { useState, useEffect } from "react";
import useVisualizationAttr from "@/commons/components/VisualizationAttr/useVisualizationAttr";
import { BlockImageRow } from "@/commons/components/VisualizationAttr/Blocks";
import CurrencyInput from "react-currency-input-field";
import QuantityInput from "@/commons/components/Input/QuantityInput";
import { ResolveTruthyValue } from "@/commons/utils/resolveTruthyValue";

import { TableRow, TableCell } from "@/commons/components";

const TableRowLayout = ({
  item,
  detail,
  itemsAttrs,
  itemsEvents,
  itemsModals,
  handleChange,
  selectedItems,
  setSelectedItems,
  itemId,
}) => {
  const { isImage } = useVisualizationAttr();
  const [editedValues, setEditedValues] = useState(item);

  const handleInputChange = (featureName, value) => {
    setEditedValues((prev) => {
      const updatedValue = { [featureName]: value };

      const updatedValues = {
        ...prev,
        ...updatedValue,
      };
      return updatedValues;
    });
  };

  const handleCheckboxChange = (item, isChecked) => {
    setSelectedItems((prevSelected) => {
      if (isChecked) {
        return [...prevSelected, item];
      } else {
        return prevSelected.filter(
          (selectedItem) => selectedItem[itemId] !== item[itemId]
        );
      }
    });
  };

  const handleQuantityChange = (value) => {
    const quantityFeatureName = itemsAttrs.find(
      (attr) => attr.id === "quantity"
    )?.featureName;
    const quantity = Math.max(0, value);
    handleInputChange(quantityFeatureName, quantity);
  };

  useEffect(() => {
    if (handleChange !== undefined) {
      handleChange({ [itemId]: item[itemId], ...editedValues });
    }
  }, [editedValues]);

  return (
    // <TableRow distinct={false} onClick={() => detail(item)}>
    <TableRow distinct={false}>
      {/* Data Binding Pengeluaran Table Element*/}
      {itemsAttrs.some((attr) => attr.id === "checkbox") && (
        <TableCell>
          <div className="py-3 w-fit">
            <input
              type="checkbox"
              checked={selectedItems.some(
                (selectedItem) => selectedItem[itemId] === item[itemId]
              )}
              onChange={(e) => handleCheckboxChange(item, e.target.checked)}
              className="w-4 h-4 mr-2"
            />
          </div>
        </TableCell>
      )}

      {itemsAttrs.some((attr) => isImage(item[attr.featureName])) && (
        <TableCell className="max-w-64">
          <div className="w-3/4 flex items-center">
            {itemsAttrs
              .filter((attr) => isImage(item[attr.featureName]))
              .map((attr) => (
                <BlockImageRow
                  key={attr.featureName}
                  content={item[attr.featureName]}
                  label=""
                />
              ))}
          </div>
        </TableCell>
      )}

      {itemsAttrs
        .filter(
          (itemsAttr) =>
            !isImage(item[itemsAttr.featureName]) && itemsAttr.id !== "checkbox" && itemsAttr.id !== "quantity"
        )
        .map((itemsAttr) =>
          itemsAttr.editable ? (
            <TableCell
              key={itemsAttr.id}
              id={itemsAttr.id}
              isHiddenMobile={itemsAttr.condition.includes("isHiddenMobile")}
            >
              <div className="bg-gray-100 rounded-md border border-gray-200">
                {itemsAttr.condition.includes("isCurrency") ? (
                  <CurrencyInput
                    id={itemsAttr.id}
                    name={item[itemsAttr.featureName]}
                    prefix="Rp"
                    placeholder="Please enter a number"
                    value={
                      editedValues[itemsAttr.featureName] ??
                      item[itemsAttr.featureName]
                    }
                    decimalsLimit={2}
                    onValueChange={(value) =>
                      handleInputChange(itemsAttr.featureName, value ?? "")
                    }
                    className="w-full rounded-md p-1 focus:border-gray-300 bg-transparent"
                  />
                ) : (
                  <input
                    type="text"
                    name={item[itemsAttr.featureName]}
                    value={
                      editedValues[itemsAttr.featureName] ??
                      item[itemsAttr.featureName]
                    }
                    onChange={(e) =>
                      handleInputChange(itemsAttr.featureName, e.target.value)
                    }
                    className="w-full rounded-md p-1 focus:border-gray-300 bg-transparent"
                  />
                )}
              </div>
            </TableCell>
          ) : (
            <TableCell
              key={itemsAttr.id}
              id={itemsAttr.id}
              isCurrency={itemsAttr.condition.includes("isCurrency")}
              isHiddenMobile={itemsAttr.condition.includes("isHiddenMobile")}
            >
              {item[itemsAttr.featureName]}
            </TableCell>
          )
      )}

      {itemsAttrs.some((attr) => attr.id === "quantity") && (
        <TableCell>
          <div className="py-3 w-fit">
            <QuantityInput
              value={
                ResolveTruthyValue(
                  editedValues[itemsAttrs.find((attr) => attr.id === "quantity")?.featureName],
                  item[itemsAttrs.find((attr) => attr.id === "quantity")?.featureName],
                  0
                )
              }
              onChange={handleQuantityChange}
            />
          </div>
        </TableCell>
      )}

      {itemsEvents && (
        <>
          <TableCell isHiddenMobile>
            <div className="flex btn-group gap-2">
              {/* View Element Event Pengeluaran Table Element*/}
              {itemsEvents(item)?.map((event) => event)}
            </div>
          </TableCell>
          {/* {itemsModals(item)?.map((modal) => modal)} */}
        </>
      )}
    </TableRow>
  );
};

export default TableRowLayout;