import TodoList from "./components/conponent/TodoApp.tsx";
import CountApp from "./components/conponent/sideEffect/CountApp.tsx";
import {useCallback, useState} from "react";
import UseMemo from "./components/conponent/etc/UseMemo.tsx";
import TestApp from "./components/conponent/etc/TestApp.tsx";


export default function App() {

  return (
    <>
      <TestApp />
      {/*<UseMemo/>*/}
      {/*<TodoList></TodoList>*/}
      {/*<CountApp></CountApp>*/}
    </>
  );
};