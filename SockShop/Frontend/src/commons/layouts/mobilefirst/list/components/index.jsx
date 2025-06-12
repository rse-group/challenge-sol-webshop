import React, { useEffect, useState } from "react";
import CardRowMobileFirst from "./CardRowMobileFirst";
import { Link } from "react-router";
import Button from "@/commons/components/Button";
import { ImSearch } from "react-icons/im";

const ListComponentCardLayoutMobileFirst = ({ items, itemsAttrs, onClick }) => {
  const [viewItems, setViewItems] = useState(items);
  const [isSeeAll, setIsSeeAll] = useState(false);
  const [listItems, setListItems] = useState(viewItems);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    var newItems = items;
    newItems = filterItem(filterText, newItems);

    setIsSeeAll(false);
    setViewItems(newItems);
  }, [filterText]);

  useEffect(() => {
    setListItems(isSeeAll ? viewItems : viewItems?.slice(0, 5));
  }, [isSeeAll, viewItems]);

  const filterItem = (filterText, items) => {
    return items?.filter((item) => {
      return (
        itemsAttrs?.filter((itemsAttr) => {
          return item[itemsAttr.featureName]
            ?.toString()
            .toLowerCase()
            .includes(filterText);
        }).length > 0
      );
    });
  };

  const updateFilterText = (newFilterText) => setFilterText(newFilterText);

  const onClickSeeAll = () => {
    setIsSeeAll(!isSeeAll);
  };

  return (
    <>
      <div className="input-group mt-4 mb-4">
        <span className="input-group-append">
          <ImSearch />
        </span>
        <input
          className="input w-full border-2 border-gray-300 rounded"
          placeholder={"Cari..."}
          onChange={(e) => updateFilterText(e.target.value)}
        />
      </div>
      {listItems?.map((item) => (
        <Link to={onClick(item)} className="no-underline">
          <CardRowMobileFirst
            key={item.id}
            item={item}
            itemsAttrs={itemsAttrs}
          />
        </Link>
      ))}
      {viewItems?.length > 5 && (
        <div className="mt-8 flex justify-center">
          <Button variant="secondary" onClick={onClickSeeAll}>
            {isSeeAll ? "Sembunyikan" : "Selengkapnya"}
          </Button>
        </div>
      )}
    </>
  );
};

export default ListComponentCardLayoutMobileFirst;
