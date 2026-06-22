import TodoListItem from "./TodoListItem.tsx";
import TodoListEmpty from "./TodoListEmpty.tsx";
import {useTodo} from "../../context/todo/useTodo.ts";

export default function TodoList() {
  const {todos} = useTodo();
  return (
    <>
      <ul className="todo__list">
        {/*할 일 목록이 없을 때 */}
        {todos.length === 0 && <TodoListEmpty/>}

        {/*할 일 목록이 있을 때 */}
        {
          todos.map((todo) => (
            <TodoListItem key={todo.id} todo={todo}/>
          ))
        }
      </ul>
    </>
  );
};