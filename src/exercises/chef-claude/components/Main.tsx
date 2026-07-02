import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const ingredientsListItem = ingredients.map((ingredient) => (
    <li key={ingredient}> {ingredient}</li>
  ));

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    if (!newIngredient) return;
    setIngredients((prev) => [...prev, newIngredient as string]);
    event.currentTarget.reset();
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="ingredient-form">
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
      <ul>{ingredientsListItem}</ul>
    </main>
  );
}
