import { extendTheme } from '@chakra-ui/react'; // sempre importa do chakra react
//extendTheme para usar uma stilização global

export const theme = extendTheme({
    colors:{
        gray: {
            "200": "#F2F4F5"
        },

        blue:{
            "500": "#0074D8",
            "600": "#1D63CB"
        }
    },

    fonts:{
        heading: "Poppins",
        body: "Poppins",
    },

    styles:{
        global:{
            body:{
                bg: "gray.200",
            }
        }
    }
})