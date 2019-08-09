export default recipe => `
    <section class="recipe recipe--${recipe.id}">
        <header class="recipe__title">
            ${recipe.title}
        </header>
        <div class="recipe__instructions">
            ${recipe.instructions}
        </div>
        <button id="deleteRecipe--${recipe.id}">
            Delete Recipe
        </button>
        <button id="editRecipe--${recipe.id}">
            Edit Recipe
        </button>
    </section>
`
