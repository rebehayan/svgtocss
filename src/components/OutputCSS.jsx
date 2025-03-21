import React, { useEffect, useRef, useState } from "react";
import { clipboard } from "../utils/clipboard";
import Toast from "./Toast";
import Dialog from "./Dialog";

export default function OutputCSS({ result, id }) {
  const [changeCSS, setChangeCSS] = useState("");
  const toastRef = useRef();
  const dialogRef = useRef();

  useEffect(() => {
    if (!result) {
      return;
    }
    setChangeCSS(`background-image:url("${result}");`);
  }, [result]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!result) {
      dialogRef.current.showModal();
      return;
    }
    clipboard(changeCSS).then(() => {
      toastRef.current.show();
      setTimeout(() => {
        toastRef.current.close();
      }, 1000);
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="output">
        <textarea readOnly value={changeCSS} placeholder="CSS Background" id={id}></textarea>
        <button type="submit" className="btn-secondary">
          복사
        </button>
      </form>
      <Toast ref={toastRef}>복사되었습니다.</Toast>
      <Dialog ref={dialogRef}>복사할 코드가 없습니다.</Dialog>
    </>
  );
}
