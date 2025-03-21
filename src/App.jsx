import { useState } from "react";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {
  const [isResult, setIsResult] = useState("");
  return (
    <>
      <header>SVG to CSS</header>
      <main>
        <Input onResult={(value) => setIsResult(value)} />
        <div>&gt;</div>
        <div>
          <Output result={isResult} />
        </div>
      </main>
      <footer>@2025. copy Rebehayan</footer>
    </>
  );
}

export default App;
