import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

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
