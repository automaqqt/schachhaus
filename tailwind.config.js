const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors')

module.exports = {
    darkMode: 'class',
    content: [
        './templates/**/*.html',
        './static_src/**/*.{js,ts}',
    ],
    theme: {
        screens: {
            'tall': {
                'raw': '(min-height: 840px)'
            },
            sm: '412px',
            md: '768px',
            lg: '1024px',
        },
        colors: {
            ...colors,
            'white': '#FFFFFF',
            'black': '#5E2925',
            'mackerel': {
                DEFAULT: '#D0B090', // Beige RAL 1001 (light mode background)
                100: '#FAF6F2',
                200: '#EBDCCB',
                300: '#D0B090', // Base beige
                400: '#5E2925', // Kastanienbraun RAL 8015 (dark mode background)
                500: '#4B2120',
                600: '#38191A',
                700: '#251214',
                800: '#172351', // Kobaltblau RAL 5013 (link color)
                900: '#0A0A0A',
            },
            'link': {
                DEFAULT: '#172351', // Kobaltblau RAL 5013
                hover: '#E4B100', // Goldgelb RAL 1004
            },
            'inherit': 'inherit',
            'current': 'currentColor',
            'transparent': 'transparent',
        },
        fontSize: {
            'xs': ['12px', '1.2'],
            'sm': ['14px', '1.2'],
            'base': ['16px', '1.2'],
            'lg': ['18px', '1.2'],
            'xl': ['20px', '1.2'],
            '2xl': ['24px', '1.2'],
            '3xl': ['28px', '1.2'],
            '4xl': ['36px', '1.2'],
            '5xl': ['38px', '1.2'],
            '6xl': ['48px', '1.2'],
            '7xl': ['60px', '1.2'],
            '8xl': ['70px', '1.2'],
            '9xl': ['80px', '1.2'],
            '10xl': ['100px', '1.2'],
        },
        fontFamily: {
            sans3: ["'Source Sans 3', sans-serif"],
            serif4: ["'Source Serif 4', serif"],
            codepro: ["'Source Code Pro', monospace"],
        },
        extend: {
            backgroundImage: {
                'slash': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='#26899E' viewBox='0 0 11 11'%3E%3Cpath d='M1.78239 10.8013L0.900391 9.99126L4.19439 6.60726L4.78839 7.14726L1.78239 10.8013ZM7.39839 4.33926L6.80439 3.79926L9.81039 0.145264L10.6924 0.955263L7.39839 4.33926Z' /%3E%3C/svg%3E");`
            },
        },
    }
};