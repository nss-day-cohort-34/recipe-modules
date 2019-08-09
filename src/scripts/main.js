import apiActions from "./api.js"
import domActions from "./dom.js"

const hiddenRecipeId = document.querySelector("#recipeId")
const recipeTitle = document.querySelector("#recipeTitle")
const recipeInstructions = document.querySelector("#recipeInstructions")


apiActions.getAllRecipes().then(domActions.renderRecipes)

document.querySelector("#saveRecipe").addEventListener("click", e => {
    if (hiddenRecipeId.value !== "") {
        const recipe = {
            id: hiddenRecipeId.value,
            title: recipeTitle.value,
            instructions: recipeInstructions.value
        }

        apiActions.editRecipe(recipe)
            .then(apiActions.getAllRecipes)
            .then(domActions.renderRecipes)
            .then(domActions.clearFormFields)
    }
})

document.querySelector("#recipeList").addEventListener("click", (event) => {
    if (event.target.id.startsWith("deleteRecipe")) {
        const recipeId = event.target.id.split("--")[1]

        apiActions.deleteRecipe(recipeId)
            .then(apiActions.getAllRecipes)
            .then(domActions.renderRecipes)
    }

    if (event.target.id.startsWith("editRecipe")) {
        const recipeId = event.target.id.split("--")[1]

        domActions.updateFormFields(recipeId)
    }
})

