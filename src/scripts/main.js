import apiActions from "./api.js"
import events from "./events.js"
import render from "./dom.js"

events.registerDeleteListener()
apiActions.getAllRecipes().then(render)