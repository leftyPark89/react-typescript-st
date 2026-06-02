import {useState} from "react";

export default function useInputTest(initialValue = "", validateFn:(value:string) => string | undefined) {

  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setValue(e.target.value);
    setError(validateFn(e.target.value) || "");
  }

  return (
    {
      value,
      handleValueChange,
      error
    }
  );
};