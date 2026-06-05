import TodoList from "./components/conponent/TodoApp.tsx";
import CountApp from "./components/conponent/sideEffect/CountApp.tsx";
import {useCallback, useState} from "react";
import UseMemo from "./components/conponent/etc/UseMemo.tsx";


export default function App() {

  return (
    <>
      <UseMemo></UseMemo>
      {/*<TodoList></TodoList>*/}
      {/*<CountApp></CountApp>*/}
    </>
  );
};