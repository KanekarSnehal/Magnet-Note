import "./sidenavigation.css";
import { useNavigate } from "react-router-dom";
import { useModal, useNotes } from "../../context";
import { ModalInput } from "../index";

export const SideNavigation = () => {
  const { modalState, modalDispatch } = useModal();
  const navigate = useNavigate();
  const { noteDispatch } = useNotes();

  return (
    <>
      <aside className="side-bar-container">
        <ul className="my-16">
          <li
            className="side-bar-items active"
            onClick={() => navigate("/home")}
          >
            <i className="bx bx-home"></i>Home
          </li>
          <li className="side-bar-items" onClick={() => navigate("/label")}>
            <i className="bx bx-label"></i>
            Labels
          </li>
          <li className="side-bar-items" onClick={() => navigate("/archive")}>
            <i class="bx bx-archive-in"></i>Archive
          </li>
          <li className="side-bar-items" onClick={() => navigate("/trash")}>
            <i class="bx bx-trash"></i>Trash
          </li>
          <li className="side-bar-items" onClick={() => navigate("/profile")}>
            <i class="bx bx-face"></i>
            Profile
          </li>
          <li
            className="side-bar-items"
            onClick={() => {
              modalDispatch({ type: "ADD_NOTE" });
              noteDispatch({ type: "ADD_NOTE" });
            }}
          >
            <i class="bx bx-plus"></i>Create Note
          </li>
        </ul>
      </aside>
      {modalState.show && <ModalInput />}
    </>
  );
};
