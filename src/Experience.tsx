import React from "react";
import Wrapper from "./components/Wrapper";
import { jobs } from "./utils/jobs";

export default function Experience() {
  return (
    <Wrapper>
      <div className="grid grid-cols-6 text-white gap-3 text-xs">
        <p className="col-span-6 text-center font-bold mb-5 text-lg">
          3+ years of professional development experience (12 years overall
          experience in various industries and capacities)
        </p>

        {jobs?.map((j, i) => {
          return (
            <div key={i} className="col-span-6 grid grid-cols-6">
              <p className="col-span-2">
                <span className="font-bold underline">{j.title}</span>
                <br />
                {j.period}
                <br />
                {/* {j.company}
                <br /> */}
                {j.location}
              </p>
              <p className="col-span-4">{j.description}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
