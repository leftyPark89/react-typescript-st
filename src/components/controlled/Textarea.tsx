import {useState} from "react";

export default function Textarea() {
  // const [text, setText] = useState("");
  // const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>) => {
  //   setText(e.target.value);
  // };
  //
  const [formText, setFormText] = useState({
    desc: "",
    intro: "",
  })

  const handleFormChange = (e: React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>) => {
    setFormText(formText => ({
      ...formText,
      [e.target.name]: e.target.value
    }))
  }


  return (
    <>
      <div>
        <textarea name="desc" value={formText.desc} onChange={handleFormChange}/>
        <p>입력된 텍스트: {formText.desc}</p>

        <textarea name="intro" value={formText.intro} onChange={handleFormChange}/>
        <p>입력된 텍스트: {formText.intro}</p>
      </div>
    </>
  );
};