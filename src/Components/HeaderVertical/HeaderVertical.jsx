import "./HeaderVertical.css";
import React from "react";
import zen from "../../Asset/navBarVertical/zen.svg";
import natation from "../../Asset/navBarVertical/natation.svg";
import cyclisme from "../../Asset/navBarVertical/cyclisme.svg";
import muscu from "../../Asset/navBarVertical/muscu.svg";

/**
A component that displays a vertical navigation bar with icons for different sports activities.
@function HeaderVertical
@return {JSX.Element} A vertical navigation bar component.
*/
function HeaderVertical() {
  return (
    <div className="NavVertical">
      <div className="items">
        <div className="LinkIcon">
          <img className="imgNav" alt="logo" src={zen} />
          <img className="imgNav" alt="logo" src={natation} />
          <img className="imgNav" alt="logo" src={cyclisme} />
          <img className="imgNav" alt="logo" src={muscu} />
        </div>
      </div>
      <div className="items2">
        <div className="CopyRightContainer">
          <div className="CopyRight">
            <p className="HVT">Copiryght, SportSee 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderVertical;
