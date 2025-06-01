import { useState } from "react";
import "./App.css";
import Count from "./count";

function App() {
  const [count, setCount] = useState(0);
  const [names, setNames] = useState(["ももこ", "あやか"]);

  return (
    <>
      <Count count={count} setCount={setCount} />
      <div>{count}</div>

      <h1>お名前リスト</h1>
      <ul>
        {names.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => setNames([...names, "新しい名前"])}>
        名前を追加
      </button>
    </>
  );
}

export default App;
