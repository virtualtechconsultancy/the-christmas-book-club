import { useState } from "react";
import { Link } from "react-router-dom";
import "../main_app_styles.css";

interface NavBarProps {
  imageSrcPath: string;
  navItems: string[];
}

function NavBar({ imageSrcPath, navItems }: NavBarProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const formatPath = (item: string) => {
    return `/${item.toLowerCase().split(" ").join("-")}`;
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light shadow">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={imageSrcPath}
            // width="30"
            height="45"
            className="d-inline-block align-center"
            alt=""
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-md-1">
            {navItems.map((item, index) => (
              <li
                key={item}
                className="nav-item"
                onClick={() => setSelectedIndex(index)}
              >
                <Link
                  to={formatPath(item)}
                  className={
                    selectedIndex === index
                      ? "nav-link active fw-bold"
                      : "nav-link"
                  }
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
