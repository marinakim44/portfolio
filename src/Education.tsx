import React from "react";
import Wrapper from "./components/Wrapper";

export default function Education() {
  return (
    <Wrapper>
      <div className="grid grid-cols-5 gap-1 text-white">
        <div className="col-span-5 flex justify-center mb-10">
          <img
            alt="university-of-london"
            src={require("./images/uni.png")}
            className="h-14"
          />
        </div>
        <a
          href="https://www.london.ac.uk/"
          target="_blank"
          rel="noreferrer"
          className="text-white col-span-2 underline border-2 p-2"
        >
          University of London Internatinal Program (LSE academic program)
        </a>
        <p className="border-2 p-2">2015 - 2019</p>
        <p className="col-span-2 border-2 p-2">
          Graduate Diploma | Information Systems
        </p>
        <a
          href="https://www.london.ac.uk/"
          target="_blank"
          rel="noreferrer"
          className="text-white col-span-2 underline border-2 p-2"
        >
          University of London Internatinal Program (LSE academic program)
        </a>
        <p className="border-2 p-2">2008 - 2011</p>
        <p className="col-span-2 border-2 p-2">BSc | Finance and Banking</p>
      </div>
      <p className="text-white mt-10">
        I obtained both my higher education diplomas through distance learning
        while working full-time in Kazakhstan.
        <br />
        <br /> This is when I mastered self-motivation, self-discipline,
        learning agility and ability to study complcated topics by myself in
        short time frame.
      </p>
    </Wrapper>
  );
}
