import React from "react";
import Wrapper from "./components/Wrapper";
import "./App.css";
import { projects } from "./utils/projects";

export default function Projects() {
  return (
    <Wrapper>
      <div className="grid grid-cols-7 gap-3 text-white text-xs">
        <p className="font-bold border-2 flex items-center justify-center">
          title
        </p>
        <p className="col-span-2 font-bold border-2 flex items-center justify-center text-center">
          description
        </p>
        <p className="col-span-2 font-bold border-2 flex items-center justify-center text-center">
          personal contribution
        </p>
        <p className="font-bold border-2 flex items-center justify-center text-center">
          tech stack
        </p>
        <p className="font-bold border-2 flex items-center justify-center text-center">
          link
        </p>

        {projects?.map((p, i) => {
          return (
            <div key={i} className="col-span-7 grid grid-cols-7 gap-3">
              <p className="project bg-gradient-to-r from-teal-500 to-pink-500 rounded-full p-3 flex justify-center items-center text-center">
                {p.title}
              </p>
              <p className="col-span-2">{p.description}</p>
              <p className="col-span-2">{p.contribution}</p>
              <p>{p.stack}</p>
              <a className="underline italic" href={p.link}>
                check it out
              </a>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
