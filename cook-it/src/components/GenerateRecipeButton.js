import * as React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, ListItem, ListItemText } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { getAnalyzedRecipeInstructions, searchRecipesByIngredients } from "../services/Api";
import List from "@mui/material/List";

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
    const [instructions, setInstructions] = React.useState([]);

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
                const instructions = await getAnalyzedRecipeInstructions(recipe.id);
                setInstructions(instructions);
            }
        }
        f();
    }, [open]);

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Recipe: {recipe.title}</DialogTitle>
            <DialogContent>
                <List sx={{ p: 0 }}>
                    {instructions.map(({ number, step }) => (
                        <ListItem sx={{ p: 0 }} button key={number}>
                            <ListItemText primary={`${number}: ${step}`} />
                        </ListItem>
                    ))}
                </List>
            </DialogContent>
            <DialogActions>
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
                size="large"
                endIcon={<ArrowForwardIosIcon />}
                onClick={handleClickOpen}
            >
                Generate Recipe
            </Button>

            <GeneratedRecipeModal open={open} onClose={handleClose} foodItems={foodItems} />
        </React.Fragment>
    );
}
