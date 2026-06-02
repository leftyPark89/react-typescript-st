import useInputTest from "../hooks/useInputTest.tsx";
import {validationEmailTest, validationPwTest} from "../utils/validationTest.tsx"
import {useRef, useState} from "react";

export default function Login() {

  const {
    value: email,
    handleValueChange: handleEmailChange,
    error: emailErr
  } = useInputTest("", validationEmailTest)


  const {
    value: password,
    handleValueChange: handlePwChange,
    error: pwErr
  } = useInputTest("", validationPwTest)

  // const {value: password, handleValueChange: handlePasswordChange} = useInputTest("")
  // const [password, setPassword] = useState("");
  // const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
  //   setPassword(e.target.value);
  // }

  // 비번 토글
  const [open, setOpen] = useState(false);
  const openToggle = () => {
    setOpen(open => !open);
  }

  const checkRef = useRef<HTMLInputElement>(null);


  const handleLogin = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 체크박스 상태
    const isChecked = checkRef.current?.checked;
    console.log(isChecked);
    if (isChecked) {
      localStorage.setItem("email", email);
    }

    // const emailErr = validationEmail(email);
    if (emailErr) {
      alert(emailErr);
      return;
    }

    if (email === "") return alert("이메일 입력 필요");

    if (pwErr) {
      alert(pwErr);
      return;
    }

    console.log({email, password})
  }


  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-[375px] rounded-lg bg-white border border-gray-300 py-10 px-6 text-gray-700">
        <h1 className="text-xl font-bold mb-2.5">로그인</h1>
        <p className="text-sm mb-5">계속하려면 세부 정보를 입력하세요.</p>
        <form className="grid gap-4" onSubmit={handleLogin}>
          {/* Email Input */}
          <div>
            <input
              type="email"
              className="input-field"
              placeholder="someone@example.com"
              // value={email}
              onChange={handleEmailChange}
            />
            {
              emailErr &&
                <p className="mt-2 text-sm text-rose-500">
                    이메일이 유효하지 않습니다.
                </p>
            }
          </div>

          {/* Password Input */}
          <div>
            <div className="relative">
              <input
                // type="password"
                type={open ? "password" : "text"}
                className="input-field"
                placeholder="Enter Password"
                onChange={handlePwChange}
                // value={password}
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 w-6 -translate-y-1/2 cursor-pointer"
                onClick={openToggle}
              >
                {/* 비밀번호가 보일 땐 eyes.svg */}
                {/*<img src="/eyes-closed.svg" alt="Toggle password visibility"/>*/}
                <img src={open ? "/eyes-closed.svg" : "eyes.svg"} alt="Toggle password visibility"/>
              </button>
            </div>
            {pwErr &&
                <p className="mt-2 text-sm text-rose-500">
                    비밀번호가 유효하지 않습니다.
                </p>
            }
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="chk"
              className="w-5 h-5 cursor-pointer appearance-none border border-gray-700 bg-white rounded-[5px] checked:bg-gray-700 checked:bg-[url('./check-icon.svg')] checked:bg-no-repeat checked:bg-center"
              ref={checkRef}
            />
            <label
              htmlFor="chk"
              className="text-sm text-gray-700 cursor-pointer"
            >
              아이디 저장
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="h-[44px] text-sm w-full bg-gray-700 text-gray-100 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};