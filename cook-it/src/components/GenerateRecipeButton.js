import * as React from "react";
import { Button, Dialog, DialogTitle, Fab, TextField } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const fabStyle = {
    position: "absolute",
    bottom: 16,
    margin: "0 auto",
};

export default function GenerateRecipeButton(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button sx={fabStyle} variant="contained" size="large" endIcon={<ArrowForwardIosIcon />}>Generate Recipe</Button>
        </React.Fragment>
    );
}
