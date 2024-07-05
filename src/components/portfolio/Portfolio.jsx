import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/codingclub.jpeg";
import IMG2 from "../../assets/a2a-point.jpeg";
import IMG3 from "../../assets/portfolio4.jpg";
import IMG4 from "../../assets/design-patterns.jpeg";
import IMG5 from "../../assets/portfolio1.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Coding Club GCT Website",
    github: "https://github.com/coding-club-gct/front-gate",
    demo: "https://codingclubgct.in/",
  },
  {
    id: 2,
    image: IMG2,
    title: "A2A Point Website ",
    github: "https://github.com/useEffects/a2apoint?tab=readme-ov-file#project-report",
    demo: "https://a2apoint.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Portfolio",
    github: "https://github.com/Pavi143/Portfolio-Pavithra-V",
    demo: "pavithra.tech",
  },
  {
    id: 4,
    image: IMG4,
    title: "Design Patterns",
    github: "https://github.com/coding-club-gct/design-patterns",
    demo: "https://github.com/coding-club-gct/design-patterns/blob/main/README.md",
  },
  {
    id: 5,
    image: IMG5,
    title: "SQLite Clone",
    github: "https://github.com/coding-club-gct/sqlite-clone",
    demo: "https://github.com/coding-club-gct/sqlite-clone",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div
        className="container 
      portfolio__container"
      >
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
