import "./style/mainBody.css"
import { useState } from "react"
import Dummy from "./dummy"
import Ingredients from "./ingredients"
export default function MainBody() {
    const [ingredients, setIngredients] = useState([])
    const [recipeShown, setRecipeShown] = useState(false)

    function onClick(formData) {
        const newIngrediant = formData.get("ingrediant")
        setIngredients(prev => [...prev, newIngrediant])

    }

    function onGetRecipe() {
        setRecipeShown(true)
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
            {recipeShown && <Dummy />}
        </main>
    )
}