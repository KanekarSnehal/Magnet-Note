import "./noteInput.css";
export const NoteInput = () => {
  return (
    <div className="note-input-container width-60">
      <div className="input-text-section ">
        <textarea
          rows={1}
          typeof="text"
          placeholder="Title"
          className="text title"
        ></textarea>
        <textarea
          typeof="text"
          placeholder="Take a note..."
          className="text"
        ></textarea>
        <button className=" note-pin badge-top-right ">
          <i class="fas fa-thumbtack"></i>
        </button>
      </div>
      <div className="edit-section-container">
        <i className="fas fa-palette mr-32"></i>
        <i class="fas fa-tags mr-32 "></i>
        <i class="fas fa-archive mr-32"></i>
        <i class="far fa-trash-alt"></i>
        <button className="btn primary-btn">Add</button>
      </div>
    </div>
  );
};
