import { useState } from "react";
import "./palette.css";
import { useNotes } from "../../context/index";

const palette = [
  "#FFFFFF",
  "#f28983",
  "#fbbc04",
  "#FFF475",
  "#CCFF90",
  "#A7FFEB",
  "#CBF0F8",
  "#AECBFA",
  "#D7AEFB",
  "#FDCFE8",
  "#E6C9A8",
  "#E8EAED",
];

export const Palette = ({ type, id, setNoteInfo }) => {
  const [isHidden, setIsHidden] = useState(true);
  const { notes, noteData, noteDispatch } = useNotes();

  return (
    <>
      <i
        className="bx bx-palette mr-16 icon"
        onMouseOver={() => setIsHidden(!isHidden)}
        onMouseOut={() => setIsHidden(!isHidden)}
      >
        <div
          className="color-palette-container"
          style={{ display: isHidden ? "none" : "grid" }}
        >
          {palette.map((color) => (
            <div
              id={color}
              key={color}
              className="color-palette"
              style={{ backgroundColor: color }}
              onClick={() =>
                type === "card"
                  ? noteDispatch({
                      type: "COLOR_CHANGE",
                      payload1: color,
                      payload2: id,
                    })
                  : setNoteInfo((prevNoteData) => {
                      return {
                        ...prevNoteData,
                        noteColor: color,
                      };
                    })
              }
            ></div>
          ))}
        </div>
      </i>
    </>
  );
};
