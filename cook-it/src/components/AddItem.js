import { Button, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export default function AddItem() {
    return (
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
    );
}
