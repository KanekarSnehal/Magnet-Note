import { Header, SideNavigation } from "../../components/index";

export const ProfilePage = () => {
  return (
    <>
      <Header />
      <div className="display-conatiner">
        <SideNavigation />
        <button className="btn primary-btn width-40">Logout</button>
      </div>
    </>
  );
};
