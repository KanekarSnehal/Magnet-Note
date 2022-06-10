import { SideNavigation } from "../../components/index";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/index";
import "./profile-page.css";
import toast from "react-hot-toast";

export const ProfilePage = () => {
  const { authState, setAuthState } = useAuthContext();
  const { authUser } = authState;
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("magnetNoteToken");
    localStorage.removeItem("magnetNoteUser");
    setAuthState({ ...authState, authToken: null, authUser: null });
    navigate("/");
    toast.success(`Logged Out Successfully`);
  };

  return (
    <div className="display-conatiner">
      <SideNavigation />
      <div className="main-content-container">
        <div className="profile-details-container">
          <p className="profile-info">
            <span>Name</span>
            <span>
              {authUser.firstName} {authUser.lastName}
            </span>
          </p>
          <p className="profile-info">
            <span>Email</span>
            <span>{authUser.email}</span>
          </p>
          <button className="btn outline-secondary-btn" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
