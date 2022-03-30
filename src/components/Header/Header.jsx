import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header-container">
      <Link className="logo-container" to="/home">
        <img src="icon.png" alt="logo" className="brand-logo" />
        <span className="brand-name">Note App </span>
      </Link>
      {/* <img
        src="https://i.ibb.co/WstYhz3/night-mode-3.png"
        className="dark-mode-icon ml-auto"
      /> */}
    </header>
  );
};
