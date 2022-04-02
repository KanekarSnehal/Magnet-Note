import "./label.css";
import { useNotes } from "../../context/index";

export const Dropdown = ({ data, setNoteInfo }) => {
  const { noteDispatch } = useNotes();

  return (
    <select
      className="tag mr-16"
      onChange={(e) =>
        setNoteInfo((prevNoteData) => {
          return { ...prevNoteData, label: e.target.value };
        })
      }
    >
      {data.map((dataItem) => (
        <option value={dataItem} key={dataItem}>
          {dataItem}
        </option>
      ))}
    </select>
  );
};
