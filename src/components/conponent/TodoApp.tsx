import TodoHeader from "./TodoHeader.tsx";
import TodoEditor from "./TodoEditor.tsx";
import TodoList from "./TodoList.tsx";

export default function TodoApp() {


  return (
    <>
      <div className="todo">
        <TodoHeader/>
        {/*  할 일 등록*/}
        <TodoEditor/>
        {/*할 일 목록*/}
        <TodoList/>
      </div>
    </>
  );
};