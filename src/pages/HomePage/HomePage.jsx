import "./homePage.css";
import {
  Header,
  SideNavigation,
  NoteCards,
  HomePageFilter,
} from "../../components/index";
import { data } from "../../data";
import { useModal, useNotes } from "../../context/index";

export const HomePage = () => {
  const { notes, noteData, noteDispatch, currNote } = useNotes();
  return (
    <>
      <Header />
      <div className="display-conatiner">
        <SideNavigation />
        <div className="main-content-container">
          <HomePageFilter />
          <div>
            <h4 className="text-center my-16">Pinned</h4>
            {notes.length === 0 ? (
              <h6>No pinned notes added...</h6>
            ) : (
              <NoteCards data={notes.filter((dataItem) => dataItem.isPinned)} />
            )}
          </div>
          <div>
            <h4 className="text-center my-16">Others</h4>
            {notes.length === 0 ? (
              <h6>No other notes added...</h6>
            ) : (
              <NoteCards
                data={notes.filter((dataItem) => !dataItem.isPinned)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
