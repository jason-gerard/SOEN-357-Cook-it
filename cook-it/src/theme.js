import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// defines the root styles for the material ui package
const theme = createTheme({
    palette: {
        primary: {
            main: "#009688",
        },
        secondary: {
            main: "#f50057",
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;
