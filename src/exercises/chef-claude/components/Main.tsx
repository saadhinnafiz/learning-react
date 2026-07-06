import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientList from "./IngredientsList";

export default function Main() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipeShown, setRecipeShown] = useState(false);

  function addIngredient(formData: FormData) {
    const newIngredient = formData.get("ingredient");
    if (!newIngredient) return;
    setIngredients((prev) => [...prev, newIngredient as string]);
  }

  function getRecipe() {
    setRecipeShown(true);
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

        {recipeShown && <ClaudeRecipe />}
      </div>
    </main>
  );
}
