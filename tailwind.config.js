/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,svg}"],
    theme: {
        extend: {
            colors: {
                customBlue: "#0073E6",
                customGray: "#EFF2F8",
                customInputColor:"#DEDEDE",
            },
        },
    },
    plugins: [],
};
