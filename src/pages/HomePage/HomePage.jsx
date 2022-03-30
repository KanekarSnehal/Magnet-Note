import "./homePage.css";
import {
  Header,
  SideNavigation,
  NoteCards,
  HomePageFilter,
} from "../../components/index";
import { data } from "../../data";

export const HomePage = () => {
  return (
    <>
      <Header />
      <div className="display-conatiner">
        <SideNavigation />
        <div className="main-content-container">
          <HomePageFilter />
          <div>
            <h4 className="text-center my-16">Pinned</h4>
            <NoteCards data={data.filter((dataItem) => dataItem.isPinned)} />
          </div>
          <div>
            <h4 className="text-center my-16">Others</h4>
            <NoteCards data={data.filter((dataItem) => !dataItem.isPinned)} />
          </div>
        </div>
      </div>
    </>
  );
};
