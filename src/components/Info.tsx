import React, { FunctionComponent } from "react";

const Info: FunctionComponent = () => {
  return (
    <div className="about__info grid">
      <div className="about__tile">
        <i className="uil uil-graduation-cap"></i>
      </div>

      <div className="about__tile">
        <i className="uil uil-users-alt"></i>
      </div>

      <div className="about__tile">
        <i className="uil uil-bolt"></i>
      </div>
    </div>
  );
};

export default Info;
