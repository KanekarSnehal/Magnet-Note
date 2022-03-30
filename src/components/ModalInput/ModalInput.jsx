import { Palette, Dropdown } from "../index";
import { useModal } from "../../context/index";
import "./noteInput.css";

export const ModalInput = () => {
  const tagOptions = ["class", "work", "study"];
  const priorityOptions = ["high", "medium", "low"];
  const { modalState, modalDispatch } = useModal();
  const { noteInfo, buttonType } = modalState;

  return (
    <div
      className="overlay"
      onClick={() => modalDispatch({ type: "CLOSE_MODAL", payload: "" })}
    >
      <div className="modal">
        <div
          className="note-input-container width-60 "
          onClick={(e) => e.stopPropagation()}
        >
          <div className="input-text-section ">
            <textarea
              rows={1}
              typeof="text"
              placeholder="Title"
              className="text title"
            >
              {noteInfo.title}
            </textarea>
            <textarea
              rows={50}
              typeof="text"
              placeholder="Take a note..."
              className="text"
            >
              {noteInfo.body}
            </textarea>
            <button className=" note-pin badge-top-right">
              <i className="fas fa-thumbtack icon"></i>
            </button>
          </div>
          <div className="edit-section-container">
            <Palette />

            <i className="fas fa-archive mr-16 icon"></i>
            <i className="far fa-trash-alt mr-16 icon"></i>
            <Dropdown data={tagOptions} />
            <Dropdown data={priorityOptions} />

            <div className="ml-auto">
              <button className="btn primary-btn">{buttonType}</button>
              <button
                className="btn secondary-btn"
                onClick={() =>
                  modalDispatch({ type: "CLOSE_MODAL", payload: "" })
                }
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
