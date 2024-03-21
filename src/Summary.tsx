import React from "react";
import Wrapper from "./components/Wrapper";

export default function Summary() {
  return (
    <Wrapper>
      <div className="grid grid-cols-4 gap-5">
        <div>
          <img
            alt="marina-kim"
            src={require("./images/me.png")}
            className="object-cover w-56 border-2 rounded-full photo"
          />
        </div>
        <div className="col-span-3 row-span-2">
          <ul className="flex flex-col gap-1">
            <li>
              <span className="text-white font-bold">Name:</span>{" "}
              <span className="text-white italic">Marina Kim</span>
            </li>
            <li>
              <span className="text-white font-bold">Title:</span>{" "}
              <span className="text-white italic">
                Full Stack Web and Mobile Developer
              </span>
            </li>
            <li>
              <span className="text-white font-bold">
                Commercial development experience:
              </span>{" "}
              <span className="text-white italic">3+ years</span>
            </li>
            <li>
              <span className="text-white font-bold">
                Current residence/right to work:
              </span>{" "}
              <span className="text-white italic">London, UK</span>
            </li>
            <li>
              <span className="text-white font-bold">Main tech stack:</span>{" "}
              <span className="text-white italic">
                <div className="flex gap-1">
                  {[
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "React Native",
                    "Node.js",
                  ].map((x) => {
                    return (
                      <p
                        key={x}
                        className="bg-teal-500 p-1 rounded text-xs skill"
                      >
                        {x}
                      </p>
                    );
                  })}
                </div>
              </span>
            </li>
          </ul>
        </div>
        <div className="summary bg-slate-800 p-5 col-span-4 rounded border-2">
          <p className="text-white text-sm">
            Hi, I'm Marina. <br />
            Fun fact about me: I'm 50% korean, 25% kazakh and 25% tatar born and
            raised in Kazakhstan with Russian name and Russian as my native
            language currently in UK 🤯.
            <br />
            I'm passionate about coding, continuous self-improvement and staying
            up-to-date with modern technologies. Having more than 4 years of
            managerial experience, grew to be a self-starter aiming to bring an
            immediate value to the table. In free time enjoy baking pies, making
            cakes, crocheting, playing musical instruments and building a tech
            community (currently 20k+ followers) by making free educational
            content on YouTube, Instagram and TikTok.
          </p>
        </div>
        <div className="rounded col-span-4 grid grid-cols-4 gap-5">
          {["EDUCATION", "EXPERIENCE", "PROJECTS", "SKILLS"].map((x) => {
            return (
              <button
                key={x}
                className="nav-btn border-2 hover:pointer bg-gradient-to-r from-blue-500 to-teal-500 text-white text-center rounded p-1"
              >
                {x}
              </button>
            );
          })}
        </div>
        <div className="map-btn bg-pink-500 text-white w-full col-span-4 text-center p-1 rounded border-2">
          <p>EXPLORE MIND MAP</p>
        </div>
      </div>
    </Wrapper>
  );
}
