import {useState} from "react";

export default function Input() {


  const [formState, setFormState] = useState({
    email: "",
    password: ""
  });
  const handleFormState = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setFormState((formState) => ({
      ...formState,
      // [e.target.name]: e.target.value,
      email : e.target.value,
    }))
  }

  return (
    <>
      <form>
        <h1>Input : {formState.email}  /  {formState.password}</h1>
        <input type="text" name="email" value={formState.email} onChange={handleFormState} />
        <input type="text" name="password" value={formState.password} onChange={handleFormState} />
      </form>
    </>
  );
};