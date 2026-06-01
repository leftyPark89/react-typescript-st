import {useState} from "react";

export default function Mission() {

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    bio: "",
  })

  const handleName = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setUserInfo(userInfo => ({
      ...userInfo,
      [e.target.name]: e.target.value,
    }))
  }
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setUserInfo(userInfo => ({
      ...userInfo,
      [e.target.name]: e.target.value,
    }))
  }

  const [gender, setGender] = useState("");
  const handleGender = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setGender(e.target.value);
  }

  const [skills, setSkills] = useState<string[]>([]);
  const handleSkills = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const value = e.target.value;
    setSkills(skills =>
      e.target.checked
        ? [...skills, value]
        : skills.filter((skill) => skill != value)
    );
  }

  const handleIntro = (e: React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>) => {
    setUserInfo(userInfo => ({
      ...userInfo,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <div className="user-info">
        <h1 className="user-info__title">User Information</h1>
        <form className="user-info__form">
          <div className="form-group">
            <label className="form-group__label" htmlFor="name">
              이름: {userInfo.name}
            </label>
            <input className="form-group__input" value={userInfo.name} type="text" name="name" id="name"
                   onChange={handleName}/>
          </div>

          <div className="form-group">
            <label className="form-group__label" htmlFor="email">
              이메일: {userInfo.email}
            </label>
            <input className="form-group__input" name="email" value={userInfo.email} type="email" id="email"
                   onChange={handleEmail}/>
          </div>

          <div className="form-group form-group--radio">
            <label className="form-group__label">성별:</label>
            <label className="form-group__radio">
              <input type="radio" id="male" value="남성" checked={gender === "남성"} onChange={handleGender}/>
              남성
            </label>
            <label className="form-group__radio">
              <input type="radio" id="female" value="여성" checked={gender === "여성"} onChange={handleGender}/>
              여성
            </label>
          </div>

          <div className="form-group form-group--checkbox">
            <label className="form-group__label">기술 관심: </label>
            <label className="form-group__checkbox">
              <input type="checkbox" value="JavaScript" name="skills"
                     checked={skills.includes("JavaScript")}
                     onChange={handleSkills}/>
              JavaScript
            </label>
            <label className="form-group__checkbox">
              <input type="checkbox" value="React" name="skills"
                     checked={skills.includes("React")}
                     onChange={handleSkills}/>
              React
            </label>
            <label className="form-group__checkbox">
              <input type="checkbox" value="Node.js" name="skills"
                     checked={skills.includes("Node.js")}
                     onChange={handleSkills}/>
              Node.js
            </label>
          </div>

          <div className="form-group">
            <label className="form-group__label" htmlFor="bio">
              자기소개:
            </label>
            <textarea
              className="form-group__textarea"
              id="bio"
              placeholder="자기소개를 작성해주세요"
              name="bio"
              onChange={handleIntro}
            ></textarea>
          </div>

          <button className="user-info__submit" type="submit">
            제출
          </button>
        </form>

        <div className="preview">
          <h2 className="preview__title">실시간 입력값</h2>
          <p className="preview__item">이름: {userInfo.name}</p>
          <p className="preview__item">이메일: {userInfo.email}</p>
          <p className="preview__item">성별: {gender}</p>
          <p className="preview__item">기술 관심: {skills.join(" ,")}</p>
          <p className="preview__item">자기소개: </p>
          <pre>{userInfo.bio}</pre>
        </div>
      </div>
    </>
  );
};