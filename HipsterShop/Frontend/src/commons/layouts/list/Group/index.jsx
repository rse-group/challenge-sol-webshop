import React from 'react'
import PropTypes from "prop-types";
import { Spinner } from "@/commons/components";

const ListContainerGroupedLayout = ({ items, filters, children }) => {
  const flatItems = items?.flat() || []
  const hasFilters = filters && filters.length > 0 && filters.every(filter => filter !== undefined)

  return (
    <>
      {!items || items.some(item => item === undefined) ? (
        <div className="py-8 text-center">
          <Spinner />
        </div>
      ) : hasFilters ? (
        flatItems.map((collection, idx) => {
          const matchedFilters = Object.fromEntries(
            filters.map((filter) => [filter.filterName, filter.filterData[idx]])
          )
          return children(collection, matchedFilters, idx)
        })
      ) : (
        flatItems?.map((collection, idx) => children(collection, idx))
      )}
    </>
  );
};

ListContainerGroupedLayout.propTypes = {
  items: PropTypes.array.isRequired,
  filters: PropTypes.array,
  children: PropTypes.func.isRequired,
};

export default ListContainerGroupedLayout;
