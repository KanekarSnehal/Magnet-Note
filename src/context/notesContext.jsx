import { createContext, useContext, useReducer } from "react";
import { NoteReducer } from "../reducer/NoteReducer";
import { useEffect } from "react";
const NotesContext = createContext();
const useNotes = () => useContext(NotesContext);

const NotesProvider = ({ children }) => {
  const [noteState, noteDispatch] = useReducer(NoteReducer, {
    notes: [],
    noteData: {
      isPinned: false,
      isTrashed: false,
      isArchived: false,
      noteColor: "#fff",
      label: "class",
      priority: "high",
      title: "",
      body: "",
    },
  });

  return (
    <NotesContext.Provider
      value={{
        notes: noteState.notes,
        noteData: noteState.noteData,
        currNote: noteState.currNote,
        noteDispatch,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export { NotesProvider, useNotes };
