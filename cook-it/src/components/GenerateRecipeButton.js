import * as React from "react";
import { Button, Dialog, DialogActions, DialogContent, Box, Link } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { getRecipeCard, searchRecipesByIngredients } from "../services/Api";

const generateRecipeButtonStyle = {
    margin: "10px 0",
};

/**
 * Take a random n between 2 and the max food items i.e. the number of food items
 * then take n random food items from the list at the kth index
 * @param foodItems
 * @returns {*[]}
 */
function singleClickRecipeGenerator(foodItems) {
    const min = 2;
    const max = foodItems.length;

    const n = Math.floor(Math.random() * (max - min + 1)) + min;

    return [
        ...new Set(
            [...Array(n)].map((_) => {
                const k = Math.floor(Math.random() * foodItems.length);
                return foodItems[k];
            }),
        ),
    ];
}

function GeneratedRecipeModal(props) {
    const { onClose, open, foodItems } = props;

    const [recipe, setRecipe] = React.useState({});
    const [recipeCard, setRecipeCard] = React.useState([]);

    React.useEffect(() => {
        async function f() {
            // only update the recipe when the modal is open
            if (open) {
                // take the selected / checked food items else fallback to single click algo
                let selectedFoodItems = foodItems.filter((foodItem) => foodItem.isChecked);
                if (selectedFoodItems.length === 0) {
                    selectedFoodItems = singleClickRecipeGenerator(foodItems);
                }

                const recipe = await searchRecipesByIngredients(selectedFoodItems);
                setRecipe(recipe);
                const recipeCard = await getRecipeCard(recipe.id);
                setRecipeCard(recipeCard);
            }
        }
        f();
    }, [open]);

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogContent>
            <Box
                component="img"
                sx={{
                    height: `100%`,
                    width:`100%`,
                }}
                alt={`${recipe.title}`}
                src={`${recipeCard}`}
            />
            </DialogContent>
            <DialogActions>
                <Link href={`${recipeCard}`} underline="none" marginRight={1}>Download</Link>
                <Button variant="contained" onClick={handleClose}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default function GenerateRecipeButton(props) {
    const { foodItems } = props;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        if (foodItems.length > 0) {
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button
                sx={generateRecipeButtonStyle}
                variant="contained"
                endIcon={<ArrowForwardIosIcon />}
                onClick={handleClickOpen}
            >
                Find a Recipe
            </Button>

            <GeneratedRecipeModal open={open} onClose={handleClose} foodItems={foodItems} />
        </React.Fragment>
    );
}
