import { Header, SideNavigation } from "../../components/index";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/index";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, authDispatch } = useAuthContext();

  const logoutHandler = (e) => {
    authDispatch({ type: "USER_LOGOUT" });
    localStorage.removeItem("token");
  };

  return (
    <>
      <Header />
      <div className="display-conatiner">
        <SideNavigation />
        <button className="btn primary-btn width-40" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </>
  );
};
