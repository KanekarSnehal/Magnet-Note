import { Palette } from "../index";
import { useModal, useNotes } from "../../context/index";
import ReactTooltip from "react-tooltip";
import { useEffect } from "react";
import {
  addNote,
  updateNote,
  addToArchivedNote,
  deleteNote,
  restoreFromArchivedNote,
  deleteFromArchivedNote,
} from "../../services/noteServices";
import DOMPurify from "dompurify";
import toast from "react-hot-toast";

export const NoteCards = ({
  data,
  disableUpdate,
  archivedNote,
  trashedNote,
}) => {
  const { modalDispatch } = useModal();
  const { noteData, noteDispatch } = useNotes();

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
        ? await restoreFromArchivedNote(dataItem._id)
        : await addToArchivedNote(dataItem);
      noteDispatch({
        type: "SET_ARCHIVE_NOTES",
        payload1: data.notes,
        payload2: data.archives,
      });
      toast.success(`Archived Notes Updated!`);
    } catch (e) {
      toast.error(e?.response?.data?.errors[0]);
    }
  };

  const handleDelete = async (dataItem) => {
    try {
      if (archivedNote) {
        const { data } = await deleteFromArchivedNote(dataItem._id);
        noteDispatch({ type: "DELETED_FROM_ARCHIVE", payload: data.archives });
        toast.success(`Note Deleted from Archived Notes!`);
      } else if (trashedNote) {
        const { data } = await deleteNote(dataItem._id);
        noteDispatch({ type: "DELETED_FROM_TRASH", payload: data.notes });
        toast.success(`Note Deleted Permanently!`);
      } else {
        noteDispatch({ type: "ADD_TO_TRASH", payload: dataItem });
        const { data } = await deleteNote(dataItem._id);
      }
    } catch (e) {
      toast.error(e?.response?.data?.errors[0]);
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
      toast.success(`Note Removed from Trash Successfully!`);
    } catch (e) {
      toast.error(e?.response?.data?.errors[0]);
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
              key={dataItem._id}
            >
              <div className="input-text-section">
                <h6>{dataItem.title}</h6>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      dataItem.body === "<p><br></p>"
                        ? ""
                        : `<p>${dataItem.body}</p>`
                    ),
                  }}
                ></p>
              </div>
              {!disableUpdate && (
                <button className=" note-pin badge-top-right ">
                  {dataItem.isPinned ? (
                    <i
                      className="bx bxs-pin mr-16 icon"
                      onClick={() =>
                        noteDispatch({
                          type: "PINNING_NOTE",
                          payload: dataItem._id,
                        })
                      }
                    ></i>
                  ) : (
                    <i
                      className="bx bx-pin mr-16 icon"
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
                    className="bx bxs-archive-in bx-flip-horizontal mr-16 icon"
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
                      className="bx bx-archive-in bx-flip-horizontal mr-16 icon "
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
                      className="bx bxs-trash mr-16 icon"
                      onClick={() => removeFromTrash(dataItem)}
                    ></i>
                    <i
                      className="bx bxs-trash mr-16 icon error-color"
                      data-tip
                      data-for="deleteTip"
                      onClick={() => {
                        noteDispatch({
                          type: "REMOVE_FROM_TRASH",
                          payload: dataItem,
                        });
                        toast.success(`Note Deleted Permanently!`);
                      }}
                    ></i>
                    <ReactTooltip id="deleteTip" place="top" effect="solid">
                      Click to delete permanently
                    </ReactTooltip>
                  </>
                ) : (
                  <i
                    className="bx bx-trash mr-16 icon"
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
