import "./App.css";
import AddFoodItemButton from "./components/AddFoodItemButton";
import FoodItemList from "./components/FoodItemList";
import * as React from "react";
import { Box } from "@mui/material";
import GenerateRecipeButton from "./components/GenerateRecipeButton";

const boxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    position: "relative",
};

function App() {
    const [foodItems, setFoodItems] = React.useState([]);

    return (
        <Box sx={boxStyle} className="App">
            <FoodItemList foodItems={foodItems} setFoodItems={setFoodItems} />
            <AddFoodItemButton foodItems={foodItems} setFoodItems={setFoodItems} />
            <GenerateRecipeButton foodItems={foodItems} />
        </Box>
    );
}

export default App;
