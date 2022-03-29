import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { Delete } from "@mui/icons-material";
import { Card } from "@mui/material";

const cardStyle = {
    minWidth: 400,
    marginTop: "20px",
};

export default function FoodItemList(props) {
    const { foodItems, setFoodItems } = props;

    const handleToggleFoodItemCheck = (foodItemId) => {
        setFoodItems((prevFoodItems) =>
            prevFoodItems.map((foodItem) => ({
                ...foodItem,
                isChecked: foodItem.id === foodItemId ? !foodItem.isChecked : foodItem.isChecked,
            })),
        );
    };

    const handleFoodItemDelete = (foodItemId) => {
        setFoodItems((prevFoodItems) => prevFoodItems.filter((foodItem) => foodItem.id !== foodItemId));
    };

    return (
        <Card sx={cardStyle} variant="outlined">
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                {foodItems.map((foodItem) => {
                    const labelId = `checkbox-list-label-${foodItem.id}`;

                    return (
                        <ListItem
                            key={foodItem.id}
                            secondaryAction={
                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    onClick={() => handleFoodItemDelete(foodItem.id)}
                                >
                                    <Delete />
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton
                                role={undefined}
                                onClick={() => handleToggleFoodItemCheck(foodItem.id)}
                                dense
                            >
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={foodItem.isChecked}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ "aria-labelledby": labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={foodItem.name} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Card>
    );
}
