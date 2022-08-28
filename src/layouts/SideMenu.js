import "../style/sideMenu.scss";
function SideMenu({ className }) {
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
            <li>
              <b className="bg-whitesmoke-hovered text-muted cursor-pointer br-5px font-style-paragraph">
                Colors
              </b>
            </li>
            <li>
              <b className="bg-whitesmoke-hovered text-muted cursor-pointer br-5px font-style-paragraph">
                Typography
              </b>
            </li>
            <li>
              <b className="bg-whitesmoke-hovered text-muted cursor-pointer br-5px font-style-paragraph">
                Space
              </b>
            </li>
            <li>
              <b className="bg-whitesmoke-hovered text-muted cursor-pointer br-5px font-style-paragraph active">
                Buttons
              </b>
            </li>
            <li>
              <b className="bg-whitesmoke-hovered text-muted cursor-pointer br-5px font-style-paragraph">
                Inputs
              </b>
            </li>
            <li>
              <b className="bg-whitesmoke-hovered text-muted cursor-pointer br-5px font-style-paragraph">
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
