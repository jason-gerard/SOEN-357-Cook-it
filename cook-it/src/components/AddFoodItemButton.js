import * as React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Fab,
    ListItem,
    ListItemText,
    TextField
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import List from "@mui/material/List";

const fabStyle = {
    position: "absolute",
    bottom: 16,
    right: 16,
};

function FoodItemInputForm(props) {
    const { onClose, open, setFoodItems } = props;

    const [count, setCount] = React.useState(1);
    const [foodItem, setFoodItem] = React.useState({
        id: 0,
        name: "",
        isChecked: false,
    });

    const onTextChange = (e) => {
        setFoodItem((prevFoodItem) => ({
            ...prevFoodItem,
            name: e.target.value,
        }));
    };

    const handleSubmit = () => {
        setFoodItems((prevFoodItems) => [...prevFoodItems, { ...foodItem }]);

        setFoodItem({
            id: count,
            name: "",
            isChecked: false,
        });
        setCount((prevCount) => prevCount + 1);

        onClose();
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Input food item</DialogTitle>
            <DialogContent>
                <TextField
                    label="Food Item"
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
            <Fab sx={fabStyle} color="primary" aria-label="add" onClick={handleClickOpen}>
                <AddIcon />
            </Fab>

            <FoodItemInputForm open={open} onClose={handleClose} setFoodItems={props.setFoodItems} />
        </React.Fragment>
    );
}
