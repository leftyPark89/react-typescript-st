import {useRef} from "react";

export default function Radio() {
  const formElRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(formElRef.current!);
    console.log("formData:", formData.get("option"));
  }
  return (
    <form onSubmit={handleSubmit} ref={formElRef}>
      <div>
        <label>
          <input type="radio" name="option" value="option1"/>
          옵션1
        </label>
      </div>

      <div>
        <label>
          <input type="radio" name="option" value="option2" defaultChecked/>
          옵션2
        </label>
      </div>

      <div>
        <label>
          <input type="radio" name="option" value="option3"/>
          옵션3
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};