import React, { PropsWithChildren } from "react";

export default function Wrapper(props: PropsWithChildren) {
  return (
    <div
      className="bg-slate-800 w-11/12 max-w-3xl min-w-80 p-10 shadow-2xl rounded"
      style={{ minHeight: "50%" }}
    >
      {props.children}
    </div>
  );
}
