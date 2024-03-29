import React, { PropsWithChildren, useState } from "react";
import "./Window.css";
import { useNavigate } from "react-router-dom";

export default function Window(props: PropsWithChildren) {
  const navigate = useNavigate();
  const [isMinimized, setIsMinimized] = useState(false);

  const minimizeWindow = () => {
    console.log("minimize");
    setIsMinimized(true);
    Array.from(document.getElementsByTagName("body"))[0].classList.add(
      "minimized"
    );
  };
  const maximizeWindow = () => {
    console.log("maximize");
    setIsMinimized(false);
    Array.from(document.getElementsByTagName("body"))[0].classList.remove(
      "minimized"
    );
  };

  const handleClick = () => {
    if (isMinimized) {
      maximizeWindow();
    } else {
      console.log("window is already maximised");
    }
  };

  return (
    <>
      <div className="window" onClick={handleClick}>
        <nav className="window-controls">
          <div className="maximize">Marina Kim</div>
          <div className="flex gap-1">
            <div
              onClick={() => navigate("/portfolio")}
              className="border-2 h-7 w-7 bg-red-500 rounded-full"
            ></div>
            <div
              className="border-2 h-7 w-7 bg-yellow-500 rounded-full"
              onClick={minimizeWindow}
            ></div>
            <div className="border-2 h-7 w-7 bg-green-500 rounded-full"></div>
          </div>
        </nav>
        {props.children}
      </div>
      <div className="bg"></div>
    </>
  );
}
