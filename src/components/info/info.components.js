import React from "react";
import Avatar from "../../images/AvatarMaker.png";

const Info = () => (
  <div>
    <img className="avatar1" src={Avatar} alt="" />
    <div className="name">Laura Smith</div>
    <div className="job">Frontend developer</div>
    <div className="website">lsmith.com</div>
    <div className="buttons">
      <button className="button">Email</button>
      <button className="button">Linkedin</button>
    </div>
  </div>
);

export default Info;
