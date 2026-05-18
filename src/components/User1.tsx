export default function User1({
    userObj,
}: {
    userObj: { name: string, age: number, gender: string }
}) {
  return (
    <>
      <h1>Component</h1>
      <p>name: {userObj.name}</p>
      <p>age: {userObj.age}</p>
      <p>gender: {userObj.gender}</p>
    </>
  );
};