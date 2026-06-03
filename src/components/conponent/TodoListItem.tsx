import Checkbox from "./html/Checkbox.tsx";
import Button from "./html/ButtonProps.tsx";
import SvgPencil from "./svg/SvgPencil.tsx";
import SvgClose from "./svg/SvgClose.tsx";

export default function TodoListItem() {
  return (
    <>
      {/* 할 일이 완료되면 .todo__item--complete 추가*/}
      <li className="todo__item todo__item--complete">
        <Checkbox parentClassName="todo__checkbox-group" type="checkbox" className="todo__checkbox">
          Eat Breakfast
        </Checkbox>
        {/* 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출) */}
        {/*<input type="text" className="todo__modify-input" />*/}
        <div className="todo__button-group">
          <Button className="todo__action-button">
            <SvgPencil></SvgPencil>
          </Button>
          <Button className="todo__action-button">
            <SvgClose></SvgClose>
          </Button>
        </div>
      </li>
    </>
  );
};