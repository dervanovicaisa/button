import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/sideMenu.scss";
function SideMenu({ className }) {
  const [active, setActive] = useState();
  return (
    <div
      className={`mainSideNav body h-100 position-fixed  bg-white box-shadow ${className}`}
    >
      <div className="container">
        <div className="header logo padding-auto text-center">
          <b>
            <span className="text-orange">Dev</span>challanges.io
          </b>
        </div>
        <div className="links">
          <ul className="list-style-none line-height-3em p-0">
            <li onClick={() => setActive("colors")}>
              <b
                className={`bg-whitesmoke-hovered text-muted cursor-pointer br-5px font-style-paragraph ${
                  active == "colors" ? "active" : ""
                }`}
              >
                Colors
              </b>
            </li>
            <li onClick={() => setActive("typography")}>
              <b
                className={`bg-whitesmoke-hovered text-muted cursor-pointer br-5px font-style-paragraph ${
                  active == "typography" ? "active" : ""
                }`}
              >
                Typography
              </b>
            </li>
            <li onClick={() => setActive("space")}>
              <b
                className={`bg-whitesmoke-hovered text-muted cursor-pointer br-5px font-style-paragraph ${
                  active == "space" ? "active" : ""
                }`}
              >
                Space
              </b>
            </li>
            <li onClick={() => setActive("buttons")}>
              <Link to="/button">
                <b
                  className={`bg-whitesmoke-hovered text-muted cursor-pointer br-5px font-style-paragraph ${
                    active == "buttons" ? "active" : ""
                  }`}
                >
                  Buttons
                </b>
              </Link>
            </li>
            <li onClick={() => setActive("inputs")}>
              <Link to="/input">
                <b
                  className={`bg-whitesmoke-hovered text-muted cursor-pointer br-5px font-style-paragraph ${
                    active == "inputs" ? "active" : ""
                  }`}
                >
                  Inputs
                </b>
              </Link>
            </li>
            <li onClick={() => setActive("grids")}>
              <b
                className={`bg-whitesmoke-hovered text-muted cursor-pointer br-5px font-style-paragraph ${
                  active == "grids" ? "active" : ""
                }`}
              >
                Grids
              </b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
