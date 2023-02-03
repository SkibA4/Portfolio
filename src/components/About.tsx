import { FunctionComponent } from "react";
import "../styles/About.scss";
import AboutImage from "./../assets/profile.png";
import CV from "./../assets/cv.pdf";
import Info from "./Info";

const About: FunctionComponent = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">
        Let's get to know each other better &#x1F603;
      </span>

      <div className="about__container container grid">
        <img src={AboutImage} alt="About" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam natus
            omnis, quidem optio quibusdam quis asperiores harum voluptate
            temporibus fugit repellat! Nostrum magnam obcaecati commodi
            architecto, sed iste repellendus quam!
          </p>

          <a download="" href={CV} className="button button--flex">
            Download CV
            <i className="uil uil-file-download-alt about__download"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
