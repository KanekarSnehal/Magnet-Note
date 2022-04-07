import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducer";

const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

const filtersInitialState = {
  sortBy: null,
  priority: [],
  tags: [],
};

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(
    FilterReducer,
    filtersInitialState
  );

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { useFilter, FilterProvider, filtersInitialState };
