import { Header, SideNavigation, NoteCards } from "../../components/index";
import { data } from "../../data";

export const TrashPage = () => {
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
                (dataItem) => dataItem.isPinned && dataItem.isTrashed
              )}
            />
          </div>
          <div>
            <h4 className="text-center my-16">Others</h4>
            <NoteCards
              data={data.filter(
                (dataItem) => !dataItem.isPinned && dataItem.isTrashed
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};
