import Count from "./Count.tsx";
import CountOutside from "./CountOutside.tsx";
import CounterProvider from "../../../context/counter/CounterProvider.tsx";
import ThemeProvider from "../../../context/theme/ThemeProvider.tsx";
import Theme from "./Theme.tsx";
import ThemeButton from "./ThemeButton.tsx";


export default function App13() {

  return (
    <>
      <ThemeProvider>
        <CounterProvider>
          <Count/>
          <CountOutside/>
          <Theme/>
          <ThemeButton />
        </CounterProvider>
      </ThemeProvider>
    </>
  );
};