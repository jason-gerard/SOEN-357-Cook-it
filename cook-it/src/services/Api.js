import axios from "axios";

/**
 * Returns a single recipe based on the inputted ingredients list
 * @param ingredients
 * @returns {Promise<*>}
 */
export async function searchRecipesByIngredients(ingredients) {
    const ingredientsQuery = ingredients.map((i) => i.name).join(",");
    const ingredientNumber = Math.floor(Math.random() * 100);

    const res = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsQuery}&number=${ingredientNumber}&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`,
    );
    return res.data[0];
}

/**
 * Returns an image url for the recipe card based on the recipe id
 * @param recipeId
 * @returns {Promise<*>}
 */
export async function getRecipeCard(recipeId) {
    const res = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/card?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`,
    );
    return res.data.url;
}
