/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                impact: ['impact'],
                poppins: ['Poppins', 'sans-serif'],
                karla: ['Karla', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
        },
    },

    plugins: [require('daisyui')],
};
