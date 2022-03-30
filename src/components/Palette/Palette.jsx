import { useState } from "react";
import "./palette.css";
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

export const Palette = () => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <i
        className="fas fa-palette mr-16 icon"
        onMouseOver={() => setIsHidden(!isHidden)}
        onMouseOut={() => setIsHidden(!isHidden)}
      >
        <div
          className="colorPaletteContainer"
          style={{ display: isHidden ? "none" : "grid" }}
        >
          {palette.map((color) => (
            <div
              key={color}
              className="colorPalette"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </i>
    </>
  );
};
