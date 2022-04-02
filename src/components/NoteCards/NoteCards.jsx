import { Palette, Label } from "../index";
import { useModal, useNotes } from "../../context/index";
import { ModalInput } from "../ModalInput/ModalInput";
import { useEffect } from "react";
import { addNote, updateNote } from "../../services/noteServices";

export const NoteCards = ({ data }) => {
  const { modalState, modalDispatch } = useModal();
  const { notes, noteData, noteDispatch, currNote } = useNotes();

  const { isPinned, isTrashed, isArchived, noteColor } = noteData;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await updateNote(noteData._id, noteData);
        noteDispatch({ type: "NOTE_UPDATED", payload: data.notes });
      } catch (error) {}
    })();
  }, [noteData]);

  return (
    <>
      <div className="notes-keeping-area ">
        {notes.length !== 0 &&
          notes.map((dataItem) => (
            <div
              className="note-input-container grid-item-note "
              style={{ backgroundColor: dataItem.noteColor }}
            >
              <div className="input-text-section">
                <h6>{dataItem.title}</h6>
                <p>{dataItem.body}</p>
              </div>
              <button className=" note-pin badge-top-right ">
                {dataItem.isPinned ? (
                  <i
                    class="bx bxs-pin mr-16 icon"
                    onClick={() =>
                      noteDispatch({
                        type: "PINNING_NOTE",
                        payload: dataItem._id,
                      })
                    }
                  ></i>
                ) : (
                  <i
                    class="bx bx-pin mr-16 icon"
                    onClick={() =>
                      noteDispatch({
                        type: "PINNING_NOTE",
                        payload: dataItem._id,
                      })
                    }
                  ></i>
                )}
              </button>
              <div className="label-container">
                <span className="label">{dataItem.label}</span>
                <span className="label">{dataItem.priority}</span>
              </div>

              <div className="edit-section-container">
                <Palette dataItem={dataItem} type={"card"} />
                {dataItem.isArchived ? (
                  <i
                    class="bx bxs-archive-in bx-flip-horizontal mr-16 icon"
                    onClick={() =>
                      noteDispatch({
                        type: "ARCHIVING_NOTE",
                        payload: dataItem._id,
                      })
                    }
                  ></i>
                ) : (
                  <i
                    class="bx bx-archive-in bx-flip-horizontal mr-16 icon "
                    onClick={() =>
                      noteDispatch({
                        type: "ARCHIVING_NOTE",
                        payload: dataItem._id,
                      })
                    }
                  ></i>
                )}
                {dataItem.isTrashed ? (
                  <i
                    class="bx bxs-trash mr-16 icon"
                    onClick={() =>
                      noteDispatch({
                        type: "TRASHING_NOTE",
                        payload: dataItem._id,
                      })
                    }
                  ></i>
                ) : (
                  <i
                    class="bx bx-trash mr-16 icon"
                    onClick={() =>
                      noteDispatch({
                        type: "TRASHING_NOTE",
                        payload: dataItem._id,
                      })
                    }
                  ></i>
                )}

                <i
                  className="bx bxs-edit icon"
                  onClick={() => {
                    noteDispatch({
                      type: "UPDATE_NOTE",
                      payload: dataItem,
                    });
                    modalDispatch({
                      type: "UPDATE_NOTE",
                    });
                  }}
                ></i>
                <p className="ml-auto">
                  Created on {new Date(dataItem.createdOn).toDateString()}
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
