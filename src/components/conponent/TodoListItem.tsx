import Checkbox from "./html/Checkbox.tsx";
import Button from "./html/ButtonProps.tsx";
import SvgPencil from "./svg/SvgPencil.tsx";
import SvgClose from "./svg/SvgClose.tsx";
import Input from "./html/Input.tsx";
import {useState} from "react";

export default function TodoListItem({
                                       todo,
                                       chkToggle,
                                       deleteTodo,
                                       modifyBrn
                                     }: {
  todo: Todo;
  chkToggle: (id: number) => void;
  deleteTodo: (id: number) => void;
  modifyBrn: (id: number, text: string) => void;
}) {
  // 수정 상태 및 기능
  const [modify, setModify] = useState(false);
  const [modiText, setModiText] = useState("");
  const handleModify = () => {
    setModify((modify) => !modify);
    setModiText((modiText) => (
      modiText === ""
        ? todo.text
        : modiText
    ));
    if (modiText.trim() != "") {
      modifyBrn(todo.id, modiText);
    }

  }

  return (
    <>
      {/* 할 일이 완료되면 .todo__item--complete 추가*/}
        <li className={`todo__item ${todo.completed && "todo__item--complete"}`}>
          {
            !modify &&
              <Checkbox
                  parentClassName="todo__checkbox-group"
                  type="checkbox"
                  className="todo__checkbox"
                  checked={todo.completed}
                  onChange={() => chkToggle(todo.id)}
              >
                {todo.text}
              </Checkbox>
          }


          {/* 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출) */}
          {
            modify && <Input type="text" value={modiText} onChange={(e)=>setModiText(e.target.value)} className="todo__modify-input"/>
          }
          <div className="todo__button-group">
            <Button
              className="todo__action-button"
              onClick={handleModify}>
              <SvgPencil></SvgPencil>
            </Button>
            <Button
              className="todo__action-button"
              onClick={() => deleteTodo(todo.id)}>
              <SvgClose></SvgClose>
            </Button>
          </div>
        </li>
    </>
  );
};