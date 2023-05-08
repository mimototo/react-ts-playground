import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

export const Scroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("progress", {
      value: 100,
      scrollTrigger: {
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <>
      <progress
        className="fixed top-0 left-0 w-full h-2 border-none bg-transparent appearance-none progress-bar progress-value"
        max="100"
        value="0"
      ></progress>
      <nav>
        <h1>Dashbord</h1>
      </nav>
      <section></section>
      <section></section>
      <section></section>
    </>
  );
};
