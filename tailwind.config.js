/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:"'Poppins', sans-serif",
        KodeMono:["Kode Mono", "monospace"]
      },
      backgroundImage: {
        'my-background-image': "url('/public/homify-logo.png')",
      },
    },
  },
  plugins: [require("daisyui")],
}

