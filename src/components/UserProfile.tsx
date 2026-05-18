type UserValues = {
  name: string,
  age: number,
  isAdmin: boolean,
}


export default function UserProfile({name, age, isAdmin}: UserValues) {

  return (
    <>
      <div style={{ border: "1px solid black", padding: "10px", margin:"10px"}}>
        <p>이름: {name}</p>
        <p>나이: {age}</p>
        <p>{isAdmin ? "관리자" : "일반사용자"}</p>
      </div>
    </>
  );
};