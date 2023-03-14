/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",

    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#181818",
        primary: "#212121",
        secondary: "#3D3D3D",
        txtcolor: "#EEEEEE",
        sectxtcolor: "#CACACA",
      },
      screens: {
        llg: "1100px",
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
};
