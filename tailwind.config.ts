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
                wordmark:   ['Lovan', 'serif'],
                display:    ['"Cormorant Garamond"', 'serif'],
                structural: ['Cinzel', 'serif'],
                body:       ['"DM Sans"', 'sans-serif'],
            },
            colors: {
                background: '#F0ECE4',
                foreground: '#202020',
                umami: {
                    carbon:      '#1A1916',
                    'carbon-text': '#202020',
                    'dim-grey':  '#5E6269',
                    silver:      '#C0C0C0',
                    alabaster:   '#E0E0E0',
                    linen:       '#F0ECE4',
                    taupe:       '#8F7F70',
                    'olive-bark':'#624203',
                    'dark-walnut':'#3E1D00',
                    'stone-brown':'#5C5248',
                    'gold': '#C9A96E'
                },
                primary: {
                    DEFAULT: '#1A1916',
                    foreground: '#F0ECE4',
                },
                secondary: {
                    DEFAULT: '#5E6269',
                    foreground: '#F0ECE4',
                },
                accent: {
                    DEFAULT: '#624203',
                    foreground: '#F0ECE4',
                },
                muted: {
                    DEFAULT: '#E0E0E0',
                    foreground: '#5E6269',
                },
                border: '#E0E0E0',
                input:  '#E0E0E0',
                ring:   '#624203',
            },
            borderRadius: {
                lg: '0px',
                md: '0px',
                sm: '0px',
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
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
                'fade-in': 'fade-in 0.6s ease-out forwards',
            },
        }
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;