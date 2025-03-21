import React from "react";

export default function Toast({ ref, children }) {
  return (
    <dialog className="toast" ref={ref}>
      {children}
    </dialog>
  );
}
