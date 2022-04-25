import * as React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const addFoodItemButtonStyle = {
    marginTop: "30px",
};

function FoodItemInputForm(props) {
    const { onClose, open, setFoodItems } = props;

    // initial food item state
    const [foodItem, setFoodItem] = React.useState({
        name: "",
        isChecked: false,
    });

    // update the text of the food item every key press
    const onTextChange = (e) => {
        setFoodItem((prevFoodItem) => ({
            ...prevFoodItem,
            name: e.target.value,
        }));
    };

    // on submit add the food item to the list with a custom id
    const handleSubmit = () => {
        const id = `${foodItem.name}${+new Date()}`;
        setFoodItems((prevFoodItems) => [...prevFoodItems, { ...foodItem, id }]);

        setFoodItem({
            name: "",
            isChecked: false,
        });

        onClose();
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Add Ingredient</DialogTitle>
            <DialogContent>
                <TextField
                    label="Ingredient Name"
                    variant="outlined"
                    onChange={onTextChange}
                    value={foodItem.name}
                    sx={{ marginTop: 1 }}
                />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleSubmit}>
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default function AddFoodItemButton(props) {
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
                sx={addFoodItemButtonStyle}
                variant="contained"
                endIcon={<AddIcon />}
                onClick={handleClickOpen}
            >
                Add Ingredient
            </Button>

            <FoodItemInputForm open={open} onClose={handleClose} setFoodItems={props.setFoodItems} />
        </React.Fragment>
    );
}
