import { Palette, Label } from "../index";
import { useModal, useNotes } from "../../context/index";
import ReactTooltip from "react-tooltip";
import { useEffect, useState } from "react";
import {
  addNote,
  updateNote,
  addToArchivedNote,
  deleteNote,
  restoreFromArchivedNote,
  deleteFromArchivedNote,
} from "../../services/noteServices";

export const NoteCards = ({
  data,
  disableUpdate,
  archivedNote,
  trashedNote,
}) => {
  const { modalState, modalDispatch } = useModal();
  const { notes, noteData, noteDispatch, archiveNotes, trashNotes } =
    useNotes();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await updateNote(noteData._id, noteData);
        noteDispatch({ type: "NOTE_UPDATED", payload: data.notes });
      } catch (error) {}
    })();
  }, [noteData.isPinned, noteData.noteColor]);

  const handleArchive = async (dataItem) => {
    try {
      const { data } = archivedNote
        ? await restoreFromArchivedNote({
            ...dataItem,
            isArchived: false,
          })
        : await addToArchivedNote({
            ...dataItem,
            isArchived: true,
          });
      noteDispatch({
        type: "SET_ARCHIVE_NOTES",
        payload1: data.notes,
        payload2: data.archives,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (dataItem) => {
    try {
      if (archivedNote) {
        const { data } = await deleteFromArchivedNote(dataItem._id);
        noteDispatch({ type: "DELETED_FROM_ARCHIVE", payload: data.archives });
      } else if (trashedNote) {
        const { data } = await deleteNote(dataItem._id);
        noteDispatch({ type: "DELETED_FROM_TRASH", payload: data.notes });
      } else {
        noteDispatch({ type: "ADD_TO_TRASH", payload: dataItem });
        const { data } = await deleteNote(dataItem._id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromTrash = async (dataItem) => {
    try {
      const { data } = await addNote(dataItem);
      noteDispatch({ type: "NOTE_ADDED", payload: data.notes });
      noteDispatch({
        type: "REMOVE_FROM_TRASH",
        payload: dataItem,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="notes-keeping-area ">
        {data.length !== 0 &&
          data.map((dataItem) => (
            <div
              className="note-input-container grid-item-note "
              style={{ backgroundColor: dataItem.noteColor }}
            >
              <div className="input-text-section">
                <h6>{dataItem.title}</h6>
                <p>{dataItem.body}</p>
              </div>
              {!disableUpdate && (
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
              )}

              <div className="label-container">
                <span className="label">{dataItem.label}</span>
                <span className="label">{dataItem.priority}</span>
              </div>

              <div className="edit-section-container">
                {!disableUpdate && (
                  <Palette
                    dataItem={dataItem}
                    type={"card"}
                    id={dataItem._id}
                  />
                )}

                {!trashedNote && archivedNote ? (
                  <i
                    class="bx bxs-archive-in bx-flip-horizontal mr-16 icon"
                    onClick={() => {
                      noteDispatch({
                        type: "UNARCHIVE_NOTE",
                        payload: dataItem,
                      });
                      handleArchive(dataItem);
                    }}
                  ></i>
                ) : (
                  !trashedNote && (
                    <i
                      class="bx bx-archive-in bx-flip-horizontal mr-16 icon "
                      onClick={() => {
                        noteDispatch({
                          type: "ARCHIVE_NOTE",
                          payload: dataItem,
                        });
                        handleArchive(dataItem);
                      }}
                    ></i>
                  )
                )}
                {trashedNote ? (
                  <>
                    <i
                      class="bx bxs-trash mr-16 icon"
                      onClick={() => removeFromTrash(dataItem)}
                    ></i>
                    <i
                      class="bx bxs-trash mr-16 icon error-color"
                      data-tip
                      data-for="deleteTip"
                      onClick={() => {
                        noteDispatch({
                          type: "REMOVE_FROM_TRASH",
                          payload: dataItem,
                        });
                      }}
                    ></i>
                    <ReactTooltip id="deleteTip" place="top" effect="solid">
                      Click to delete permanently
                    </ReactTooltip>
                  </>
                ) : (
                  <i
                    class="bx bx-trash mr-16 icon"
                    onClick={() => {
                      handleDelete(dataItem);
                      noteDispatch({
                        type: "TRASHING_NOTE",
                        payload: dataItem,
                      });
                    }}
                  ></i>
                )}
                {!disableUpdate && (
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
                )}

                <p className="ml-auto">
                  Created on {new Date(dataItem.createdOn).toDateString()}{" "}
                  {new Date(dataItem.createdOn).toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
