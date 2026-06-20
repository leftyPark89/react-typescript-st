import {useId} from "react";

export default function Ckeckbox() {
  const uuid = useId();


  return (
    <>
      <input type="checkbox" id={uuid}/>
      <label htmlFor={uuid}>사과</label>
    </>
  );
};