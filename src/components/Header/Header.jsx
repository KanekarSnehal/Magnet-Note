import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/index";

export const Header = () => {
  const { isAuthenticated, authDispatch } = useAuthContext();
  return (
    <header className="header-container">
      <Link className="logo-container" to={isAuthenticated ? "/home" : "/"}>
        <img src="icon.png" alt="logo" className="brand-logo" />
        <span className="brand-name">Note App </span>
      </Link>
    </header>
  );
};
