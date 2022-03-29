import * as React from "react";
import { Button, Dialog, DialogTitle, Fab, TextField } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {getAnalyzedRecipeInstructions, searchRecipesByIngredients} from "../services/Api";

const generateRecipeButtonStyle = {
    position: "absolute",
    bottom: 16,
    margin: "0 auto",
};

function GeneratedRecipeModal(props) {
    const { onClose, open, foodItems, checked } = props;

    const [recipe, setRecipe] = React.useState({});

    React.useEffect(() => {
        async function f() {
            if (open) {
                const recipe = await searchRecipesByIngredients(foodItems);
                console.log(recipe);
                const instructions = await getAnalyzedRecipeInstructions(recipe.id);
                console.log(instructions);
            }
        }
        f();
    }, [open]);

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Input food item</DialogTitle>
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

            <GeneratedRecipeModal
                open={open}
                onClose={handleClose}
                foodItems={props.foodItems}
                checked={props.checked}
            />
        </React.Fragment>
    );
}
