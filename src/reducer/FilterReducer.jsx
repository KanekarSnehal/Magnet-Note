import { filtersInitialState } from "../context/index";
export const FilterReducer = (filterState, filterAction) => {
  switch (filterAction.type) {
    case "SORT":
      return { ...filterState, sortBy: filterAction.payload };
    case "PRIORITY":
      return {
        ...filterState,
        priority: filterState.priority.includes(filterAction.payload)
          ? filterState.priority.filter(
              (prevPriority) => prevPriority !== filterAction.payload
            )
          : filterState.priority.concat(filterAction.payload),
      };
    case "TAGS":
      return {
        ...filterState,
        tags: filterState.tags.includes(filterAction.payload)
          ? filterState.tags.filter(
              (prevTags) => prevTags !== filterAction.payload
            )
          : filterState.tags.concat(filterAction.payload),
      };
    case "CLEAR_ALL":
      return { ...filtersInitialState };
  }
};
