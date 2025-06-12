const filterItems = (items, filterTextList) => {
  return filterTextList
    ? items?.map((collection) =>
        collection?.filter((item) =>
          filterTextList?.every(
            (filterText) =>
              item[filterText.featureName] &&
              filterText.text.length == 0 ?
              true
              : filterText.text.some((text) => item[filterText.featureName].includes(text)),
          ),
        ),
      )
    : items;
};

export default filterItems;
