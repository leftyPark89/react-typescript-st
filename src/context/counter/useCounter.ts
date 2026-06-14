import {CounterContext} from "./CounterContext.ts";
import {useContext} from "react";

export default function useCounter() {

  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter는 CounterProvider 안에서만 사용가능합니다");
  }
  return context;
};