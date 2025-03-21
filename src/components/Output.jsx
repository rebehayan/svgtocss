import React from "react";
import OutputCode from "./OutputCode";
import OutputCSS from "./OutputCSS";

export default function Output({ result }) {
  return (
    <>
      <h2>CSS</h2>
      <OutputCode result={result} />
      <h2>background-image</h2>
      <OutputCSS result={result} />
    </>
  );
}
