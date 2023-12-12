import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="animate__animated animate__fadeInDown bg-success">
        <div className="navbar">
          <div className="navbarSection">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/favorites">
              Favoritos
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
