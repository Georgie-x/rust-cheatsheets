import { useState } from "react";
import rustMethods from "./data/rust_methods.json"

function App() {
  return (
    <div>
      <h1>Rust Cheatsheets</h1>
      <h2>Methods</h2>
      {rustMethods.map((item, index) => {
        const [open, setOpen] = useState(false);

        return (
          <div key={index}>
            <h3 onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}>
              {item.method}
            </h3>
            {open && (
              <>
                <p>{item.description}</p>
                <p>{item["input-type"]}</p>
                <p>{item["output-type"]}</p>
                <pre><code>{item.example}</code></pre>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default App;
