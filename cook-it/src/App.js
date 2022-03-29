import "./App.css";
import { Box, Button, Card, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddFoodItemButton from "./components/AddFoodItemButton";
import FoodItemList from "./components/FoodItemList";
import * as React from "react";

const boxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    position: "relative",
};

function App() {
    const [foodItems, setFoodItems] = React.useState([]);
    const [checked, setChecked] = React.useState([]);

    return (
        <Box sx={boxStyle} className="App">
            <FoodItemList foodItems={foodItems} checked={checked} setChecked={setChecked} />
            <AddFoodItemButton foodItems={foodItems} setFoodItems={setFoodItems} />
        </Box>
    );
}

export default App;
