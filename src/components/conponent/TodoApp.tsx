import TodoHeader from "./TodoHeader.tsx";
import TodoEditor from "./TodoEditor.tsx";
import TodoList from "./TodoList.tsx";
import {useState} from "react";


export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // 할일 추가
  const addTodo = (text: string) => {
    setTodos((todos) => [
      ...todos,
      {
        id: Date.now(),
        text,
        completed: false,
      }
    ])
  };

  // 완료 토글
  const chkToggle = (id: number) => {
    setTodos((todos) => (
      todos.map((todo) => (
        todo.id === id
          ? {...todo, completed: !todo.completed}
          : todo
      ))
    ))
  }

  // 삭제 버튼
  const deleteTodo = (id: number) => {
    setTodos((todos) => (
      todos.filter((todo) => (todo.id != id))
    ))
  }

  // 수정 버튼
  const modifyBrn = (id: number, text: string) => {
    setTodos((todos) => (
      todos.map((todo) => (
        todo.id === id
          ? {...todo, text}
          : todo
      ))
    ));
  }

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