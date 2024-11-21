/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-image': "url('/src/assets/pizza1.jpeg')",
        'main1-image': "url('/src/assets/blur-img.jpeg')",
      },
    },
  },
  plugins: [],
}
