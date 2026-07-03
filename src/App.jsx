import { useEffect } from "react";
import Background from "./components/Background";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Story from "./components/Story";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  /* Progress bar */
  useEffect(() => {
    const bar = document.getElementById("progress-bar");
    const onScroll = () => {
      const pct =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      if (bar) bar.style.width = Math.min(pct, 100) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Global progress bar */}
      <div
        id="progress-bar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 2,
          width: 0,
          background: "linear-gradient(90deg,#D4A843,#F0C866)",
          zIndex: 9999,
          transition: "width .08s linear",
        }}
      />
      <Background />
      <Nav />
      <main>
        <Hero />
        <About />
        <Story />
        <Skills />
        <Projects />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
