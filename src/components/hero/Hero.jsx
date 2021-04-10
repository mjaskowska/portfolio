import React, { useRef, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import gsap from "gsap";

const Hero = () => {
  const wrapper = useRef(null);

  useEffect(() => {
    const items = wrapper.current.children;

    gsap.set(items, { autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    tl.fromTo(items, { y: "-+10" }, { duration: 1, autoAlpha: 1, y: "+=10" });
  }, []);

  return (
    <>
      <section className="hero" id="hero" ref={wrapper}>
        <p>Hello, I'm</p>
        <h1>Magda Jaskowska</h1>
        <p>I'm a Self-Taught Front-end Developer, fascinated by the web.</p>
        <AnchorLink className="orange-btn" offset={() => 50} href="#04">
          Contact me
        </AnchorLink>
      </section>
    </>
  );
};

export default Hero;
