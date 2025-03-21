import React, { useEffect, useState } from "react";

export default function OutputSCSS({ result }) {
  const [changeSCSS, setChangeSCSS] = useState(result);
  const regexFill = /fill%3D%22([^%22]+)%22/g;
  const regexStroke = /stroke%3D%22([^%22]+)%22/g;

  useEffect(() => {
    const matchesFill = [...result.matchAll(regexFill)].map((m) => m[1]);
    const colorObject = matchesFill.reduce((acc, color, index) => {
      acc[`fill${index + 1}`] = color;
      return acc;
    }, {});
    // const matchesStroke = [...result.matchAll(regexStroke)].map((m) => m[1]);
    // const colorObject2 = matchesStroke.reduce((acc, color, index) => {
    //   acc[`stroke${index + 1}`] = color;
    //   return acc;
    // }, {});

    console.log(colorObject);

    setChangeSCSS((prev) => `background-image:url(${prev});`);
  }, [result]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("복사");
  };
  return (
    <form onSubmit={handleSubmit} className="output">
      <textarea readOnly value={changeSCSS} placeholder="CSS"></textarea>
      <button type="submit">복사하기</button>
    </form>
  );
}
