import {createContext} from "react";

type CounterContextType = {
  count: number,
}
type CounterContextTypeAction = {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}
export const CounterContext = createContext<CounterContextType | null>(null);
export const CounterContextAction = createContext<CounterContextTypeAction | null>(null);