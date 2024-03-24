import React from "react";

type NavBarProps = {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

export default function NavBar({ active, setActive }: NavBarProps) {
  return (
    <div className="bg-white opacity-25 p-3 my-10 w-11/12 max-w-3xl min-w-80 flex justify-evenly items-center cursor-pointer">
      {[
        "SUMMARY",
        "EDUCATION",
        "EXPERIENCE",
        "PROJECTS",
        "SKILLS",
        "MIND MAP",
        "CONTACTS",
      ].map((x) => {
        return (
          <div key={x} onClick={() => setActive(x)}>
            <p
              className={`${
                x === active
                  ? "underline font-bold text-black text-lg"
                  : undefined
              }`}
            >
              {x}
            </p>
          </div>
        );
      })}
    </div>
  );
}
