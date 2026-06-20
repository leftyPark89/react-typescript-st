import {useState} from "react";

export default function FilterTest() {

  const [items, setItems] = useState([
    {id: 1, name: "Apple", category: "Fruit"},
    {id: 2, name: "Carrot", category: "Vegetable"},
    {id: 3, name: "Banana", category: "Fruit"},
    {id: 4, name: "Tomato", category: "Vegetable"},
  ]);


  const filterItems = items.filter((itme) => itme.category === "Vegetable");
  console.log(filterItems);
  const handleDel = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <>
      <h1>Item List</h1>
      <ul>
        {
          items
            // .filter((item) => item.category === "Vegetable")
            .map((item) => (
              <li key={item.id}>
                {item.category} : {item.name}
                <button onClick={() => handleDel(item.id)}>delete</button>
              </li>
            ))
        }
      </ul>
    </>
  );
};