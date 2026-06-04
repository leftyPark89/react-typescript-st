import {useEffect, useState} from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  // []의존성 배열이 비어있을 경우, 컴포넌트가 생성될 때만 호출된다.
  useEffect(() => {
    console.log("count 컴포넌트 생성");

    // 컴포넌트가 삭제(언마운트)될 때만 호출하는 코드
    return () => {
      console.log("count 컴포넌트 삭제");
    }
  }, []);

  // 컴포넌트의 상태가 변경되었을 때만 호출하려면?
  useEffect(() => {
    console.log("count change", count)
  }, [count]);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => ++count)}>증가</button>
    </>
  );
};