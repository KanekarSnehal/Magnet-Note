import { SideNavigation, NoteCards } from "../../components/index";
import { useNotes } from "../../context/index";

export const ArchivePage = () => {
  const { archiveNotes } = useNotes();
  return (
    <div className="display-conatiner">
      <SideNavigation />
      <div className="main-content-container">
        <div>
          {archiveNotes.length === 0 ? (
            <h6 className="text-center">No archived notes added...</h6>
          ) : (
            <NoteCards data={archiveNotes} disableUpdate archivedNote />
          )}
        </div>
      </div>
    </div>
  );
};
