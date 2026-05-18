import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export default function FruitList() {

  const fruits = ["사과", "바나나", "오렌지"]
  const [items, setItems] = useState(() => fruits.map(item => ({
    id: uuidv4(),
    value: item
  })));

  const isGrape = items.some((item) => item.value === "포도");
  console.log(isGrape);

  const handleAddGrape = () => {
    setItems([{id: uuidv4(), value:"포도"}, ...items]);
  }

  return (
    <>
      <h1>FruitList</h1>
      <ul>
        {
          items.map((item) => (
            <li key={item.id}>
              <input type="text" placeholder={item.value}/>
            </li>
          ))
        }
      </ul>
      <button onClick={handleAddGrape} disabled={isGrape}>과일 추가</button>
    </>
  );
};