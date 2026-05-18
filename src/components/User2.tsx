export default function User2({
    name,
    age,
    gender
}: {
  name: string,
  age: number,
  gender: string
}) {
  return (
    <>
      <h1>Component</h1>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>gender: {gender}</p>
    </>
  );
};