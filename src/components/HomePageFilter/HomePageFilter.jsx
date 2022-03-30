import { Dropdown } from "../index";

export const HomePageFilter = () => {
  const tagOptions = ["class", "work", "study"];
  return (
    <fieldset className="py-16 px-16 text-center">
      <legend>Filters</legend>
      <label htmlFor="priority" className="mr-16">
        Sort By Priority
      </label>
      <select name="priority" className="tag">
        <option value="Low to High">Low to High</option>
        <option value="High to Low">High to Low</option>
      </select>
      <label htmlFor="date" className="mx-16">
        Sort By Date
      </label>
      <select name="date" className="px-8 tag">
        <option value="Newest First">Newest First</option>
        <option value="Newest Last">Newest Last</option>
      </select>
      <div className="my-16 text-left display-flex-row">
        <label htmlFor="tags" className="mr-16">
          Select tags
        </label>
        <Dropdown data={tagOptions} />
        {tagOptions.map((tagItem) => (
          <span className="mx-8 my-8 label">
            {tagItem}
            <i className="fa-solid fa-xmark  icon"></i>
          </span>
        ))}
      </div>
    </fieldset>
  );
};
