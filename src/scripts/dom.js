import factory from "./factory.js"

const recipeList = document.querySelector("#recipeList")
const hiddenRecipeId = document.querySelector("#recipeId")
const recipeTitleInput = document.querySelector("#recipeTitle")
const recipeInstructionsInput = document.querySelector("#recipeInstructions")

const clearFormFields = () => {
    hiddenRecipeId.value = ""
    recipeTitleInput.value = ""
    recipeInstructionsInput.value = ""
}

const updateFormFields = recipeId => {
    fetch(`http://localhost:8088/recipes/${recipeId}`)
        .then(response => response.json())
        .then(recipe => {
            /*
                Now that you KNOW you have the data, render
                an editing form that represents the current
                state of the resource.
            */
            hiddenRecipeId.value = recipe.id // Hidden value. User no see. 🙈
            recipeTitleInput.value = recipe.title
            recipeInstructionsInput.value = recipe.instructions
        })
}

const renderRecipes = recipes => {
    recipeList.textContent = ""

    for (const recipe of recipes) {
        const recipeCard = factory.createRecipeComponent(recipe)
        recipeList.innerHTML += recipeCard
    }
}

export default {
    renderRecipes, updateFormFields, clearFormFields
}