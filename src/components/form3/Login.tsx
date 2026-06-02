import {useState} from "react";
import {validateEmail, validatePw} from "../utils/validationTest.tsx";

export default function Login() {

  // 상태 관리 > 이메일, 비번, 아이디 저장
  const [email, setEmail] = useState(localStorage.getItem("saveEmail") || "");
  const [password, setPassword] = useState("");
  const [rememberId, setRememberId] = useState(localStorage.getItem("remember") === "true");

  const [showPs, setShowPs] = useState(false);

  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  // 상태 핸들러 >
  // 유효성, 비밀번호 토글
  // 로그인 버튼 클릭 시 동작 > 아이디 저장, 새로고침해도 유지, 저장x시 새로고침 후 아이디 삭제
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log("target value : ", validateEmail(e.target.value));
    setEmailErr(validateEmail(e.target.value) ? "" : "올바른 이메일 주소 입력 필요");
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordErr(validatePw(e.target.value) ? "" : "비번 8자 이상 필요")
  }

  const pwToggle = () => {
    setShowPs(prev => !prev);
  }

  const handleChkBox = () => {
    setRememberId(rememberId => !rememberId);
    console.log("check box: ", rememberId);
  }

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (!validateEmail(email)) return;
    if (!validatePw(password)) return;

    console.log("rememberId", rememberId);

    if (rememberId) {
      localStorage.setItem("saveEmail", email);
      localStorage.setItem("remember", "true");
    } else {
      localStorage.removeItem("saveEmail");
      localStorage.removeItem("remember");
    }

    alert("로그인 성공");
    console.log({email, password, rememberId});
  }


  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-[375px] rounded-lg bg-white border border-gray-300 py-10 px-6 text-gray-700">
        <h1 className="text-xl font-bold mb-2.5">로그인</h1>
        <p className="text-sm mb-5">계속하려면 세부 정보를 입력하세요.</p>
        <form className="grid gap-4">
          {/* Email Input */}
          <div>
            <input
              type="email"
              className="input-field"
              placeholder="someone@example.com"
              onChange={handleEmail}
              required
              value={email}
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
                type={showPs ? "text" : "password"}
                className="input-field"
                placeholder="Enter Password"
                onChange={handlePassword}
                required
              />
              <button
                onClick={pwToggle}
                type="button"
                className="absolute top-1/2 right-3 w-6 -translate-y-1/2 cursor-pointer"
              >
                {/* 비밀번호가 보일 땐 eyes.svg */}
                <img src={showPs ? "eyes.svg" : "/eyes-closed.svg"} alt="Toggle password visibility"/>
              </button>
            </div>
            {
              passwordErr &&
                <p className="mt-2 text-sm text-rose-500">
                    비밀번호가 유효하지 않습니다.
                </p>
            }

          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <input
              onChange={handleChkBox}
              type="checkbox"
              id="chk"
              className="w-5 h-5 cursor-pointer appearance-none border border-gray-700 bg-white rounded-[5px] checked:bg-gray-700 checked:bg-[url('./check-icon.svg')] checked:bg-no-repeat checked:bg-center"
              checked={rememberId}
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
            onClick={handleLogin}
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};