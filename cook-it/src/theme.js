import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// defines the root styles for the material ui package
const theme = createTheme({
    palette: {
        primary: {
            main: "#7E38B7",
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: [
            'Monserrat',
            'sans-serif',
        ].join(','),
    }
});

export default theme;
