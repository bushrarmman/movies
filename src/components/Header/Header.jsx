// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCalendar, faClock, faPlay } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <header>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="wrap-text">
            <h4>Movflx</h4>
            <h2>
              Unlimited <span>Movie</span>,<br></br>TVs Shows, &More.
            </h2>
            <div className="details">
              <ul>
                <li>
                  <span>pg 18</span>
                  <span>hd</span>
                </li>
                <li>
                  <span>romance,</span>
                  <span>drama</span>
                </li>
                <li>
                  <span><i className="fa-calender"></i>
                    2022
                  </span>
                  <span><i className="fa-clock"></i>
                    128 min
                  </span>
                </li>
              </ul>
            </div>
            <button> <i className="fa-paly"></i>watch now</button>
          </div>
        </div>
      </div>
    </div>
    </header>
  );
};

export default Header;
