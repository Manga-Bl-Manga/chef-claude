import "./style/mainBody.css"
import { useState } from "react"
import Dummy from "./dummy"
import Ingredients from "./ingredients"
import { getRecipeFromZephyr } from "./ai"

// 
export default function MainBody() {
    const [ingredients, setIngredients] = useState([])
    const [recipeShown, setRecipeShown] = useState(false)
    const [aiResponse, setAiResponse] = useState("")

    function onClick(formData) {
        const newIngrediant = formData.get("ingrediant")
        setIngredients(prev => [...prev, newIngrediant])

    }

    async function onGetRecipe() {
        setRecipeShown(true);
        const recipe = await getRecipeFromZephyr(ingredients);
        setAiResponse(recipe); // Will receive either recipe or error markdown
      }
    return (
        <main>
            <form action={onClick}>
                <input type="text" placeholder="eg. Pasta" name="ingrediant" />
                <button>+ Add Ingrediant</button>
            </form>
            {ingredients.length > 0 && <Ingredients 
            ingredients = {ingredients}
            onGetRecipe = {onGetRecipe}
            />}
            {recipeShown && <Dummy response = {aiResponse}/>}
        </main>
    )
}