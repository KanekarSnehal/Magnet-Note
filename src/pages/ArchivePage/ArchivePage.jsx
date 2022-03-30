import { Header, SideNavigation, NoteCards } from "../../components/index";
import { data } from "../../data";

export const ArchivePage = () => {
  return (
    <>
      <Header />
      <div className="display-conatiner">
        <SideNavigation />
        <div className="main-content-container">
          <div>
            <h4 className="text-center my-16">Pinned</h4>
            <NoteCards
              data={data.filter(
                (dataItem) => dataItem.isPinned && dataItem.isArchived
              )}
            />
          </div>
          <div>
            <h4 className="text-center my-16">Others</h4>
            <NoteCards
              data={data.filter(
                (dataItem) => !dataItem.isPinned && dataItem.isArchived
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};
