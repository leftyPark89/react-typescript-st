export default function Recipe({
                                 id,
                                 name,
                                 ingredients,
                                 handleDelete
                               }: {
  id: string;
  name: string;
  ingredients: string[];
  handleDelete: (id: string) => void;
}) {
  return (
    <>
      <p>{name}</p>
      <ul>
        {ingredients.map((item) => <li key={item}>{item}</li>)
        }
      </ul>
      <button onClick={() => handleDelete(id)}>delete</button>
    </>
  );
};