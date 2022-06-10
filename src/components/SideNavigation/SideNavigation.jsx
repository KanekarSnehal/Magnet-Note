import "./sidenavigation.css";
import { NavLink } from "react-router-dom";
import { useModal, useNotes } from "../../context";
import { ModalInput } from "../index";

export const SideNavigation = () => {
  const { modalState, modalDispatch } = useModal();
  const { noteDispatch } = useNotes();
  const isActiveClass = ({ isActive }) =>
    `side-bar-items ${isActive && "active"}`;

  return (
    <>
      <aside className="side-bar-container">
        <NavLink className={isActiveClass} to="/home">
          <i className="bx bx-home"></i>
          <span className="nav-title">Home</span>
        </NavLink>
        <NavLink className={isActiveClass} to="/archive">
          <i className="bx bx-archive-in"></i>
          <span className="nav-title">Archive</span>
        </NavLink>
        <NavLink className={isActiveClass} to="/trash">
          <i className="bx bx-trash"></i>
          <span className="nav-title">Trash</span>
        </NavLink>
        <NavLink className={isActiveClass} to="/profile">
          <i className="bx bx-face"></i>
          <span className="nav-title">Profile</span>
        </NavLink>
        <li
          className=" side-bar-items mx-16"
          onClick={() => {
            modalDispatch({ type: "ADD_NOTE" });
            noteDispatch({ type: "ADD_NOTE" });
          }}
        >
          <i className="bx bx-plus"></i>
          <span className="nav-title">Create Note</span>
        </li>
      </aside>
      {modalState.show && <ModalInput />}
    </>
  );
};
