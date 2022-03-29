import * as React from "react";
import { Button, Dialog, DialogTitle, Fab, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const fabStyle = {
    position: "absolute",
    bottom: 16,
    right: 16,
};

function FoodItemInputForm(props) {
    const { onClose, open, foodItems, setFoodItems } = props;

    const [count, setCount] = React.useState(1);
    const [foodItem, setFoodItem] = React.useState({
        id: 0,
        name: "",
        isChecked: false,
    });

    const onTextChange = (e) =>
        setFoodItem({
            ...foodItem,
            name: e.target.value,
        });

    const handleSubmit = () => {
        setFoodItems(prevFoodItems => ([...prevFoodItems, {...foodItem}]));
        console.log(foodItems);

        setFoodItem({
            id: count,
            name: "",
            isChecked: false,
        });
        setCount(prevCount => prevCount+1);

        onClose();
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Input food item</DialogTitle>
            <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                onChange={onTextChange}
                value={foodItem.name}
            />
            <Button variant="contained" onClick={handleSubmit}>
                Add
            </Button>
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
            <Fab sx={fabStyle} color="primary" aria-label="add" onClick={handleClickOpen}>
                <AddIcon />
            </Fab>

            <FoodItemInputForm
                open={open}
                onClose={handleClose}
                foodItems={props.foodItems}
                setFoodItems={props.setFoodItems}
            />
        </React.Fragment>
    );
}
