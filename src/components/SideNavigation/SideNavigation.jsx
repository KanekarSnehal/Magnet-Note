import "./sidenavigation.css";
import { useNavigate } from "react-router-dom";
import { useModal, useAuthContext } from "../../context/index";
import { ModalInput } from "../ModalInput/ModalInput";

export const SideNavigation = () => {
  const { modalState, modalDispatch } = useModal();
  const { user } = useAuthContext();
  console.log(user);
  const navigate = useNavigate();
  return (
    <div className="sideNav-container ">
      <div className="sideNav-buttons">
        <button
          className={
            location.pathname === "/home"
              ? `btn p-md outline-secondary-btn active`
              : ` btn p-md outline-secondary-btn`
          }
          onClick={() => navigate("/home")}
        >
          <i className="fas fa-home mr-16 "></i>Home
        </button>
        <button
          className={
            location.pathname === "/label"
              ? `btn p-md outline-secondary-btn active`
              : ` btn p-md outline-secondary-btn`
          }
          onClick={() => navigate("/label")}
        >
          <i className="fas fa-tags mr-16 "></i>Labels
        </button>
        <button
          className={
            location.pathname === "/archive"
              ? `btn p-md outline-secondary-btn active`
              : ` btn p-md outline-secondary-btn`
          }
          onClick={() => navigate("/archive")}
        >
          <i className="fas fa-archive mr-16 "></i>Archive
        </button>
        <button
          className={
            location.pathname === "/trash"
              ? `btn p-md outline-secondary-btn active`
              : ` btn p-md outline-secondary-btn`
          }
          onClick={() => navigate("/trash")}
        >
          <i className="far fa-trash-alt mr-16 "></i>Trash
        </button>
        <button
          className={
            location.pathname === "/profile"
              ? `btn p-md outline-secondary-btn active`
              : ` btn p-md outline-secondary-btn`
          }
          onClick={() => navigate("/profile")}
        >
          <i className="far fa-user  mr-16"></i>Profile
        </button>
      </div>

      <button
        className="btn primary-btn my-16"
        onClick={() => modalDispatch({ type: "ADD_NOTE", payload: "ADD" })}
      >
        Create New Note
      </button>
      {modalState.show && <ModalInput />}
      <div className="btn outline-primary-btn user-logout  text-bold-weight secondary-text-color">
        <img
          loading="lazy"
          src="avatar.jpg"
          className="avatar avatar-xs-size"
          alt="avatar"
        />
        <span>Snehal Kanekar</span>
        <i className="fas fa-sign-out ml-16"></i>
      </div>
    </div>
  );
};
