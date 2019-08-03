export default {
    getAllRecipes () {
        return fetch("http://localhost:8088/recipes")
            .then(response => response.json())
    }
}
