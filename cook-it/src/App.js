import "./App.css";
import AddFoodItemButton from "./components/AddFoodItemButton";
import FoodItemList from "./components/FoodItemList";
import * as React from "react";
import { Box, Typography } from "@mui/material";
import GenerateRecipeButton from "./components/GenerateRecipeButton";

const boxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "80vh",
    position: "relative",
};

function App() {
    // initialize the food items list from local storage or to an empty array
    const [foodItems, setFoodItems] = React.useState(JSON.parse(localStorage.getItem("foodItems")) || []);

    // persists the food items into local storage so the user has the items
    // the next time they open the app
    React.useEffect(() => {
        localStorage.setItem("foodItems", JSON.stringify(foodItems));
    }, [foodItems]);

    return (
        <Box sx={boxStyle} className="App">
            <Typography variant="h3" component="h2" color="primary">
                Cook.it
            </Typography>
            <FoodItemList foodItems={foodItems} setFoodItems={setFoodItems} />
            <AddFoodItemButton setFoodItems={setFoodItems} />
            <GenerateRecipeButton foodItems={foodItems} />
        </Box>
    );
}

export default App;
