import createRecipeCard from "./factory.js"

const recipeList = document.querySelector("#recipeList")

export default recipes => {
    recipeList.textContent = ""

    for (const recipe of recipes) {
        const recipeCard = createRecipeCard(recipe)
        recipeList.innerHTML += recipeCard
    }
}