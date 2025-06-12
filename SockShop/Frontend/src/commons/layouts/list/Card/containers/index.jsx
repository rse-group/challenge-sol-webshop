import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { Spinner } from "@/commons/components";

const ListContainerCardLayout = ({ 
  title, 
  isLoading,
  items,
  itemId,
  hasCheckbox = false,
  selectedItems,
  setSelectedItems,
  children,
}) => {
  const [selectedItemIds, setSelectedItemIds] = useState(new Set())
  const itemIds = useMemo(() => {
    if (hasCheckbox) {
      return items?.flat().map((item) => item[itemId]);
    }
    return []
  }, [items]);

  useEffect(() => {
    if (hasCheckbox) {
      setSelectedItemIds(new Set(selectedItems.map(item => item.id)))
    }
  }, [selectedItems])

  const handleCheckboxChange = (items, isChecked) => {
    setSelectedItems((prevSelected) => {
      if (isChecked) {
        const newItems = items.flat().filter(
          (item) => !selectedItemIds.has(item[itemId])
        );
        return [...prevSelected, ...newItems];
      } else {
        return prevSelected.filter(
          (selected) => !itemIds.includes(selected[itemId])
        );
      }
    });
  };

  return (
    <div className="mx-auto w-full max-w-screen-xl prose flex flex-col">
      <div className="flex items-center">
        {hasCheckbox &&
          <input
            type="checkbox"
            checked={itemIds.every((id) => selectedItemIds.has(id))}
            onChange={(e) =>
              handleCheckboxChange(items, e.target.checked)
            }
            className="w-4 h-4 mr-2 mt-[1.5rem]"
          />}
        <h2 className="text-center sm:text-left">{title}</h2>
      </div>
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

ListContainerCardLayout.propTypes = {
  title: PropTypes.string.isRequired,
  singularName: PropTypes.string,
  isLoading: PropTypes.bool,
  items: PropTypes.array.isRequired,
  itemId: PropTypes.string,
  hasCheckbox: PropTypes.bool,
  selectedItems: PropTypes.array,
  setSelectedItems: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default ListContainerCardLayout;
