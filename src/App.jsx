import { useState } from "react";
import Input from "./components/Input";
import Output from "./components/Output";
import logo from "./assets/logo.png";

function App() {
  const [isResult, setIsResult] = useState("");
  return (
    <>
      <header>
        <h1 className="logo">
          <img src={logo} alt="" />
          SVG to CSS Generator
        </h1>
      </header>
      <main>
        <Input onResult={(value) => setIsResult(value)} />
        <div className="division"></div>
        <div>
          <Output result={isResult} />
        </div>
      </main>
      <footer className="footer">
        &copy; 2025 Rebehayan
        <nav>
          <a href="https://github.com/rebehayan/svgtocss" target="_blank" className="new">
            Github
          </a>
          <a href="https://portfolio-eight-phi-27.vercel.app/" target="_blank" className="new">
            About
          </a>
        </nav>
      </footer>
    </>
  );
}

export default App;
