
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            fontFamily: {
                blanka: ['Lovan', 'sans-serif'],
                ppneuemontreal: ['PP Neue Montreal', 'sans-serif'],
            },
            colors: {
                background: '#F9F5EF', // or pure #FFFFFF if you want it super clean
                umami: {
                    black: '#000000',
                    white: '#FFFFFF',
                    cream: '#fbf7e9',
                    charcoal: '#3E3C3C',  // for subtle softer black text if needed
                    nube: '#F7F7F7',
                    berry: '#C44569',
                    gold:'#DAA520',
                    transparent: 'transparent',
                    current: 'currentColor',
                },
                primary: {
                    DEFAULT: '#000000',
                    foreground: '#FFFFFF',
                },
                secondary: {
                    DEFAULT: '#C44569',
                    foreground: '#FFFFFF',
                },
                border: '#3E3C3C',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.6s ease-out',
            },
        }
    },
    plugins: [require("tailwindcss-animate")],

};

export default config;