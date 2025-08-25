/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        // ory
        "./node_modules/@ory/elements-react/dist/theme/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    extend: {},
  },
  plugins: [],
}

