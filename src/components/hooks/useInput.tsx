import {useState} from "react";

export default function UseInput(initialValue = "", validateFn: (value: string) => string | undefined) {


  const [error, setError] = useState("");
  const [value, setValue] = useState(initialValue);
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setError(validateFn(e.target.value) || "");
  };

  return (
    {
      value,
      handleValueChange,
      error
    }
  );
};