import * as React from 'react';
import {Button, Dialog, DialogTitle, Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
};

function SimpleDialog(props) {
    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    };

    const handleListItemClick = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Set backup account</DialogTitle>
            body text
        </Dialog>
    );
}


export default function AddFoodItemButton() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Fab sx={fabStyle} color="primary" aria-label="add" onClick={handleClickOpen}>
                <AddIcon />
            </Fab>

            <SimpleDialog
                open={open}
                onClose={handleClose}
            />
        </React.Fragment>
    );
}
