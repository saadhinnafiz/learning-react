import ReactMarkdown from "react-markdown";
import { useEffect, useRef } from "react";

type ClaudeRecipeProps = {
  recipe: string;
};

export default function ClaudeRecipe(props: ClaudeRecipeProps) {
  const recipeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    recipeRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section ref={recipeRef} className="suggested-recipe-container">
      <h2>Chef Claude Recommends:</h2>
      <article aria-live="polite">
        <ReactMarkdown>{props.recipe}</ReactMarkdown>
      </article>
    </section>
  );
}
