import useInput from "../hooks/useInput.tsx"
import {validateEmail, validatePassword, validateName} from "../utils/validation.tsx"

export default function CustomHook() {
  const {
    value: email,
    handleValueChange: handleEmailChange,
    error: emailErr
  } = useInput("", validateEmail);

  const {
    value: password,
    handleValueChange: handlePasswordChange,
    error: passwordErr
  } = useInput("", validatePassword);

  const {
    value: name,
    handleValueChange: handleNameChange,
    error: nameErr
  } = useInput("", validateName)

  // const [email, setEmail] = useState("");
  // const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(e.target.value);
  // };

  // const [password, setPassword] = useState("");
  // const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPassword(e.target.value);
  // };

  // const [name, setName] = useState("");
  // const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(e.target.value);
  // };
  // const validationEmail = (email:string) => {
  //   if(!email) return "이메일 입력 필요";
  //   if (!/^[a-zA-Z0-9._%+-]+@(gmail\.com|naver.com)$/.test(email)) {
  //     return "Only gmail or naver Mail"
  //   }
  // }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // email validation
    // const emailErr = validateEmail(email);
    if (emailErr) {
      alert(emailErr);
      return;
    }

    // password validation
    // const passwordErr = validatePassword(password);
    if (passwordErr) {
      alert(passwordErr);
      return;
    }

    // name validation
    // const nameErr = validateName(name);
    if (nameErr) {
      alert(nameErr);
      return;
    }

    console.log({email, password, name});
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
        />
        {emailErr && <p>{emailErr}</p>}
          <input
          type="password"
          placeholder="password"
          value={password}
        onChange={handlePasswordChange}
          maxLength={8}
          required
        />
        {passwordErr && <p>{passwordErr}</p>}
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleNameChange}
        />
        {nameErr && <p>{nameErr}</p>}
        <button type="submit">제출</button>
      </form>
    </>
  );
};