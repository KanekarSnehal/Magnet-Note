import { v4 as uuid } from "uuid";

const NoteConstants = {
  PINNING_NOTE: "PINNING_NOTE",
  ARCHIVING_NOTE: "ARCHIVING_NOTE",
  TRASHING_NOTE: "TRASHING_NOTE",
  COLOR_CHANGE: "COLOR_CHANGE",
  LABEL_CHANGE: "LABEL_CHANGE",
  PRIORITY_CHANGE: "PRIORITY_CHANGE",
  TITLE_CHANGE: "TITLE_CHANGE",
  BODY_CHANGE: "BODY_CHANGE",
  UPDATE_NOTE: "UPDATE_NOTE",
  ADD_NOTE: "ADD_NOTE",
  NOTE_ADDED: "NOTE_ADDED",
  NOTE_UPDATED: "NOTE_UPDATED",
  SELECT_NOTE: "SELECT_NOTE",
};

export const NoteReducer = (noteState, noteAction) => {
  const {
    PINNING_NOTE,
    ARCHIVING_NOTE,
    TRASHING_NOTE,
    COLOR_CHANGE,
    LABEL_CHANGE,
    PRIORITY_CHANGE,
    TITLE_CHANGE,
    BODY_CHANGE,
    UPDATE_NOTE,
    ADD_NOTE,
    NOTE_ADDED,
    NOTE_UPDATED,
    SELECT_NOTE,
  } = NoteConstants;

  const { notes, noteData } = noteState;

  switch (noteAction.type) {
    case PINNING_NOTE:
      const newNoteData = notes.find(
        (noteItem) => noteItem._id === noteAction.payload
      );

      return {
        ...noteState,
        noteData: {
          ...newNoteData,
          isPinned: !newNoteData.isPinned,
        },
      };
    case ARCHIVING_NOTE:
      const newNoteData1 = notes.find(
        (noteItem) => noteItem._id === noteAction.payload
      );

      return {
        ...noteState,
        noteData: {
          ...newNoteData1,
          isArchived: !newNoteData1.isArchived,
        },
      };
    case TRASHING_NOTE:
      const newNoteData2 = notes.find(
        (noteItem) => noteItem._id === noteAction.payload
      );

      return {
        ...noteState,
        noteData: {
          ...newNoteData2,
          isTrashed: !newNoteData2.isTrashed,
        },
      };
    case COLOR_CHANGE:
      const newNoteData3 = notes.find(
        (noteItem) => noteItem._id === noteAction.payload2
      );

      return {
        ...noteState,
        noteData: {
          ...newNoteData3,
          noteColor: noteAction.payload1,
        },
      };
    case LABEL_CHANGE:
      return {
        ...noteState,
        noteData: {
          ...noteState.noteData,
          label: noteAction.payload,
        },
      };
    case PRIORITY_CHANGE:
      return {
        ...noteState,
        noteData: {
          ...noteState.noteData,
          priority: noteAction.payload,
        },
      };
    case TITLE_CHANGE:
      return {
        ...noteState,
        noteData: {
          ...noteState.noteData,
          title: noteAction.payload,
        },
      };
    case BODY_CHANGE:
      return {
        ...noteState,
        noteData: {
          ...noteState.noteData,
          body: noteAction.payload,
        },
      };
    case UPDATE_NOTE:
      return { ...noteState, noteData: noteAction.payload };
    case ADD_NOTE:
      return {
        ...noteState,
        noteData: {
          isPinned: false,
          isTrashed: false,
          isArchived: false,
          noteColor: "#fff",
          label: "class",
          priority: "high",
          title: "",
          body: "",
          createdOn: Date.now(),
        },
      };
    case NOTE_ADDED:
      return { ...noteState, notes: noteAction.payload };
    case NOTE_UPDATED:
      return { ...noteState, notes: noteAction.payload };
  }
};
