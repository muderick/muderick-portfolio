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
  {
    id: 4,
    image: IMG4,
    title: "Line Drawing Algorithms",
    github: "https://github.com/muderick/Line-Drawing-Algorithms",
  },
  {
    id: 5,
    image: IMG5,
    title: "Blockchain Anti Money Laundering",
    github: "https://github.com/muderick/Anti-Money-Laundering-with-Blockchain",
  },
];

const collaborativeProjects = [
  {
    id: 2,
    image: IMG2,
    title: "PHP Meeting Room WebApp",
    github: "https://github.com/muderick/Meeting-room-webapp",
    contributor: {
      name: "Abel Biwott",
      role: "UI/UX Designer",
      image: IMG6,
      url: "https://www.abelbiwott.com"
    }
  },
  {
    id: 3,
    image: IMG3,
    title: "PHP Bill Estimator",
    github: "https://github.com/muderick/Bill-Estimator",
    contributor: {
      name: "Abel Biwott",
      role: "UI/UX Designer",
      image: IMG6,
      url: "https://www.abelbiwott.com"
    }
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">
        {/* Regular projects */}
        {data.map(({ id, image, title, github }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={image} alt={title} />
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
        ))}

        {/* Collaborative projects */}
        {collaborativeProjects.map(({ id, image, title, github, contributor }) => (
          <article key={id} className="portfolio_item-cont">
            <div className="portfolio_item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_btns">
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
              <div className="cont-btn">
                <div className="btn-desktop">Contributors:</div>
                <div className="btn-mobile">
                  <a href={contributor.url}>
                    <small>Contributor: {contributor.name}</small>
                  </a>
                </div>
                <div className="cont-overlay">
                  <div className="cont-body">
                    <a
                      href={contributor.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="cont-img">
                        <img src={contributor.image} alt={contributor.name} />
                      </div>
                      <h3>{contributor.name}</h3>
                      <h4>
                        <small>{contributor.role}</small>
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;