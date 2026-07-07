import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientList from "./IngredientsList";
import { getRecipeFromChefClaude } from "../ai";

export default function Main() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipe, setRecipe] = useState("");

  function addIngredient(formData: FormData) {
    const newIngredient = formData.get("ingredient");
    if (!newIngredient) return;
    setIngredients((prev) => [...prev, newIngredient as string]);
  }

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
    setRecipe(recipeMarkdown);
    console.log(recipeMarkdown);
  }

  return (
    <main>
      <div className="content-container">
        <form action={addIngredient} className="ingredient-form">
          <input
            type="text"
            placeholder="e.g Oregano"
            aria-label="Add ingredient"
            className="ingredient-input-field"
            name="ingredient"
            autoFocus
          />
          <button type="submit" className="ingredient-button">
            + Add ingredient
          </button>
        </form>

        {ingredients.length > 0 && (
          <IngredientList ingredients={ingredients} getRecipe={getRecipe} />
        )}

        {recipe && <ClaudeRecipe recipe={recipe} />}
      </div>
    </main>
  );
}
