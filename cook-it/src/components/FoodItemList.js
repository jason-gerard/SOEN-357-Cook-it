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
};

export default function FoodItemList(props) {
    const { checked, setChecked } = props;

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <Card sx={cardStyle} variant="outlined">
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                {props.foodItems.map((foodItem) => {
                    const labelId = `checkbox-list-label-${foodItem.id}`;

                    return (
                        <ListItem
                            key={foodItem.id}
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete">
                                    <Delete />
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton role={undefined} onClick={handleToggle(foodItem.id)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(foodItem.id) !== -1}
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
