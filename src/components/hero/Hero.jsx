import React, { useRef, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import gsap from "gsap";

const Hero = () => {
  const itemsRef = useRef(null);

  useEffect(() => {
    const items = itemsRef.current.children;

    gsap.set(items, { autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { delay: "0.5", ease: "power2.inOut" } });

    tl.fromTo(items, { y: "-=30" }, { duration: 1, autoAlpha: 1, y: "0", stagger: 0.1 });
  }, []);

  return (
    <>
      <section className="hero" id="hero" ref={itemsRef}>
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
