import "./main-content.css";
import { NoteInput, PinnedNotes, OtherNotes } from "../index";
export const MainContent = () => {
  return (
    <div className="main-content-container">
      <NoteInput />
      <PinnedNotes />
      <OtherNotes />
    </div>
  );
};
