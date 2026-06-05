import TodoListItem from "./TodoListItem.tsx";
import TodoListEmpty from "./TodoListEmpty.tsx";

export default function TodoList({
                                   todos,
                                   chkToggle,
                                   deleteTodo,
                                   modifyBrn
                                 }: {
  todos: Todo[];
  chkToggle: (id: string) => void;
  deleteTodo: (id: string) => void;
  modifyBrn: (id: string, text: string) => void;
}) {
  return (
    <>
      <ul className="todo__list">
        {/*할 일 목록이 없을 때 */}
        {todos.length === 0 && <TodoListEmpty/>}

        {/*할 일 목록이 있을 때 */}
        {
          todos.map((todo) => (
            <TodoListItem key={todo.id} todo={todo}
                          chkToggle={chkToggle}
                          deleteTodo={deleteTodo}
                          modifyBrn={modifyBrn}
            />
          ))
        }
      </ul>
    </>
  );
};