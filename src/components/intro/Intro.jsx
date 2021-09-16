import { init } from "ityped";
import { useEffect, useRef } from "react";
import "./intro.scss";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ["Programmer", "Developer", "Designer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img alt="man" src="assets/mamad.jpg" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi Guys! I'm</h2>
          <h1>Muhammad Zanganeh</h1>
          <h3>
            Front End <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img alt="" src="assets/down.png" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
