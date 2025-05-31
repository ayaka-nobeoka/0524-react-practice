import { useState } from "react";
import "./App.css";
import NameCard from "./components/NameCard";

function App() {
  const [count, setCount] = useState(0);
  const [gender, setGender] = useState("すべて");
  //これは 「選ばれている状態」 を保存してる。

  const names = [
    { name: "ももこ", gender: "女" },
    { name: "さくら", gender: "女" },
    { name: "はまじ", gender: "男" },
    { name: "たかし", gender: "男" },
  ];
  const filteredNamas = names.filter((person) => {
    return gender === "すべて" || person.gender === gender;

    //.filter() のキモは「trueかfalseを分けること
    //genderが全てだったら”全て”それ以外はgenderを出すってこと？？？
  });

  const handlecount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handlecount}>＋</button>
      <div>{count}</div>

      <label>
        <input
          type="radio"
          value="すべて"
          checked={gender === "すべて"}
          onChange={(e) => setGender(e.target.value)}
        />
        すべて
      </label>

      <label>
        <input
          type="radio"
          value="女"
          checked={gender === "女"}
          onChange={(e) => setGender(e.target.value)}
        />
        女
      </label>

      <label>
        <input
          type="radio"
          value="男"
          checked={gender === "男"}
          onChange={(e) => setGender(e.target.value)}
        />
        男
      </label>

      <ul>
        {filteredNamas.map((person, index) => (
          <NameCard key={index} person={person} />
        ))}
      </ul>
    </>
  );
}

export default App;
