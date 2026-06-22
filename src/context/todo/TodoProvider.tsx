import { useEffect, useMemo, useState} from "react";
import {TodoContext, TodoContextAction} from "./TodoContext.ts";
import {v4 as uuidv4} from "uuid";


export default function TodoProvider({
                                       children
                                     }: {
  children: React.ReactNode;
}) {
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("TODO_LIST") || "[]")
  );

  // 할일 추가
  const addTodo = (text: string) => {
    setTodos((todos) => [
      ...todos,
      {
        // id: Date.now(),
        id: uuidv4(),
        text,
        completed: false,
      }
    ])
  };

  // 완료 토글
  const chkToggle = (id: string) => {
    setTodos((todos) => (
      todos.map((todo) => (
        todo.id === id
          ? {...todo, completed: !todo.completed}
          : todo
      ))
    ))
  }

  // 삭제 버튼
  const deleteTodo = (id: string) => {
    setTodos((todos) => (
      todos.filter((todo) => (todo.id != id))
    ))
  }

  // 수정 버튼
  const modifyBrn = (id: string, text: string) => {
    setTodos((todos) => (
      todos.map((todo) => (
        todo.id === id
          ? {...todo, text}
          : todo
      ))
    ));
  }

  useEffect(() => {
    localStorage.setItem("TODO_LIST", JSON.stringify(todos));
  }, [todos]);

  const memoization = useMemo(
    () => ({
      addTodo, chkToggle, deleteTodo, modifyBrn
    }), []);

  return (
    <>
      <TodoContextAction value={memoization}>
        <TodoContext value={{todos}}>{children}</TodoContext>
      </TodoContextAction>
    </>
  );
};