import {useRef} from "react";

export default function CheckBox() {
  const privacyRef = useRef<HTMLInputElement>(null);
  const termRef = useRef<HTMLInputElement>(null);
  const fruitRef = useRef<HTMLInputElement[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("current : ", fruitRef.current[0]);

    const selectedFruit = fruitRef.current.filter(fruit => fruit.checked).map(fruit => fruit.value);
    console.log("selected", selectedFruit);

    const isPriChecked = privacyRef.current?.checked;
    if (!isPriChecked) {
      alert("개인정보동의 필요");
      return;
    }
    const isTermChecked = termRef.current?.checked;
    if (!isTermChecked) {
      alert("약관 동의 필요");
      return;
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="checkbox" ref={privacyRef}/>
          <label>개인정보동의</label>
        </div>
        <div>
          <input type="checkbox" ref={termRef}/>
          <label>약관 동의</label>
        </div>
        <div>
          {/*<input type="checkbox" value="사과" ref={(el) => fruitRef.current[0] = el!}/>*/}
          {/*<label>사과</label>*/}
        </div>
        <div>
          {/*<input type="checkbox" value="오렌지" ref={(el) => fruitRef.current[1] = el!}/>*/}
          {/*<label>오렌지</label>*/}
        </div>
        <div>
          {/*<input type="checkbox" value="포도" ref={(el) => fruitRef.current[2] = el!}/>*/}
          {/*<label>포도</label>*/}
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  );
};