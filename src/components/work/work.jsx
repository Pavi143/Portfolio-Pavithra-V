import React from "react";
import "./work.css";
import IMG1 from "../../assets/bosch.jpeg";
import IMG2 from "../../assets/club.jpeg";
import IMG3 from "../../assets/trust.jpeg";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Bosch Software Global Technologies",
    role: "Project Trainee",
    website: "https://www.bosch-softwaretechnologies.com/en/our-company/about-us/our-manifesto/",
    demo: [
        "Led front end and back-end tasks in the Tools Team, focusing on Qt application development.",
        "Designed a dynamic user interface for the FlashGUI Common Codebase project.",
        "Applied skills to integrate software seamlessly with specialised hardware systems."
      ]
  },
  {
    id: 2,
    image: IMG2,
    title: "Coding Club GCT",
    website: "https://codingclubgct.in/",
    role: "Executive Member",
    demo: [
        "Maintainer and developer advocate of most of the projects and applications developed within the club.",
        "Prolific writer of blog content highlighting and promoting club projects and initiatives."
        ]
  },
  {
    id: 3,
    image: IMG3,
    title: "94GCTians Trust",
    website: "https://94gctianstrust.org/",
    role: "Trust member",
    demo: [
      "Member of 94GCTians Trust, engaged in various club activities.",
      "Participated in and conducted events like Trust Annual Function, Junior Meet, and Senior Farewell.",
      "Acted as a Trust Executive, participating and organizing Trust competitions."
      ]
  },

];

const Work = () => {
  return (
    <section id="portfolio">
      <h5>My Work Experience</h5>
      <h2>Experience</h2>
      <div
        className="container 
      portfolio__container"
      >
        {data.map(({ id, image, title, role, website, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <p className="btn btn-primary"
                  >{role}</p>
                <a href={website} className="btn">
                  Website
                </a>
            </div>
              <div className="portfolio__item-description">
                    {demo.map((point, index) => (
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

export default Work;
