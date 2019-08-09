export default {
    getAllRecipes() {
        return fetch("http://localhost:8088/recipes")
            .then(response => response.json())
    },
    deleteRecipe(recipeId) {
        return fetch(`http://localhost:8088/recipes/${recipeId}`,
            {
                "method": "DELETE"
            }
        )
            .then(response => response.json())
    },
    editRecipe(recipe) {
        return fetch(`http://localhost:8088/recipes/${recipe.id}`, {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(recipe)
        })
            .then(response => response.json())

    }
}
