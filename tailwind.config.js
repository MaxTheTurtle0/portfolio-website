const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
    export default {
        content: ["./**/*.{html,js,css}"],
        theme: {
            screens: {
                xs: "475px",
                ...defaultTheme.screens,
            },
            extend: {
                colors: {
                    primary: "#202731",
                    intro: "#ee6e3d",
                    projects: "#3c31dd",
                    tools: "#00caca",
                },
            },
        },
        plugins: [],
    }
