export const UpdateLabels = () => {
  const labelArr = ["class", "work", "study"];
  return (
    <fieldset className="py-16 px-32 text-center">
      <legend>Update Labels</legend>
      <div className="display-flex-row">
        {labelArr.map((labelItem) => (
          <span className="mx-8 my-8 label">
            {labelItem}
            <i className="fa-solid fa-xmark  icon"></i>
          </span>
        ))}
      </div>

      <div>
        <input
          type="text"
          className="input-md input-round my-16"
          placeholder="Enter label you want to add"
        />
      </div>
    </fieldset>
  );
};
