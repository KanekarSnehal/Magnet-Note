import { Link } from "react-router-dom";
import { useAuthContext } from "../../context";

export const Header = () => {
  const {
    authState: { authToken },
  } = useAuthContext();
  return (
    <header className="header-container">
      <Link className="logo-container" to={authToken ? "/home" : "/"}>
        <img src="icon.png" alt="logo" className="brand-logo" />
        <span className="brand-name">Magnet Note </span>
      </Link>
    </header>
  );
};
