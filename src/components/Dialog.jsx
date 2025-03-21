import React from "react";

export default function Dialog({ ref, children }) {
  return (
    <dialog className="dialog" ref={ref}>
      {children}
      <form method="dialog">
        <button type="submit" className="btn-confirm">
          확인
        </button>
      </form>
    </dialog>
  );
}
