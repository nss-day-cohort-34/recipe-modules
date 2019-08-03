import apiActions from "./api.js"
import render from "./dom.js"

apiActions.getAllRecipes().then(render)