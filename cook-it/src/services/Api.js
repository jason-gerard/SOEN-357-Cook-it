import axios from "axios";

/**
 * Returns a single recipe based on the inputted ingredients list
 * @param ingredients
 * @returns {Promise<*>}
 */
export async function searchRecipesByIngredients(ingredients) {
    const ingredientsQuery = ingredients.map((i) => i.name).join(",");
    const res = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsQuery}&number=1&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`,
    );
    return res.data[0];
}

/**
 * Gets the steps of a recipe
 * @param recipeId
 * @returns {Promise<*>}
 */
export async function getAnalyzedRecipeInstructions(recipeId) {
    const res = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`,
    );
    return res.data[0].steps;
}
