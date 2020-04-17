import React, { useState, useEffect, useRef } from "react";

function FadeInSections(props) {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef();

  useEffect(() => {
    let refCurrent = aboutRef.current;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, options);

    console.log("effect about");
    observer.observe(aboutRef.current);
    return () => observer.unobserve(refCurrent);
  }, []);

  return (
    <div
      ref={aboutRef}
      style={{ backgroundColor: isVisible ? "green" : "white" }}
    >
      {props.children}
    </div>
  );
}

export default FadeInSections;
