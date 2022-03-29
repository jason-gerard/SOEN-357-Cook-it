import "./App.css";
import {Box, Button, Card, Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
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
    const [foodItems, setFoodItems] = React.useState([3, 5, 6, 7, 11]);

    return (
        <Box sx={boxStyle} className="App">
            <FoodItemList foodItems={foodItems} />
            <AddFoodItemButton />
        </Box>
    );
}

export default App;
