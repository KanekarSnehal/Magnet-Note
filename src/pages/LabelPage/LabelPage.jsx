import {
  Header,
  SideNavigation,
  NoteCards,
  UpdateLabels,
} from "../../components/index";
import { data } from "../../data";
import { useNotes } from "../../context/index";

export const LabelPage = () => {
  const { notes } = useNotes();

  return (
    <>
      <Header />
      <div className="display-conatiner">
        <SideNavigation />
        <div className="main-content-container">
          <div>
            <NoteCards data={notes} disableUpdate />
          </div>
        </div>
      </div>
    </>
  );
};
