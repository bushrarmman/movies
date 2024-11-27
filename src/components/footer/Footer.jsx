import React from "react";
import "./footer.css";
import logo from "../../Assets/logo.png";
import payment from '../../Assets/card_img.png'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <img src={logo} alt="logo" />
          </div>
          <div className="colo-lg-9 col-md-9">
            <div className="side-footer">
              <div className="menu">
                <ul>
                  <li>
                    {" "}
                    <a href="#">home</a>
                  </li>
                  <li>
                    <a href="#">movie</a>
                  </li>
                  <li>
                    <a href="#">tv show</a>
                  </li>
                  <li>
                    <a href="#">pages</a>
                  </li>
                  <li>
                    <a href="#">pricing</a>
                  </li>
                </ul>
              </div>
              <div className="search">
                <input type="text" placeholder="Find Favorite Movies" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
            <div className="col-lg-9 col-md-9">
                <ul className="map">
                    <li><a href="#">faq</a></li>
                    <li><a href="#">help center</a></li>
                    <li><a href="#">terms of use</a></li>
                    <li><a href="#">privacy</a></li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-3">
                        <ul className="social">
                        </ul>
                    </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h5>
                    Copyright © 2024.
                    </h5>
                </div>
                <div className="col-lg-6">
                    <img src={payment} alt="" />
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
