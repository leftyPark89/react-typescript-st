import {useCounter} from "../../../context/counter/useCounter.ts";

export default function CountDisplay() {
  const {count} = useCounter()
  return (
    <>
      <h1>Count : {count}</h1>
    </>
  );
};