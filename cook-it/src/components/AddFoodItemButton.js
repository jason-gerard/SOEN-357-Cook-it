import { Button, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
};

export default function AddFoodItemButton() {
    return (
        <Fab sx={fabStyle} color="primary" aria-label="add">
            <AddIcon />
        </Fab>
    );
}
