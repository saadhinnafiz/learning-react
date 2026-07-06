type IngredientListProps = {
  ingredients: string[];
  getRecipe: () => void;
};

export default function IngredientList(props: IngredientListProps) {
  const ingredientsListItem = props.ingredients.map((ingredient) => (
    <li key={ingredient}> {ingredient}</li>
  ));
  return (
    <section className="ingredients-container">
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsListItem}
      </ul>

      {props.ingredients.length >= 4 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
