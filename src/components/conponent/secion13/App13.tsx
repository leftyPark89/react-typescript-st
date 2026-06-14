import Count from "./Count.tsx";
import CountOutside from "./CountOutside.tsx";
import CounterProvider from "../../../context/counter/CounterProvider.tsx";


export default function App13() {


  return (
    <>
      <CounterProvider>
        <Count></Count>
        <CountOutside></CountOutside>
      </CounterProvider>
    </>
  );
};