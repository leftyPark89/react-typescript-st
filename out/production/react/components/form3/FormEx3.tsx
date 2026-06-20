import {useRef} from "react";
import * as React from "react";
import Input from "./Input.tsx";

export default function FormEx3() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputRef.current?.focus();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};