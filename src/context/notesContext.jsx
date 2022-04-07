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
      noteColor: "#fff",
      isArchived: false,
      label: "class",
      priority: "high",
      title: "",
      body: "",
    },
    archiveNotes: [],
    trashNotes: [],
  });

  return (
    <NotesContext.Provider
      value={{
        notes: noteState.notes,
        noteData: noteState.noteData,
        archiveNotes: noteState.archiveNotes,
        trashNotes: noteState.trashNotes,
        noteDispatch,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export { NotesProvider, useNotes };
