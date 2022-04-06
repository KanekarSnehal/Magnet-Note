import { Header, SideNavigation, NoteCards } from "../../components/index";
import { data } from "../../data";
import { useNotes } from "../../context/index";

export const ArchivePage = () => {
  const { archiveNotes } = useNotes();
  return (
    <>
      <Header />
      <div className="display-conatiner">
        <SideNavigation />
        <div className="main-content-container">
          <div>
            {archiveNotes.length === 0 ? (
              <h6>No archived notes added...</h6>
            ) : (
              <NoteCards data={archiveNotes} disableUpdate archivedNote />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
