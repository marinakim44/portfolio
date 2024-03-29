import React from "react";
import Wrapper from "./components/Wrapper";
import "./App.css";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Node.js",
    "Express.js",
    "Next.js",
    "Nginx",
    "Firebase",
    "GCP",
    "Azure",
    "MongoDB",
    "PostgreSQL",
    "Material UI",
    "Bootstrap",
    "Tailwind",
  ];
  return (
    <Wrapper>
      <div className="grid grid-cols-3 grid-rows-8 gap-3 h-full justify-center items-center text-center text-white text-sm">
        <div className="col-span-3 flex justify-center gap-5">
          <div className="bg-cyan-500 py-2 px-5 rounded">Front End</div>
          <div className="bg-yellow-500 py-2 px-5 rounded">Back End</div>
          <div className="bg-orange-500 py-2 px-5 rounded">Cloud</div>
          <div className="bg-emerald-500 py-2 px-5 rounded">Databases</div>
        </div>
        {skills.map((s) => (
          <p
            className={
              [
                "HTML",
                "CSS",
                "React",
                "React Native",
                "Material UI",
                "Bootstrap",
                "Tailwind",
              ].includes(s)
                ? "border-2 border-cyan-500 p-1 rounded skill"
                : ["Node.js", "Express.js", "Nginx", "Knex.js"].includes(s)
                ? "border-2 border-yellow-500 p-1 rounded skill"
                : ["MongoDB", "PostgreSQL"].includes(s)
                ? "border-2 border-emerald-500 p-1 rounded skill"
                : ["JavaScript", "TypeScript", "Next.js"].includes(s)
                ? "bg-gradient-to-r from-cyan-500 to-yellow-500 border-2 p-1 rounded skill"
                : ["Azure", "GCP"].includes(s)
                ? "border-2 border-emerald-500 p-1 rounded skill"
                : s === "Firebase"
                ? "bg-gradient-to-r from-orange-500 to-emerald-500 border-2 p-1 rounded skill"
                : undefined
            }
          >
            {s}
          </p>
        ))}
        <p className="col-span-3 text-left">
          Recently I'm also interested in Generative AI, experimenting with
          using OpenAI API in my projects, e.g. for embeddings and semantic
          search.
        </p>
      </div>
    </Wrapper>
  );
}
