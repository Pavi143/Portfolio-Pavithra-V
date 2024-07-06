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
    description: [
      "Superheaded the redesigning of our club theme palette for both light mode and dark mode eventually moved all existing web applications to a monorepo architecture.",
      "The monorepo consists of 4 apps and one package, out of which I have developed 2 applications individually.",
      "Developed homepage application for our club and gallery application to post memories captured in each event.",
       ]
  },
  {
    id: 2,
    image: IMG2,
    title: "A2A Point Website ",
    github: "https://github.com/useEffects/a2apoint?tab=readme-ov-file#project-report",
    demo: "https://a2apoint.com/",
    description: [
      "Superheaded the redesigning of our club theme palette for both light mode and dark mode eventually moved all existing web applications to a monorepo architecture.",
      "The monorepo consists of 4 apps and one package, out of which I have developed 2 applications individually.",
      "Developed homepage application for our club and gallery application to post memories captured in each event.",
       ]

  },
  {
    id: 3,
    image: IMG3,
    title: "Portfolio",
    github: "https://github.com/Pavi143/Portfolio-Pavithra-V",
    demo: "pavithra.tech",
    description:  [
      "Portfolio website developed with TypeScript, Next.js, and deployed on Vercel.",
      "Implemented file hosting feature to centralize certificates, resume, and other documents for efficient access and presentation."
    ]
  },
  {
    id: 4,
    image: IMG4,
    title: "Design Patterns",
    github: "https://github.com/coding-club-gct/design-patterns",
    demo: "https://github.com/coding-club-gct/design-patterns/blob/main/README.md",
    description:  [
      "Documented a comprehensive blog series detailing my journey to master 11 different design patterns.",
      "Strengthened my object-oriented programming (OOPS) concepts through practical application and in-depth exploration."
    ]
  },
  {
    id: 5,
    image: IMG5,
    title: "SQLite Clone",
    github: "https://github.com/coding-club-gct/sqlite-clone",
    demo: "https://github.com/coding-club-gct/sqlite-clone",
    description: [
      "Developed CLI database management system to gain expertise in Python, Operating Systems concepts like paging, and data structures like B-Tree.",
      "Implemented data persistence with insert and read functionalities."
    ]
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
        {data.map(({ id, image, title, github, demo, description }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} style={{ width: '300px', height: '500px', objectFit: 'contain' }}   />
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
              <div className="portfolio__item-description">
                    {description.map((point, index) => (
                        <p key={index}>{point}</p>
                    ))}
                </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
