import Input from "./html/Input.tsx";
import Button from "./html/ButtonProps.tsx";
import {useState} from "react";
import {useTodoAction} from "../../context/todo/useTodo.ts";

export default function TodoEditor() {
  const [text, setText] = useState("");
  const {addTodo} = useTodoAction();
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(text.trim() === "") return;
    addTodo(text);
    setText("");
  }
  return (
    <>
      <form className="todo__form" onSubmit={handleSubmit}>
        <div className="todo__editor">
          <Input
            type="text"
            className="todo__input"
            placeholder="Enter Todo List"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button className="todo__button" type="submit">Add</Button>
        </div>
      </form>
    </>
  );
};