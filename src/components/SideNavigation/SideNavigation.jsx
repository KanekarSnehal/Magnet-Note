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
        <ul className="my-16">
          <NavLink className={isActiveClass} to="/home">
            <i className="bx bx-home"></i>Home
          </NavLink>
          <NavLink className={isActiveClass} to="/label">
            <i className="bx bx-label"></i>
            Labels
          </NavLink>
          <NavLink className={isActiveClass} to="/archive">
            <i className="bx bx-archive-in"></i>Archive
          </NavLink>
          <NavLink className={isActiveClass} to="/trash">
            <i className="bx bx-trash"></i>Trash
          </NavLink>
          <NavLink className={isActiveClass} to="/profile">
            <i className="bx bx-face"></i>
            Profile
          </NavLink>
          <li
            className="side-bar-items"
            onClick={() => {
              modalDispatch({ type: "ADD_NOTE" });
              noteDispatch({ type: "ADD_NOTE" });
            }}
          >
            <i className="bx bx-plus"></i>Create Note
          </li>
        </ul>
      </aside>
      {modalState.show && <ModalInput />}
    </>
  );
};
