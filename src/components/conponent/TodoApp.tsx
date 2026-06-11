import TodoHeader from "./TodoHeader.tsx";
import TodoEditor from "./TodoEditor.tsx";
import TodoList from "./TodoList.tsx";
import {useCallback, useEffect, useState} from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>(JSON.parse(localStorage.getItem("TODO_LIST") || "[]"));
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
  const chkToggle = useCallback( (id: string) => {
    setTodos((todos) => (
      todos.map((todo) => (
        todo.id === id
          ? {...todo, completed: !todo.completed}
          : todo
      ))
    ))
  }, [])

  // 삭제 버튼
  const deleteTodo = useCallback((id: string) => {
    setTodos((todos) => (
      todos.filter((todo) => (todo.id != id))
    ))
  }, []);

  // 수정 버튼
  const modifyBrn = useCallback((id: string, text: string) => {
    setTodos((todos) => (
      todos.map((todo) => (
        todo.id === id
          ? {...todo, text}
          : todo
      ))
    ));
  }, []);

  useEffect(() => {
    localStorage.setItem("TODO_LIST", JSON.stringify(todos));
  }, [todos]);


  // useEffect(() => {
  //   const testTodo = Array.from(
  //     {length: 1000},
  //     (_, index) => `todo items ${index + 1}`
  //   )
  //   testTodo.forEach(item => addTodo(item));
  // }, []);

  return (
    <>
      <div className="todo">
        <TodoHeader/>
        {/*  할 일 등록*/}
        <TodoEditor addTodo={addTodo}/>
        {/*할 일 목록*/}
        <TodoList todos={todos}
                  chkToggle={chkToggle}
                  deleteTodo={deleteTodo}
                  modifyBrn={modifyBrn}
        />
      </div>
    </>
  );
};