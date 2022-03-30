import "./label.css";

export const Dropdown = ({ data }) => {
  return (
    <select className="tag mr-16">
      {data.map((dataItem) => (
        <option value={dataItem} key={dataItem}>
          {dataItem}
        </option>
      ))}
    </select>
  );
};
