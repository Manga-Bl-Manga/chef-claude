export default function Ingredients(props) {

    const ingredientsMap = props.ingredients.map(ingrediant => {
        return (
            <li>{ingrediant}</li>
        )
    })

    return (
        // I need to grap 3 things from main through props
        // 1) ingredientsMap 2)ingredients 3)onGetRecipe
        
        <section>
            <h2>Ingredients on hand:</h2>

            <ul>
                {ingredientsMap}
            </ul>
            {props.ingredients.length > 3 &&
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.onGetRecipe}>Get a recipe</button>
                </div>}
        </section>
    )
}