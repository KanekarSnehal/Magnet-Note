import { Link } from "react-router-dom";
import { useAuthContext } from "../../context";
import { useDocumentTitle } from "../../hooks";

export const Header = () => {
  const {
    authState: { authToken },
  } = useAuthContext();
  useDocumentTitle();

  return (
    <header className="header-container">
      <Link className="logo-container" to={authToken ? "/home" : "/"}>
        <img src="favicon.ico" alt="logo" className="brand-logo" />
        <span className="brand-name">Magnet Note </span>
      </Link>
    </header>
  );
};
