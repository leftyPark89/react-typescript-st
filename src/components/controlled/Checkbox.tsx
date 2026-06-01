import {useState} from "react";

export default function Checkbox() {

  // const [chk1, setChk1] = useState(false);
  // const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
  //   setChk1(e.target.checked);
  // }
  //
  // const [chk2, setChk2] = useState(false);
  // const handleCheckBox2 = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
  //   setChk2(e.target.checked);
  // }

  const [formState, setFormState] = useState({
    chk1: false,
    chk2: false
  })

  const handleFormState = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setFormState(formState => ({
      ...formState,
      [e.target.name]: e.target.checked,
    }));
  }


  return (
    <>
      <div>
        <input type="checkbox" name="chk1" id="item1" checked={formState.chk1} onChange={handleFormState}/>
        <label htmlFor="item1">아이템 1 {formState.chk1 ? "checked" : "unChecked"}</label>
      </div>
      <div>
        <input type="checkbox" name="chk2" id="item2" checked={formState.chk2} onChange={handleFormState}/>
        <label htmlFor="item2">아이템 2 {formState.chk2 ? "checked" : "unChecked"}</label>
      </div>
    </>
  )
    ;
};
