import "./homePage.css";
import {
  Header,
  SideNavigation,
  MainContent,
  NoteInput,
} from "../../components/index";
export const HomePage = () => {
  return (
    <>
      <Header />
      <div className="homePage-conatiner">
        <SideNavigation />

        <MainContent />
      </div>
    </>
  );
};
