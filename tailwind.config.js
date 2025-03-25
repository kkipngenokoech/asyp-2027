import defaultTheme from "tailwindcss/defaultTheme";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                customyellow: '#DBCE0B',
                customblue: '#0070C0',
                customred: '#FF4136',      // A red tone
                customdarkred: '#B03A2E',  // A darker red tone
                customlightred: '#FF6F61', // A lighter red tone
            },
        },
    },

    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#a01d21",
                    button: "#6b7280",
                    secondary: "#2B6CB0",
                    black: "#000000",
                },
            },
        ],
    },

    plugins: [daisyui],
};
