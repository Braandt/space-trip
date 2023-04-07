/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': 'Barlow',
      'emphasis': 'Bellefair',
      'subemphasis': 'Barlow Condensed'
    },
    extend: {
      backgroundImage: {
        'home': "url('/Bitmap.jpg')",
        'home2': "url('/Bitmap2.jpg')",
        'destinations': "url('/BGdestinations.jpg')",
        'crew': "url('/BGcrew.jpg')",
        'technology': "url('/BGtechnology.jpg')",
      },
      colors: {
        'lightblue': '#d0d6f9'
      }
    },
  },
  plugins: [],
}

