import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/vue-music-app.png";
import IMG2 from "../../assets/meeting-room.png";
import IMG3 from "../../assets/bill-estimator.png";
import IMG4 from "../../assets/Bresen.png";
import IMG5 from "../../assets/Aml.jpg";
import IMG6 from "../../assets/abelbiwott_80x80.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Vue Music App",
    github: "https://github.com/muderick/vue-music-app",
  },
  //   {
  //     id: 2,
  //     image: IMG2,
  //     title: "PHP Meeting Room WebApp",
  //     github: "https://github.com/muderick/Meeting-room-webapp",
  //   },
//   {
//     id: 3,
//     image: IMG3,
//     title: "PHP Bill Estimator",
//     github: "https://github.com/muderick/Bill-Estimator",
//   },
  {
    id: 4,
    image: IMG4,
    title: "Line Drawing Algorithms",
    github: "https://github.com/muderick/Line-Drawing-Algorithms",
  },
  {
    id: 5,
    image: IMG5,
    title: "Blockchain Anti Money Laundering ",
    github: "https://github.com/muderick/Anti-Money-Laundering-with-Blockchain",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github }) => {
          return (
            <>
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img style={{ height: "133.63px" }} src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    View on Github
                  </a>
                </div>
              </article>
            </>
          );
        })}

        <article className="portfolio_item-cont">
          <div className="portfolio_item-image">
            <img
              style={{ height: "133.63px" }}
              src={IMG2}
              alt="PHP Meeting Room WebApp"
            />
          </div>
          <h3>PHP Meeting Room WebApp</h3>
          <div className="portfolio_btns">
            <div className="portfolio_item-cta">
              <a
                href="https://github.com/muderick/Meeting-room-webapp"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                View on Github
              </a>
            </div>
            <div className="cont-btn">
              <div className="btn-desktop">Contributors :</div>
              <div className="btn-mobile">
                <a href="https://www.abelbiwott.com">
                  <small>
                    Contributor: Abel Biwott
                  </small>
                </a>
              </div>
              <div class="cont-overlay">
                <div class="cont-body">
                  <a
                    href="https://www.abelbiwott.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="cont-img">
                      <img
                        style={{ height: "80.63px" }}
                        src={IMG6}
                        alt="Abel Biwott"
                      />
                    </div>
                    <h3>Abel Biwott</h3>
                    <h4><small>UI/UX Designer</small></h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="portfolio_item-cont">
          <div className="portfolio_item-image">
            <img
              style={{ height: "133.63px" }}
              src={IMG3}
              alt="PHP Bill Estimator"
            />
          </div>
          <h3>PHP Bill Estimator</h3>
          <div className="portfolio_btns">
            <div className="portfolio_item-cta">
              <a
                href="https://github.com/muderick/Bill-Estimator"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                View on Github
              </a>
            </div>
            <div className="cont-btn">
              <div className="btn-desktop">Contributors :</div>
              <div className="btn-mobile">
                <a href="https://www.abelbiwott.com">
                  <small>
                    Contributor: Abel Biwott
                  </small>
                </a>
              </div>
              <div class="cont-overlay">
                <div class="cont-body">
                  <a
                    href="https://www.abelbiwott.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="cont-img">
                      <img
                        style={{ height: "80.63px" }}
                        src={IMG6}
                        alt="Abel Biwott"
                      />
                    </div>
                    <h3>Abel Biwott</h3>
                    <h4><small>UI/UX Designer</small></h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
