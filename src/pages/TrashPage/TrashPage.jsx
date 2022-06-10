import { SideNavigation, NoteCards } from "../../components/index";
import { useNotes } from "../../context";

export const TrashPage = () => {
  const { trashNotes } = useNotes();

  return (
    <div className="display-conatiner">
      <SideNavigation />
      <div className="main-content-container">
        <div>
          {trashNotes.length === 0 ? (
            <h6 className="text-center">No trashed notes added...</h6>
          ) : (
            <NoteCards data={trashNotes} disableUpdate trashedNote />
          )}
        </div>
      </div>
    </div>
  );
};
