import {useState} from "react";
import {initialRecipes} from "../data/initialRecipData.tsx";
import Recipe from "./Recipe.tsx";

export default function RecipeList() {
  const [recipes , setRecipes] = useState(initialRecipes);
  console.log(recipes);

  const handleDelete = (id : string) => {
    setRecipes(recipes.filter((item)=> id !== item.id));
  }

  return (
    <>
      <h1>Recipes List</h1>
      {
        recipes.map((item) => (
          <Recipe key={item.id} {...item} handleDelete={handleDelete}></Recipe>
        ))
      }
    </>
  );
};