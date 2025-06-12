import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ListItem, VisualizationAttr } from "@/commons/components";
import Label from "@/commons/components/VisualizationAttr/Label";
import useVisualizationAttr from "@/commons/components/VisualizationAttr/useVisualizationAttr";
import { BlockImageRow } from "@/commons/components/VisualizationAttr/Blocks";
import CurrencyInput from "react-currency-input-field";
import QuantityInput from "@/commons/components/Input/QuantityInput";
import { ResolveTruthyValue } from "@/commons/utils/resolveTruthyValue";

const CardRow = ({
  item,
  itemsAttrs,
  itemsEvents,
  isRow,
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
    <ListItem>
      {/* Data Binding [singularName /] Card Element */}
      <div className="card-body justify-between">
        <div className={`flex ${isRow ? "gap-4" : ""}`}>
          {itemsAttrs.some((attr) => attr.id === "checkbox") && (
              <div className="py-3 w-fit">
                <input
                  type="checkbox"
                  checked={selectedItems.some(
                    (selectedItem) => selectedItem[itemId] === item[itemId]
                  )}
                  onChange={(e) =>
                    handleCheckboxChange(editedValues, e.target.checked)
                  }
                  className="w-4 h-4 mr-2"
                />
              </div>
            )}

          {isRow &&
            itemsAttrs.some((attr) => isImage(item[attr.featureName])) && (
              <div className="w-1/2 h-full flex items-center">
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
            )}

          <div className={`${isRow ? "flex flex-col" : ""} w-full`}>
            {itemsAttrs
              .filter((itemsAttr) =>
                isRow
                  ? !isImage(item[itemsAttr.featureName]) &&
                    itemsAttr.id !== "checkbox" &&
                    itemsAttr.id !== "quantity"
                  : itemsAttr.id !== "checkbox" && itemsAttr.id !== "quantity"
              )
              .map((itemsAttr) =>
                itemsAttr.editable ? (
                  <div
                    key={`${itemsAttr.label}-${item[itemsAttr.featureName]}`}
                    className="flex flex-col w-full"
                  >
                    <Label label={itemsAttr.label} />
                    <div className="bg-gray-100 rounded-md border border-gray-200 mb-2">
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
                            handleInputChange(
                              itemsAttr.featureName,
                              value ?? ""
                            )
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
                            handleInputChange(
                              itemsAttr.featureName,
                              e.target.value
                            )
                          }
                          className="w-full rounded-md p-1 focus:border-gray-300 bg-transparent"
                        />
                      )}
                    </div>
                  </div>
                ) : (
                  <VisualizationAttr
                    content={item[itemsAttr.featureName]}
                    key={`${itemsAttr.label}-${item[itemsAttr.featureName]}`}
                    label={itemsAttr.label}
                  />
                )
              )}
          </div>

          {isRow && (
            <div className={`w-full relative px-4 py-3`}>
              {/* View Element Event [singularName /] Card Element*/}
              <div className="absolute top-0 right-0 flex flex-col gap-2">
                {itemsEvents(item)?.map((event) => event)}
              </div>
              {itemsAttrs.some((attr) => attr.id === "quantity") && (
                <div className="absolute bottom-0 right-0 flex flex-col gap-2">
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
              )}
            </div>
          )}
        </div>
      </div>

      {!isRow && (
        <div className={`card-actions justify-end p-4`}>
          {/* View Element Event [singularName /] Card Element*/}
          {itemsAttrs.some((attr) => attr.id === "quantity") && (
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
          )}
          {itemsEvents(item)?.map((event) => event)}
        </div>
      )}
    </ListItem>
  );
};

CardRow.propTypes = {
  item: PropTypes.object.isRequired,
  isRow: PropTypes.bool,
  itemsAttrs: PropTypes.array.isRequired,
  itemsEvents: PropTypes.func.isRequired,
};

export default CardRow;
