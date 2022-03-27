export const OtherNotes = () => {
  return (
    <>
      <h4 className="text-left">Others</h4>
      <div className="notes-keeping-area ">
        <div className="note-input-container grid-item-note">
          <div className="input-text-section">
            <textarea
              rows={1}
              typeof="text"
              placeholder="Title"
              className="text title"
            >
              Something...
            </textarea>
            <textarea
              typeof="text"
              placeholder="Take a note..."
              className="text"
            >
              Note Taken
            </textarea>
            <button className=" note-pin badge-top-right ">
              <i class="fas fa-thumbtack"></i>
            </button>
          </div>
          <div className="label-container">
            <span className="label">Label</span>
            <span className="label">Label</span>
          </div>

          <div className="edit-section-container">
            <i className="fas fa-palette mr-32"></i>
            <i class="fas fa-tags mr-32 "></i>
            <i class="fas fa-archive mr-32"></i>
            <i class="far fa-trash-alt mr-32"></i>
            <p className="ml-auto">Created on 26/10/2021</p>
          </div>
        </div>
      </div>
    </>
  );
};
