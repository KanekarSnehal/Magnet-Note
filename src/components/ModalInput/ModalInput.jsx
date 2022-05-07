import { Palette, Dropdown } from "../index";
import { useModal, useNotes } from "../../context/index";
import "./noteInput.css";
import { addNote, updateNote } from "../../services/noteServices";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const ModalInput = () => {
  const tagOptions = ["class", "work", "study"];
  const priorityOptions = ["high", "medium", "low"];
  const { modalState, modalDispatch } = useModal();
  const { show, buttonType } = modalState;
  const { notes, noteData, noteDispatch } = useNotes();
  const [noteInfo, setNoteInfo] = useState(noteData);
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const handleChange = (e) => {
    setNoteInfo((prevNoteData) => {
      return { ...prevNoteData, [e.target.id]: e.target.value };
    });
  };

  const handlePinnedNote = () => {
    setNoteInfo((prevNoteData) => {
      return { ...prevNoteData, isPinned: !prevNoteData.isPinned };
    });
  };

  const handlePriorityChange = (e) => {
    setNoteInfo((prevNoteData) => {
      return { ...prevNoteData, priority: e.target.value };
    });
  };

  const handleAddNote = async () => {
    try {
      const { data } = await addNote(noteInfo);
      noteDispatch({ type: "NOTE_ADDED", payload: data.notes });
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdateNote = async () => {
    try {
      const { data } = await updateNote(noteInfo._id, noteInfo);
      noteDispatch({ type: "NOTE_UPDATED", payload: data.notes });
      console.log(data.notes);
    } catch (error) {}
  };

  return (
    <div
      className="overlay"
      onClick={() => modalDispatch({ type: "CLOSE_MODAL" })}
    >
      <div className="modal">
        <div
          className="note-input-container width-60 "
          onClick={(e) => e.stopPropagation()}
          style={{ backgroundColor: noteInfo.noteColor }}
        >
          <div className="input-text-section ">
            <textarea
              id="title"
              name="title"
              typeof="text"
              placeholder="Title"
              className="text title"
              onChange={handleChange}
              value={noteInfo.title}
            />

            <ReactQuill
              id="body"
              placeholder="Take a note..."
              className="text"
              modules={modules}
              formats={formats}
              value={noteInfo.body}
              preserveWhitespace={true}
              onChange={(e) => {
                setNoteInfo((prevNoteData) => ({
                  ...prevNoteData,
                  body: e,
                }));
              }}
            />

            <button className=" note-pin badge-top-right">
              {noteInfo.isPinned ? (
                <i class="bx bxs-pin mr-16 icon" onClick={handlePinnedNote}></i>
              ) : (
                <i class="bx bx-pin mr-16 icon" onClick={handlePinnedNote}></i>
              )}
            </button>
          </div>

          <div className="edit-section-container">
            <Palette
              dataItem={noteInfo}
              type={"modal"}
              setNoteInfo={setNoteInfo}
            />

            <Dropdown data={tagOptions} setNoteInfo={setNoteInfo} />

            <select className="tag mr-16" onChange={handlePriorityChange}>
              {priorityOptions.map((dataItem) => (
                <option value={dataItem} key={dataItem}>
                  {dataItem}
                </option>
              ))}
            </select>

            <div className="ml-auto">
              <button
                className="btn primary-btn"
                onClick={() => {
                  buttonType === "Add" ? handleAddNote() : handleUpdateNote();
                  modalDispatch({ type: "CLOSE_MODAL" });
                }}
              >
                {buttonType}
              </button>
              <button
                className="btn secondary-btn"
                onClick={() => modalDispatch({ type: "CLOSE_MODAL" })}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
