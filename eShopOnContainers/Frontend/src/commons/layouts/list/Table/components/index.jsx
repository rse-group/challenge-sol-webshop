import React, { useEffect, useState } from "react";

import { Button, Table, TableBody, TableHead } from "@/commons/components";
import TableHeaderLayout from "./TableHeaderLayout";
import TableRowLayout from "./TableRowLayout";
import searchItems from "@/commons/utils/Table/SearchItems";
import sortItems from "@/commons/utils/Table/SortItems";
import filterItems from "@/commons/utils/Table/FilterItems";
import SearchField from "@/commons/components/Table/SearchField";
import FilterField from "@/commons/components/Table/FilterField";
import MultiFilterField from "@/commons/components/Table/MultiFilterField";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";

const ListComponentLayout = ({
  items,
  detail,
  isSearchable = false,
  filterFields,
  itemsAttrs,
  itemsEvents,
  itemsModals,
  handleChange,
  selectedItems,
  setSelectedItems,
  itemId = 'id',
}) => {
  const [viewItems, setViewItems] = useState(items);

  const [searchText, setSearchText] = useState("");

  const [sortText, setSortText] = useState("");
  const [isAscending, setIsAscending] = useState(true);
  const toggleIsAscending = () => setIsAscending(!isAscending);

  const [filterTextList, setFilterTextList] = useState([]);

  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [canPreviousPage, setCanPreviousPage] = useState(false);
  const [canNextPage, setCanNextPage] = useState(false);

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
    setCanPreviousPage(pageIndex > 0);
    setCanNextPage(pageIndex < pageCount);
  }, [pageIndex, pageCount]);

  useEffect(() => {
    setPageIndex(0);
    setPageCount(Math.floor((viewItems.flat().length - 1) / pageSize));
  }, [viewItems, pageSize]);

  useEffect(() => {
    var newItems = items;
    newItems = isSearchable
      ? searchItems(newItems, searchText, itemsAttrs)
      : newItems;
    newItems = sortItems(newItems, sortText, isAscending);
    newItems = filterItems(newItems, filterTextList);

    setViewItems(newItems);
  }, [searchText, sortText, filterTextList, isAscending]);

  useEffect(() => {
    setFilterTextList(
      filterFields?.map((filterField) => ({ ...filterField, text: [""] })),
    );
  }, [filterFields]);

  const updateSearchText = (newSearchText) => setSearchText(newSearchText);

  const updateSortText = (newSortText) =>
    sortText == newSortText ? toggleIsAscending() : setSortText(newSortText);

  const updateFilterText = (newFilterText, featureName) =>
    setFilterTextList((prev) =>
      prev.map((filterText) =>
        filterText.featureName == featureName
          ? { ...filterText, text: newFilterText }
          : filterText,
      ),
    );

  const gotoPage = (index) =>
    setPageIndex(index < 0 ? 0 : index > pageCount ? pageCount : index);

  const previousPage = () => gotoPage(pageIndex - 1);

  const nextPage = () => gotoPage(pageIndex + 1);

  return (
    <div className="card bg-base-100">
      <div className="card-body p-0 sm:p-8 border sm:border-none">
        <div className="flex flex-wrap items-center justify-stretch gap-5">
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
                    filterField.isMultiSelection ? (
                      <MultiFilterField
                        filterField={filterField}
                        updateFilterText={updateFilterText}
                      />
                    ) : (
                      <FilterField
                        filterField={filterField}
                        updateFilterText={updateFilterText}
                      />)
                  ),
              )}
            </div>
          </div>
        </div>
        <Table className={"table-fixed sm:table-auto"}>
          <TableHead>
            <TableHeaderLayout
              itemsAttrs={itemsAttrs}
              sortText={sortText}
              updateSortText={updateSortText}
              isAscending={isAscending}
            />
          </TableHead>
          <TableBody>
            {viewItems?.map((collection) =>
              collection
                ?.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize)
                .map((item) => (
                  <TableRowLayout
                    item={item}
                    itemId={itemId}
                    detail={detail}
                    itemsAttrs={itemsAttrs}
                    itemsEvents={itemsEvents}
                    itemsModals={itemsModals}
                    handleChange={handleItemEdit}
                    selectedItems={selectedItems}
                    setSelectedItems={setSelectedItems}
                  />
                )),
            )}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex items-center justify-end gap-8">
          <div className="flex gap-4 text-sm">
            <span>Baris per Halaman :</span>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[10, 15, 20, 25, 30].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </div>
          <div>
            <nav className="inline-flex" aria-label="Pagination">
              <Button
                variant="primary"
                className="rounded-none rounded-l-md"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">First</span>
                <FiChevronsLeft className="h-5 w-5" aria-hidden="true" />
              </Button>
              <Button
                variant="primary"
                className="rounded-none"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">Previous</span>
                <FiChevronLeft className="h-5 w-5" aria-hidden="true" />
              </Button>
              <Button
                variant="primary"
                className="rounded-none"
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                <span className="sr-only">Next</span>
                <FiChevronRight className="h-5 w-5" aria-hidden="true" />
              </Button>
              <Button
                variant="primary"
                className="rounded-none rounded-r-md"
                onClick={() => gotoPage(pageCount)}
                disabled={!canNextPage}
              >
                <span className="sr-only">Last</span>
                <FiChevronsRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListComponentLayout;