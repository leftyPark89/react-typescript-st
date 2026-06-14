import { useMemo, useState} from "react";
import {CounterContext, CounterContextAction} from "./CounterContext.ts";

export default function CounterProvider({
  children,
                                        }:{
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1);
  }
  const decrement = () => {
    setCount(count => count - 1);
  }
  const reset = () => {
    setCount(0);
  }

  const memorization = useMemo(() => ({increment, decrement, reset}), []);
  return (
    <>
      <CounterContextAction value={memorization}>
      <CounterContext value={{count}}>
        {children}
      </CounterContext>
      </CounterContextAction>

    </>
  );
};