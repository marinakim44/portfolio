import React from "react";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import { useNavigate } from "react-router-dom";

type NavButtonsProps = {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

export default function NavButtons({ active, setActive }: NavButtonsProps) {
  const navigate = useNavigate();

  return (
    <div className="w-11/12 mt-10 max-w-3xl min-w-80 flex justify-between">
      <button
        onClick={() =>
          active === "SUMMARY"
            ? navigate(-1)
            : active === "EDUCATION"
            ? setActive("SUMMARY")
            : active === "EXPERIENCE"
            ? setActive("EDUCATION")
            : active === "PROJECTS"
            ? setActive("EXPERIENCE")
            : active === "SKILLS"
            ? setActive("PROJECTS")
            : active === "MIND MAP"
            ? setActive("SKILLS")
            : active === "CONTACTS"
            ? setActive("MIND MAP")
            : ""
        }
        className="bg-white opacity-25 px-10 py-3 rounded flex justify-center gap-3"
      >
        <FastRewindIcon />
        BACK
      </button>
      {active !== "MAP" && (
        <button
          onClick={() =>
            setActive(
              active === "SUMMARY"
                ? "EDUCATION"
                : active === "EDUCATION"
                ? "EXPERIENCE"
                : active === "EXPERIENCE"
                ? "PROJECTS"
                : active === "PROJECTS"
                ? "SKILLS"
                : active === "SKILLS"
                ? "MIND MAP"
                : active === "MIND MAP"
                ? "CONTACTS"
                : ""
            )
          }
          className="bg-white opacity-25 px-10 py-3 rounded  flex justify-center gap-3"
        >
          NEXT
          <FastForwardIcon />
        </button>
      )}
    </div>
  );
}
