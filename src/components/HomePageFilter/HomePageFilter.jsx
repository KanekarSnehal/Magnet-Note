import { useState } from "react";
import { useFilter } from "../../context";

export const HomePageFilter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const { filterState, filterDispatch } = useFilter();
  const tagOptions = ["class", "work", "study"];
  const priorities = ["high", "medium", "low"];
  const handleShowFilter = () => {
    setShowFilter((prevFilter) => !prevFilter);
  };
  const { sortBy, priority, tags } = filterState;

  return (
    <>
      <button
        className="btn primary-btn width-fit-content"
        onClick={handleShowFilter}
      >
        <span className="">Filters</span>
        <i class="bx bx-filter-alt"></i>
      </button>

      {showFilter && (
        <fieldset className="py-16 px-16 text-center">
          <legend className="display-flex-row">Filters</legend>

          <div>
            <span className="mr-16">Sort By</span>

            <label htmlFor="newest-first" className="form-label mr-16">
              <input
                type="radio"
                id="newest-first"
                className="input-checkbox"
                name="sort"
                checked={sortBy === "NEWEST_FIRST"}
                onChange={() =>
                  filterDispatch({ type: "SORT", payload: "NEWEST_FIRST" })
                }
              />
              Newest First
            </label>

            <label htmlFor="oldest-first" className="form-label">
              <input
                type="radio"
                id="oldest-first"
                className="input-checkbox"
                name="sort"
                checked={sortBy === "OLDEST_FIRST"}
                onChange={() =>
                  filterDispatch({ type: "SORT", payload: "OLDEST_FIRST" })
                }
              />
              Oldest First
            </label>
          </div>

          <div className="my-8">
            <span className="mr-16">Filter By Priority</span>
            {priorities.map((dataItem) => (
              <label htmlFor={dataItem} className="form-label mr-16">
                <input
                  type="checkbox"
                  id={dataItem}
                  name="priority"
                  className="input-checkbox"
                  checked={priority.includes(dataItem.toLowerCase())}
                  onChange={() =>
                    filterDispatch({
                      type: "PRIORITY",
                      payload: dataItem.toLowerCase(),
                    })
                  }
                />
                {dataItem}
              </label>
            ))}
          </div>

          <div className="my-8">
            <span className="mr-16">Filter By Tags</span>
            {tagOptions.map((dataItem) => (
              <label htmlFor={dataItem} className="form-label mr-16">
                <input
                  type="checkbox"
                  id={dataItem}
                  name="tag"
                  className="input-checkbox"
                  checked={tags.includes(dataItem.toLowerCase())}
                  onChange={() =>
                    filterDispatch({
                      type: "TAGS",
                      payload: dataItem.toLowerCase(),
                    })
                  }
                />
                {dataItem}
              </label>
            ))}
          </div>
          <p
            className="link-btn cursor-pointer"
            onClick={() => filterDispatch({ type: "CLEAR_ALL" })}
          >
            Clear all
          </p>
        </fieldset>
      )}
    </>
  );
};
