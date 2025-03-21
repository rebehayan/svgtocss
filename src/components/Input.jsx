import React, { useRef, useState } from "react";
import Dialog from "./Dialog";

export default function Input({ onResult }) {
  const [isValue, setIsValue] = useState("");
  const dialogRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValue.includes("<svg")) {
      dialogRef.current.showModal();
      return;
    }
    const output = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(isValue)}`;
    onResult(output);
  };

  return (
    <div>
      <h2>SVG</h2>
      <form onSubmit={handleSubmit} className="input">
        <textarea required value={isValue} onChange={(e) => setIsValue(e.target.value.replace(/\n/g, " "))}></textarea>
        <button type="submit">변환</button>
      </form>
      <Dialog ref={dialogRef}>정상적인 SVG코드를 넣어주세요.</Dialog>
    </div>
  );
}
