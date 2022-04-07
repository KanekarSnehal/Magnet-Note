import "./homePage.css";
import {
  Header,
  SideNavigation,
  NoteCards,
  HomePageFilter,
} from "../../components/index";
import { useModal, useNotes } from "../../context/index";
import { useFilter } from "../../context/index";

export const HomePage = () => {
  const { notes, noteData, noteDispatch, currNote } = useNotes();
  const { filterState, filterDispatch } = useFilter();

  const sortByTime = (filterState, notes) => {
    if (filterState.sortBy === "NEWEST_FIRST")
      return [...notes].sort(
        (noteOne, noteTwo) => noteOne.createdOn - noteTwo.createdOn
      );
    else if (filterState.sortBy === "OLDEST_FIRST")
      return [...notes].sort(
        (noteOne, noteTwo) => noteTwo.createdOn - noteOne.createdOn
      );
    else return notes;
  };

  const filterByPriorityAndTags = (filterState, notes) => {
    const { priority, tags } = filterState;
    const priorityNotes =
      priority.length === 0
        ? notes
        : notes.filter((note) =>
            priority.includes(note.priority.toLowerCase())
          );
    const tagNotes =
      tags.length === 0
        ? priorityNotes
        : priorityNotes.filter((note) => tags.includes(note.label));

    return tagNotes;
  };

  const getFinalNotes =
    (...filterFunctions) =>
    (filterState, notes) =>
      filterFunctions.reduce(
        (prevVal, currVal) => currVal(filterState, prevVal),
        notes
      );
  const finalFilteredNotes = getFinalNotes(sortByTime, filterByPriorityAndTags)(
    filterState,
    notes
  );
  return (
    <>
      <Header />
      <div className="display-conatiner">
        <SideNavigation />
        <div className="main-content-container">
          <HomePageFilter />
          <div>
            <h4 className="text-center my-16">Pinned</h4>
            {finalFilteredNotes.length === 0 ? (
              <h6>No pinned notes added...</h6>
            ) : (
              <NoteCards
                data={finalFilteredNotes.filter(
                  (dataItem) => dataItem.isPinned
                )}
              />
            )}
          </div>
          <div>
            <h4 className="text-center my-16">Others</h4>
            {finalFilteredNotes.length === 0 ? (
              <h6>No other notes added...</h6>
            ) : (
              <NoteCards
                data={finalFilteredNotes.filter(
                  (dataItem) => !dataItem.isPinned
                )}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
