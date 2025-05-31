// import { useState } from 'react'
import "./App.css";
import NameItem from "./component/NameItem";

function App() {
  const names = ["momoko", "ayaka", "ibuki"];
  return (
    <>
      <ul>
        {names.map((name, index) => (
          <NameItem key={index} name={name} />
        ))}
      </ul>
    </>
  );
}

export default App;
