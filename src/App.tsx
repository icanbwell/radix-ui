import "./App.css";
import "../styled-system/styles.css";
import { Button } from "./components/Button/Button";
import { Select } from "./components/Select/Select";
import { useState } from "react";

const options = [
  { value: "apple", label: "Apple 🍎" },
  { value: "banana", label: "Banana 🍌" },
  { value: "grape", label: "Grape 🍇" },
];

function App() {
  const [fruit, setFruit] = useState<string | undefined>();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <h1>radix ui</h1>
      <Button visual="outline" size="sm">
        Secondary button
      </Button>
      <Button visual="solid" size="sm">
        Solid button
      </Button>

      <Button visual="outline" size="sm">
        Outline button
      </Button>
      <Button asChild size="lg">
        <a href="/about">About Us</a>
      </Button>
      <div style={{ padding: 20 }}>
        <Select
          label="Pick a fruit"
          options={options}
          value={fruit}
          onChange={setFruit}
          placeholder="Choose your favorite"
        />
        <p>Selected: {fruit}</p>
      </div>
    </div>
  );
}

export default App;
