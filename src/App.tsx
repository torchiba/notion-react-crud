// src/App.tsx
import { useState } from "react";
import Button from "./components/atoms/Button";
import Heading from "./components/atoms/Heading";
import TextInput from "./components/atoms/TextInput";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <Heading>heading</Heading>
      <Button>hogehoge</Button>
      <TextInput
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default App;