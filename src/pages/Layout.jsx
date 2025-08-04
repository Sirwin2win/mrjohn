import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../images/cute-kid-with-abacus-studio.jpg";
import "./Style.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Layout = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img
              src={logo}
              style={{ height: "80px", width: "80px", borderRadius: "50%" }}
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to={"/contact"}>
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to={"/product"}>
                  Products
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-light"
                  to={"/"}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item text-primary" to={"/"}>
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-primary" to={"/"}>
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item text-primary" to={"/"}>
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to={"/blog"}>
                  Blog
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
      {/* Footer Start  */}
      <div class="container-fluid bg-primary my-5 p-5">
        <div class="row ms-5">
          <div className="col-sm-3">
            <h5 class="ms-3 text-light ms-4">Menu</h5>
            <div>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <Link to={"/"} class="text-light footer">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/about"} class="text-light footer">
                    About
                  </Link>
                </li>
                <li>
                  <Link to={"/contact"} class="text-light footer">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to={"/product"} class="text-light footer">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to={"/blog"} class="text-light footer">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <h5 class="ms-3 text-light">Useful Links</h5>
            <div>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <Link to={"/blog"} class="text-light footer">
                    Online Shopping
                  </Link>
                </li>
                <li>
                  <Link to={"/blog"} class="text-light footer">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link to={"/blog"} class="text-light footer">
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link to={"/blog"} class="text-light footer">
                    WebLog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <h5 class="ms-3 text-light">Useful Links</h5>
            <div>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <Link to={"/blog"} class="text-light footer">
                    Online Shopping
                  </Link>
                </li>
                <li>
                  <Link to={"/blog"} class="text-light footer">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link to={"/blog"} class="text-light footer">
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link to={"/blog"} class="text-light footer">
                    WebLog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <h5 class="ms-3 text-light text-center">Follow Us</h5>
            <div className="row">
              <div className="col-sm-3">
                <a href="https://www.facebook.com">
                  <FaFacebook
                    className="text-light"
                    style={{ height: "30px", width: "30px" }}
                  />
                </a>
              </div>
              <div className="col-sm-3">
                <a href="https://x.com">
                  <FaTwitter
                    className="text-light"
                    style={{ height: "30px", width: "30px" }}
                  />
                </a>
              </div>
              <div className="col-sm-3">
                <a href="https://instagram.com">
                  <FaInstagramSquare
                    className="text-light"
                    style={{ height: "30px", width: "30px" }}
                  />
                </a>
              </div>

              <div className="col-sm-3">
                <a href="https://linkedin.com">
                  <FaLinkedin
                    className="text-light"
                    style={{ height: "30px", width: "30px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End  */}
    </div>
  );
};

export default Layout;
