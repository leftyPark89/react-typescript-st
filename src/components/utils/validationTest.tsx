export const validationEmailTest = (email:string) => {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "올바른 이메일 입력 필요";
  }
}

export const validationPwTest = (password:string) => {
  if (password.length < 8) {
    return "비밀번호는 8자 이상이어야 합니다.";
  }
}