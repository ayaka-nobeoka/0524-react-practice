function Count({ count, setCount }) {
  return (
    <>
      <h1>カウントします！</h1>
      <button onClick={() => setCount(count + 1)}>増える</button>
      <button onClick={() => setCount(count - 1)}>減る</button>
    </>
  );
}

export default Count;
