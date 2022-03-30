import { Palette, Label } from "../index";
import { useModal } from "../../context/index";
import { ModalInput } from "../ModalInput/ModalInput";

export const NoteCards = ({ data }) => {
  const { modalState, modalDispatch } = useModal();

  return (
    <>
      <div className="notes-keeping-area ">
        {data &&
          data.map((dataItem) => (
            <div
              className="note-input-container grid-item-note"
              // key={dataItem.id}
            >
              <div className="input-text-section">
                <h6>{dataItem.title}</h6>
                <p>{dataItem.body}</p>
              </div>
              <button className=" note-pin badge-top-right ">
                <i className="fas fa-thumbtack icon"></i>
              </button>
              <div className="label-container">
                {dataItem.label !== [] &&
                  dataItem.label.map((labelItem) => (
                    <span className="label">{labelItem}</span>
                  ))}
              </div>

              <div className="edit-section-container">
                <Palette />
                <i className="fas fa-archive mr-16 icon"></i>
                <i className="far fa-trash-alt mr-16 icon"></i>
                <i
                  className="fas fa-edit icon"
                  onClick={() =>
                    modalDispatch({
                      type: "UPDATE_NOTE",
                      payload: dataItem,
                    })
                  }
                ></i>
                <p className="ml-auto">Created on {dataItem.createdOn}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
