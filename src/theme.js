import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";



const theme = createTheme({
    palette: {
        primary: {
            main: '#614BC3',
        },
        secondary: {
            main: '#33BBC5',
        },
        error: {
            main: red.A400,
        }
    }
})

export default theme;