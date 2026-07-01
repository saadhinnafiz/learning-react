export default function Main() {
  return (
    <main>
      <form className="ingredient-form">
        <input
          type="text"
          placeholder="e.g Oregano"
          aria-label="Add ingredient"
          className="ingredient-input-field"
          autoFocus
        />
        <button className="ingredient-button">+ Add ingredient</button>
      </form>
    </main>
  );
}
