import React, { Fragment, useState, useRef, useEffect } from "react";
import Chart from "../components/BubbleChart";
import "./About.scss";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef();

  useEffect(() => {
    let refCurrent = aboutRef.current;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, options);
    observer.observe(aboutRef.current);
    return () => observer.unobserve(refCurrent);
  }, []);

  return (
    <Fragment>
      <section ref={aboutRef} className="about">
        <section className={isVisible ? "about-bio-animated" : "about-bio"}>
          <h2>About</h2>
          <p>
            Software Developer with a passion for creating performant,
            user-centric, scalable and responsive applications. Always
            interested in learning, experimenting and implementing new
            technologies.
          </p>
          <p>
            Collaboration, organization and communication are some of my skills
            that will help any company or team tackle and solve an array of
            problems. Additionally, I bring strong problem-solving skills that
            have enabled me to find creative and innovative solutions to a
            variety of problems. Passionate about learning, sharing and
            implementing new technologies that can have a positive impact on the
            success of the team and company.
          </p>
        </section>
        <section className={isVisible ? "about-chart-animated" : "about-chart"}>
          <h2>Technical Skills</h2>
          <div>
            <Chart />
          </div>
        </section>
      </section>
    </Fragment>
  );
}

export default About;
