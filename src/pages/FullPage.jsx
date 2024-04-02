import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

import TopNavbar from "components/Navbars/TopNavBar";
import IndexHeader from "components/Headers/IndexHeader.js";
import NewsContent from "./NewsContent";
import Documentation from "./Documentation";
import ContactUs from "./ContactUs";
import About from "./About";
import Event from "./Event";
import Result from "./Result";
import NotableBoxers from "./NotableBoxers";

const SectionWithAnimation = ({ children }) => {
  const [ref, inView] = useInView({ triggerOnce: false });

  const fadeInProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { tension: 100, friction: 10 },
  });

  return (
    <animated.div ref={ref} style={fadeInProps}>
      {children}
    </animated.div>
  );
};

const FullPage = () => {
  return (
    <>
      <TopNavbar />
      <IndexHeader />
      <div className="main">
        <SectionWithAnimation>
          <About />
        </SectionWithAnimation>
        <SectionWithAnimation>
          <NewsContent />
        </SectionWithAnimation>
        <SectionWithAnimation>
          <Event />
        </SectionWithAnimation>
        <SectionWithAnimation>
          <Result />
        </SectionWithAnimation>
        <SectionWithAnimation>
          <Documentation />
        </SectionWithAnimation>
        <SectionWithAnimation>
          <NotableBoxers />
        </SectionWithAnimation>
        <SectionWithAnimation>
          <ContactUs />
        </SectionWithAnimation>
      </div>
    </>
  );
};

export default FullPage;
