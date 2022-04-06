import { v4 as uuid } from "uuid";

const NoteConstants = {
  PINNING_NOTE: "PINNING_NOTE",
  ARCHIVE_NOTE: "ARCHIVE_NOTE",
  UNARCHIVE_NOTE: "UNARCHIVE_NOTE",
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
  SET_ARCHIVE_NOTES: "SET_ARCHIVE_NOTES",
  DELETED_FROM_ARCHIVE: "DELETED_FROM_ARCHIVE",
  DELETED_FROM_TRASH: "DELETED_FROM_TRASH",
  ADD_TO_TRASH: "ADD_TO_TRASH",
  REMOVE_FROM_TRASH: "REMOVE_FROM_TRASH",
};

export const NoteReducer = (noteState, noteAction) => {
  const {
    PINNING_NOTE,
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
    ARCHIVE_NOTE,
    UNARCHIVE_NOTE,
    DELETED_FROM_ARCHIVE,
    SET_ARCHIVE_NOTES,
    DELETED_FROM_TRASH,
    ADD_TO_TRASH,
    REMOVE_FROM_TRASH,
  } = NoteConstants;

  const { notes, noteData, archiveNotes, trashNotes } = noteState;

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

    case ARCHIVE_NOTE:
      return {
        ...noteState,
        noteData: {
          ...noteAction.payload,
          isArchived: true,
        },
      };

    case UNARCHIVE_NOTE:
      return {
        ...noteState,
        noteData: {
          ...noteAction.payload,
          isArchived: false,
        },
      };

    case TRASHING_NOTE:
      return {
        ...noteState,
        noteData: {
          ...noteAction.payload,
          isArchived: !noteAction.payload.isTrashed,
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

    case SET_ARCHIVE_NOTES:
      return {
        ...noteState,
        notes: noteAction.payload1,
        archiveNotes: noteAction.payload2,
      };
    case DELETED_FROM_ARCHIVE:
      return { ...noteState, archiveNotes: noteAction.payload };
    case DELETED_FROM_TRASH:
      return { ...noteState, notes: noteAction.payload };
    case ADD_TO_TRASH:
      const newNotes = notes.filter(
        (note) => note._id != noteAction.payload._id
      );
      return {
        ...noteState,
        notes: newNotes,
        trashNotes: [...noteState.trashNotes, noteAction.payload],
      };
    case REMOVE_FROM_TRASH:
      const newTrashNotes = trashNotes.filter(
        (note) => note._id != noteAction.payload._id
      );
      return {
        ...noteState,
        trashNotes: newTrashNotes,
      };
  }
};
