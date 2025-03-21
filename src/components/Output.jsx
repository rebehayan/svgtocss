import React from "react";
import OutputCode from "./OutputCode";
import OutputCSS from "./OutputCSS";

export default function Output({ result }) {
  return (
    <>
      <h2>
        <label htmlFor="css">CSS</label>
      </h2>
      <OutputCode result={result} id="css" />
      <h2>
        <label htmlFor="bg">background-image</label>
      </h2>
      <OutputCSS result={result} id="bg" />
    </>
  );
}
