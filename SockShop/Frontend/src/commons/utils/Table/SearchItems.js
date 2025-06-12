const searchItems = (items, searchText, itemsAttrs, excludes = []) => {
  return items?.map((collection) =>
    collection?.filter((item) =>
      itemsAttrs?.some(
        (itemsAttr) =>
          !excludes.includes(itemsAttr.featureName) &&
          item[itemsAttr.featureName] &&
          item[itemsAttr.featureName]
            .toString()
            .toLowerCase()
            .includes(searchText),
      ),
    ),
  );
};

export default searchItems;
