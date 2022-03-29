import "./App.css";
import {Box, Button, Card, Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AddFoodItemButton from "./components/AddFoodItemButton";
import FoodItemList from "./components/FoodItemList";

const boxtyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    position: "relative",
};

function App() {
    return (
        <Box sx={boxtyle} className="App">
            <FoodItemList />
            <AddFoodItemButton />
        </Box>
    );
}

export default App;
