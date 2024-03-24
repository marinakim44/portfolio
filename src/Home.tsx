import NavBar from "./components/NavBar";
import NavButtons from "./components/NavButtons";
import React, { useState } from "react";
import Summary from "./Summary";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Map from "./Map";
import Contacts from "./Contacts";

export default function Home() {
  const [activeBar, setActiveBar] = useState("SUMMARY");
  const [color1, setColor1] = useState("#FF7ED4");
  const [color2, setColor2] = useState("#7Aff95");

  return (
    <div
      className="font-mono h-screen flex flex-col justify-center items-center"
      style={{ background: `linear-gradient(to right, ${color1},${color2})` }}
    >
      <div className="w-1/6 text-center flex justify-evenly">
        <input
          type="color"
          value={color1}
          onChange={(e) => setColor1(e.target.value)}
        />
        <input
          type="color"
          value={color2}
          onChange={(e) => setColor2(e.target.value)}
        />
      </div>
      <NavBar active={activeBar} setActive={setActiveBar} />
      {activeBar === "SUMMARY" ? (
        <Summary active={activeBar} setActive={setActiveBar} />
      ) : activeBar === "EDUCATION" ? (
        <Education />
      ) : activeBar === "EXPERIENCE" ? (
        <Experience />
      ) : activeBar === "PROJECTS" ? (
        <Projects />
      ) : activeBar === "SKILLS" ? (
        <Skills />
      ) : activeBar === "MIND MAP" ? (
        <Map />
      ) : activeBar === "CONTACTS" ? (
        <Contacts />
      ) : (
        ""
      )}

      <NavButtons active={activeBar} setActive={setActiveBar} />
      <footer className="block fixed bottom-0 mb-10 text-white">
        2024 by Marina Kim
      </footer>
    </div>
  );
}
