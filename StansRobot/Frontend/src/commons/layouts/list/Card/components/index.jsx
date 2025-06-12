import React, { useEffect, useState } from "react";

import { List } from "@/commons/components";
import CardRow from "./CardRow";
import searchItems from "@/commons/utils/Table/SearchItems";
import SearchField from "@/commons/components/Table/SearchField";
import filterItems from "@/commons/utils/Table/FilterItems";
import FilterField from "@/commons/components/Table/FilterField";
import MultiFilterField from "@/commons/components/Table/MultiFilterField";
import PropTypes from "prop-types";

const ListComponentCardLayout = ({
  items,
  isSearchable,
  itemsAttrs,
  itemsEvents,
  filterFields,
  isRow = false,
  handleChange,
  selectedItems,
  setSelectedItems,
  itemId = "id",
}) => {
  const [viewItems, setViewItems] = useState(items);

  const [searchText, setSearchText] = useState("");

  const [filterTextList, setFilterTextList] = useState([]);

  const [edited, setEdited] = useState(items[0]);

  const handleItemEdit = (updatedItem) => {
    setEdited((prevData) => {
      return prevData.map((item) => {
        return item[itemId] === updatedItem[itemId]
          ? { ...item, ...updatedItem }
          : item;
      });
    });
  };

  useEffect(() => {
    if (handleChange !== undefined) {
      handleChange(edited);
    }
  }, [edited]);

  useEffect(() => {
    var newItems = items;
    newItems = searchItems(newItems, searchText, itemsAttrs, ["logoUrl"]);
    newItems = filterItems(newItems, filterTextList);

    setViewItems(newItems);
  }, [searchText, filterTextList]);

  useEffect(() => {
    setFilterTextList(
      filterFields?.map((filterField) => ({ ...filterField, text: [""] }))
    );
  }, [filterFields]);

  const updateFilterText = (newFilterText, featureName) => {
    setFilterTextList((prev) =>
      prev.map((filterText) =>
        filterText.featureName == featureName
          ? { ...filterText, text: newFilterText }
          : filterText
      )
    );
  };

  const updateSearchText = (newSearchText) => setSearchText(newSearchText);

  return (
    <>
      <div className="flex flex-wrap items-center gap-4 mb-4">
        {isSearchable && (
          <div className="flex-1 min-w-[200px]">
            <SearchField updateSearchText={updateSearchText} />
          </div>
        )}
        <div className="flex flex-wrap gap-2 sm:justify-start">
          {filterFields?.map(
            (filterField) =>
              filterField && (
                filterField.isMultiSelection
                ?
                <MultiFilterField
                  filterField={filterField}
                  updateFilterText={updateFilterText}
                />
                :
                <FilterField
                  filterField={filterField}
                  updateFilterText={updateFilterText}
                />
              ),
          )}
        </div>
      </div>
      <List column="4">
        {viewItems?.map((collection) =>
          collection?.map((item) => (
            <CardRow
              key={item.id}
              itemId={itemId}
              item={item}
              itemsAttrs={itemsAttrs}
              itemsEvents={itemsEvents}
              isRow={isRow}
              handleChange={handleItemEdit}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          ))
        )}
      </List>
    </>
  );
};

ListComponentCardLayout.propTypes = {
  items: PropTypes.array.isRequired,
  isSearchable: PropTypes.bool,
  isRow: PropTypes.bool,
  itemsAttrs: PropTypes.array.isRequired,
  itemsEvents: PropTypes.func.isRequired,
};

export default ListComponentCardLayout;