import * as React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, ListItem, ListItemText } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { getAnalyzedRecipeInstructions, searchRecipesByIngredients } from "../services/Api";
import List from "@mui/material/List";

const generateRecipeButtonStyle = {
    position: "absolute",
    bottom: 16,
    margin: "0 auto",
};

function GeneratedRecipeModal(props) {
    const { onClose, open, foodItems } = props;

    const [recipe, setRecipe] = React.useState({});
    const [instructions, setInstructions] = React.useState([]);

    React.useEffect(() => {
        async function f() {
            if (open) {
                const selectedFoodItems = foodItems.filter((foodItem) => foodItem.isChecked);
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
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
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

            <GeneratedRecipeModal open={open} onClose={handleClose} foodItems={props.foodItems} />
        </React.Fragment>
    );
}
