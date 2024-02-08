import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [pathname, setPathname] = useState("");

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link
            to="/home"
            className={`navbar-brand bnm ${
              pathname === "/home" ? "nav-link active" : "nav-link"
            }`}
            onClick={() => setPathname("/home")}
          >
            START FRAMEWORK
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ps-5 mb-2 mb-lg-0">
              <li className="nav-item lord">
                <Link
                  className={
                    pathname === "/about"
                      ? "nav-link active me-3"
                      : "nav-link lord me-3"
                  }
                  to="/about"
                  onClick={() => setPathname("/about")}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item lord">
                <Link
                  className={
                    pathname === "/portfolio"
                      ? "nav-link active me-3"
                      : "nav-link lord me-3"
                  }
                  to="/portfolio"
                  onClick={() => setPathname("/portfolio")}
                >
                  PORTFOLIO
                </Link>
              </li>
              <li className="nav-item lord">
                <Link
                  className={
                    pathname === "/contact"
                      ? "nav-link active me-3"
                      : "nav-link lord me-3"
                  }
                  to="/contact"
                  onClick={() => setPathname("/contact")}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
