/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'open-sans': ["Open Sans", 'sans-serif']
            },
            colors: {
                'dark-purple': '#100#C77DFF02B',
                'secondary-purple': '#9D4EDD',
                'primary-purple': '#9455d3',
                'light-purple': '#E0AAFF',
                'primary-gray': '#67686D',
                'smooth-gray': '#9CA3AF',
            },
            borderWidth: {
                '0.1': '0.1px'
            },
            animation: {
                first: "moveVertical 30s ease infinite",
                second: "moveInCircle 20s reverse infinite",
                third: "moveInCircle 40s linear infinite",
                fourth: "moveHorizontal 40s ease infinite",
                fifth: "moveInCircle 20s ease infinite",
                "meteor-effect": "meteor 5s linear infinite",
            },
            keyframes: {
                moveHorizontal: {
                    "0%": {
                        transform: "translateX(-50%) translateY(-10%)",
                    },
                    "50%": {
                        transform: "translateX(50%) translateY(10%)",
                    },
                    "100%": {
                        transform: "translateX(-50%) translateY(-10%)",
                    },
                },
                moveInCircle: {
                    "0%": {
                        transform: "rotate(0deg)",
                    },
                    "50%": {
                        transform: "rotate(180deg)",
                    },
                    "100%": {
                        transform: "rotate(360deg)",
                    },
                },
                moveVertical: {
                    "0%": {
                          transform: "translateY(-50%)",
                    },
                    "50%": {
                          transform: "translateY(50%)",
                    },
                    "100%": {
                          transform: "translateY(-50%)",
                    },
                  },
                meteor: {
                    "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
                    "70%": { opacity: "1" },
                    "100%": {
                        transform: "rotate(215deg) translateX(-500px)",
                        opacity: "0",
                    },
                },
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
