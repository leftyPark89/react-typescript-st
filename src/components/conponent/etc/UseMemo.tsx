import {useMemo, useState} from "react";

const initialItems = new Array(29_999_9999).fill(0).map((_, i) => {
  return {
    id: i,
    selected: i === 29_999_9998,
  }
});

export default function UseMemo() {
  const [count, setCount] = useState(0);

  const selectItems = useMemo(() =>
      initialItems.find((item) =>
        item.selected),
    [count]);

  return (
    <>
      <h1>Count : {count} </h1>
      <button onClick={() => setCount(count => count + 1)}>
        increment
      </button>
      <p>{selectItems?.id}</p>
    </>
  );
};