import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const ingredientsListItem = ingredients.map((ingredient) => (
    <li key={ingredient}> {ingredient}</li>
  ));

  function addIngredient(formData: FormData) {
    const newIngredient = formData.get("ingredient");
    if (!newIngredient) return;
    setIngredients((prev) => [...prev, newIngredient as string]);
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
          <section className="ingredients-container">
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">
              {ingredientsListItem}
            </ul>

            {ingredients.length >= 4 && (
              <div className="get-recipe-container">
                <div>
                  <h3>Ready for a recipe?</h3>
                  <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button>Get a recipe</button>
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}
