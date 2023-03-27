import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../Asset/navBarVertical/logo.svg";

/**
A header component that displays a navigation bar with links to various pages of the app.
@component
@return {JSX.Element} A header component with links to different pages.
*/
/**
A function that returns a header component that displays a navigation bar with links to various pages of the app.
@function Header
@return {JSX.Element} A header component with links to different pages.
*/
function Header() {
  return (
    <>
      <div className="NavContainer">
        <div className="Logo">
          <Link to="/">
            <img alt="logo" src={logo} />
          </Link>
        </div>

        <div className="LinkContainer">
          <Link className="Link" actif to="/">
            Accueil
          </Link>

          <Link className="Link" to="/profil">
            Profil
          </Link>

          <Link className="Link" to="/reglage">
            Réglage
          </Link>

          <Link className="Link" to="/communaute">
            Communauté
          </Link>
        </div>
      </div>

    </>
  );
}

export default Header;
