import React, { useRef } from "react";
import { clipboard } from "../utils/clipboard";
import Toast from "./Toast";
import Dialog from "./Dialog";

export default function OutputCode({ result }) {
  const toastRef = useRef();
  const dialogRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!result) {
      dialogRef.current.showModal();
      return;
    }
    clipboard(result).then(() => {
      toastRef.current.show();
      setTimeout(() => {
        toastRef.current.close();
      }, 1000);
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="output">
        <textarea readOnly value={result} placeholder="변환코드"></textarea>
        <button type="submit">복사하기</button>
      </form>
      <Toast ref={toastRef}>복사되었습니다.</Toast>
      <Dialog ref={dialogRef}>복사할 코드가 없습니다.</Dialog>
    </>
  );
}
