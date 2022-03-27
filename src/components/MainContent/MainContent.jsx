import "./main-content.css";
import { NoteInput, PinnedNotes, OtherNotes } from "../index";
export const MainContent = () => {
  return (
    <div className="main-content-container">
      {/* <label for="searchbar">
        <input
          class="input-corner-rounded input-md"
          type="text"
          name="searchbar"
          id="searchbar"
          placeholder="Search..."
        />
      </label> */}

      <NoteInput />
      <PinnedNotes />
      <OtherNotes />
    </div>
  );
};
