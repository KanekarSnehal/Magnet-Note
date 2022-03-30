import {
  Header,
  SideNavigation,
  NoteCards,
  UpdateLabels,
} from "../../components/index";
import { data } from "../../data";

export const LabelPage = () => {
  return (
    <>
      <Header />
      <div className="display-conatiner">
        <SideNavigation />
        <div className="main-content-container">
          <UpdateLabels />
          <div>
            <h4 className="text-center my-16">Pinned</h4>
            <NoteCards
              data={data.filter(
                (dataItem) => dataItem.isPinned && dataItem.label.length !== 0
              )}
            />
          </div>
          <div>
            <h4 className="text-center my-16">Others</h4>
            <NoteCards
              data={data.filter(
                (dataItem) => !dataItem.isPinned && dataItem.label.length !== 0
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};
